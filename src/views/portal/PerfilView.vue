<script setup lang="ts">
import { reactive, watch } from 'vue';
import { storeToRefs } from 'pinia';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import { useAuthStore } from '@/stores/auth.store';
import { usePacienteStore } from '@/stores/paciente.store';
import { useToast } from '@/composables/useToast';

const auth = useAuthStore();
const pacienteStore = usePacienteStore();
const toast = useToast();
const { paciente } = storeToRefs(auth);
const { salvando } = storeToRefs(pacienteStore);

const form = reactive({
  nome: '',
  telefone: '',
  cpf: '',
  data_nascimento: '',
  foto_url: '',
});

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
  },
  { immediate: true },
);

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
      <AppInput v-model="form.nome" rotulo="Nome completo" obrigatorio />
      <AppInput v-model="form.telefone" rotulo="Telefone" placeholder="(00) 00000-0000" autocomplete="tel" />
      <AppInput v-model="form.cpf" rotulo="CPF" placeholder="000.000.000-00" />
      <AppInput v-model="form.data_nascimento" tipo="date" rotulo="Data de nascimento" />
      <AppInput v-model="form.foto_url" rotulo="URL da foto" class="sm:col-span-2" />
      <div class="sm:col-span-2">
        <AppButton tipo="submit" :carregando="salvando">Salvar alterações</AppButton>
      </div>
    </form>
  </section>
</template>
