<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import AppButton from '@/components/ui/AppButton.vue';
import AppRating from '@/components/ui/AppRating.vue';
import AppTextarea from '@/components/ui/AppTextarea.vue';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useToast } from '@/composables/useToast';
import { listarConsultasConcluidasSemAvaliacao } from '@/services/agendamentos.service';
import { criarAvaliacao } from '@/services/avaliacoes.service';
import type { AgendamentoCompleto } from '@/types';
import { formatarDataHora } from '@/composables/formatadores';

const auth = useAuthStore();
const toast = useToast();
const { paciente } = storeToRefs(auth);
const consultas = ref<AgendamentoCompleto[]>([]);
const carregando = ref(true);
const salvandoId = ref<string | null>(null);
const estrelas = ref<Record<string, number>>({});
const comentarios = ref<Record<string, string>>({});

async function carregar(): Promise<void> {
  if (!paciente.value) return;
  carregando.value = true;
  try {
    consultas.value = await listarConsultasConcluidasSemAvaliacao(paciente.value.id);
  } finally {
    carregando.value = false;
  }
}

onMounted(carregar);

async function enviar(item: AgendamentoCompleto): Promise<void> {
  const nota = estrelas.value[item.id] ?? 0;
  if (nota < 1) {
    toast.aviso('Escolha uma nota', 'Selecione de 1 a 5 estrelas para continuar.');
    return;
  }
  salvandoId.value = item.id;
  try {
    await criarAvaliacao({
      paciente_id: item.paciente_id,
      medico_id: item.medico_id,
      agendamento_id: item.id,
      estrelas: nota,
      comentario: comentarios.value[item.id] || null,
      publica: true,
    });
    toast.sucesso('Avaliação enviada', 'Obrigado por compartilhar sua experiência.');
    await carregar();
  } catch {
    toast.erro('Não foi possível avaliar', 'Tente novamente em instantes.');
  } finally {
    salvandoId.value = null;
  }
}
</script>

<template>
  <section class="cartao p-5 sm:p-6">
    <h2 class="font-heading text-2xl font-semibold">Avaliações</h2>
    <p class="text-sm text-slate-500 mt-1">Avalie consultas concluídas e ajude a clínica a melhorar.</p>

    <div v-if="carregando" class="mt-6 space-y-3">
      <AppSkeleton v-for="i in 3" :key="i" class="h-32" />
    </div>
    <div v-else-if="consultas.length === 0" class="mt-6 rounded-xl bg-secondary-50 p-5 text-sm text-secondary-800">
      Você não possui consultas concluídas aguardando avaliação.
    </div>
    <div v-else class="mt-6 space-y-4">
      <article v-for="item in consultas" :key="item.id" class="rounded-xl border border-slate-100 p-5">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="font-semibold text-dark">{{ item.especialidade?.nome ?? 'Consulta odontológica' }}</p>
            <p class="text-sm text-slate-500">{{ item.medico?.nome ?? 'Equipe Dr. Richard' }} · {{ formatarDataHora(item.data_hora) }}</p>
          </div>
          <AppRating v-model="estrelas[item.id]" tamanho="lg" />
        </div>
        <AppTextarea v-model="comentarios[item.id]" class="mt-4" rotulo="Comentário" placeholder="Conte como foi sua experiência." />
        <AppButton class="mt-4" :carregando="salvandoId === item.id" @click="enviar(item)">Enviar avaliação</AppButton>
      </article>
    </div>
  </section>
</template>
