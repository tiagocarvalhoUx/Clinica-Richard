<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import { useAuthStore } from '@/stores/auth.store';
import { usePacienteStore } from '@/stores/paciente.store';
import { useToast } from '@/composables/useToast';
import { uploadFotoPaciente } from '@/services/pacientes.service';

const auth = useAuthStore();
const pacienteStore = usePacienteStore();
const toast = useToast();
const router = useRouter();
const { paciente, usuario } = storeToRefs(auth);
const { salvando } = storeToRefs(pacienteStore);

const form = reactive({
  nome: '',
  telefone: '',
  cpf: '',
  data_nascimento: '',
  foto_url: '',
});

const inputArquivo = ref<HTMLInputElement | null>(null);
const previaFoto = ref<string>('');
const enviandoFoto = ref<boolean>(false);

const fotoExibida = computed(() => previaFoto.value || form.foto_url || '');
const inicialNome = computed(() => (form.nome.trim()[0] || '?').toUpperCase());

watch(
  paciente,
  (valor) => {
    if (!valor) return;
    pacienteStore.dados = valor;
    form.nome = valor.nome ?? '';
    form.telefone = valor.telefone ?? '';
    form.cpf = valor.cpf ?? '';
    form.data_nascimento = valor.data_nascimento ?? '';
    form.foto_url = valor.foto_url ?? '';
    previaFoto.value = '';
  },
  { immediate: true },
);

function abrirSeletor(): void {
  inputArquivo.value?.click();
}

async function aoSelecionarArquivo(evento: Event): Promise<void> {
  const alvo = evento.target as HTMLInputElement;
  const arquivo = alvo.files?.[0];
  if (!arquivo) return;

  if (!arquivo.type.startsWith('image/')) {
    toast.erro('Arquivo inválido', 'Selecione uma imagem (JPG, PNG ou WEBP).');
    alvo.value = '';
    return;
  }
  const limiteBytes = 5 * 1024 * 1024;
  if (arquivo.size > limiteBytes) {
    toast.erro('Imagem muito grande', 'Escolha uma foto de até 5 MB.');
    alvo.value = '';
    return;
  }

  const uid = usuario.value?.uid;
  if (!uid) {
    toast.erro('Sessão expirada', 'Entre novamente para enviar a foto.');
    alvo.value = '';
    return;
  }

  previaFoto.value = URL.createObjectURL(arquivo);
  enviandoFoto.value = true;
  try {
    const url = await uploadFotoPaciente(uid, arquivo);
    form.foto_url = url;
    toast.sucesso('Foto carregada', 'Clique em salvar para confirmar.');
  } catch (e) {
    console.error('[perfil] falha no upload', e);
    previaFoto.value = '';
    toast.erro('Falha no envio', 'Não foi possível enviar a foto. Tente novamente.');
  } finally {
    enviandoFoto.value = false;
    alvo.value = '';
  }
}

function removerFoto(): void {
  previaFoto.value = '';
  form.foto_url = '';
}

async function salvar(): Promise<void> {
  try {
    await pacienteStore.atualizar({
      nome: form.nome,
      telefone: form.telefone || null,
      cpf: form.cpf || null,
      data_nascimento: form.data_nascimento || null,
      foto_url: form.foto_url || null,
    });
    if (paciente.value && pacienteStore.dados) {
      auth.paciente = pacienteStore.dados;
    }
    toast.sucesso('Perfil atualizado', 'Seus dados foram salvos.');
    router.push({ name: 'portal-agendar' });
  } catch {
    toast.erro('Não foi possível salvar', 'Confira os dados e tente novamente.');
  }
}
</script>

<template>
  <section class="cartao p-5 sm:p-6 max-w-3xl">
    <h2 class="font-heading text-2xl font-semibold">Meu perfil</h2>
    <p class="text-sm text-slate-500 mt-1">Mantenha seus dados atualizados para facilitar o atendimento.</p>

    <form class="mt-6 grid gap-5 sm:grid-cols-2" @submit.prevent="salvar">
      <div class="sm:col-span-2 flex items-center gap-4">
        <div
          class="h-20 w-20 rounded-full overflow-hidden bg-primary-100 text-primary-700 flex items-center justify-center text-2xl font-semibold ring-2 ring-white shadow-sm"
        >
          <img
            v-if="fotoExibida"
            :src="fotoExibida"
            alt="Foto do paciente"
            class="h-full w-full object-cover"
          />
          <span v-else>{{ inicialNome }}</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="rotulo">Foto de perfil</span>
          <div class="flex flex-wrap gap-2">
            <AppButton
              variante="outline"
              tamanho="sm"
              :carregando="enviandoFoto"
              @click="abrirSeletor"
            >
              {{ fotoExibida ? 'Trocar foto' : 'Escolher da galeria' }}
            </AppButton>
            <AppButton
              v-if="fotoExibida"
              variante="ghost"
              tamanho="sm"
              :desabilitado="enviandoFoto"
              @click="removerFoto"
            >
              Remover
            </AppButton>
          </div>
          <p class="text-xs text-slate-500">JPG, PNG ou WEBP — até 5 MB.</p>
          <input
            ref="inputArquivo"
            type="file"
            accept="image/*"
            class="hidden"
            @change="aoSelecionarArquivo"
          />
        </div>
      </div>

      <AppInput v-model="form.nome" rotulo="Nome completo" obrigatorio />
      <AppInput v-model="form.telefone" rotulo="Telefone" placeholder="(00) 00000-0000" autocomplete="tel" />
      <AppInput v-model="form.cpf" rotulo="CPF" placeholder="000.000.000-00" />
      <AppInput v-model="form.data_nascimento" tipo="date" rotulo="Data de nascimento" />
      <div class="sm:col-span-2">
        <AppButton tipo="submit" :carregando="salvando" :desabilitado="enviandoFoto">
          Salvar alterações
        </AppButton>
      </div>
    </form>
  </section>
</template>
