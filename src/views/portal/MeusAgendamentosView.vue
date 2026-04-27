<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AppButton from '@/components/ui/AppButton.vue';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useAgendamentoStore } from '@/stores/agendamento.store';
import { useToast } from '@/composables/useToast';
import { classeBadgeStatus, formatarDataHora, rotuloStatusAgendamento } from '@/composables/formatadores';

const auth = useAuthStore();
const agendamento = useAgendamentoStore();
const toast = useToast();
const { paciente } = storeToRefs(auth);
const { meusAgendamentos, carregandoMeus } = storeToRefs(agendamento);

onMounted(async () => {
  if (!paciente.value) return;
  await agendamento.carregarMeusAgendamentos(paciente.value.id);
  agendamento.assinarRealtime(paciente.value.id);
});

async function cancelar(id: string): Promise<void> {
  try {
    await agendamento.cancelar(id);
    toast.sucesso('Agendamento cancelado', 'O horário foi liberado para a clínica.');
    if (paciente.value) await agendamento.carregarMeusAgendamentos(paciente.value.id);
  } catch {
    toast.erro('Não foi possível cancelar', 'Tente novamente ou fale com a clínica.');
  }
}
</script>

<template>
  <section class="cartao p-5 sm:p-6">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="font-heading text-2xl font-semibold">Meus agendamentos</h2>
        <p class="text-sm text-slate-500 mt-1">Status atualizado automaticamente quando a clínica alterar sua consulta.</p>
      </div>
      <router-link :to="{ name: 'portal-agendar' }" class="btn-primary">Novo agendamento</router-link>
    </div>

    <div v-if="carregandoMeus" class="mt-6 space-y-3">
      <AppSkeleton v-for="i in 4" :key="i" class="h-24" />
    </div>
    <div v-else-if="meusAgendamentos.length === 0" class="mt-6 rounded-xl bg-slate-50 p-5 text-sm text-slate-600">
      Nenhum agendamento encontrado.
    </div>
    <div v-else class="mt-6 divide-y divide-slate-100">
      <article v-for="item in meusAgendamentos" :key="item.id" class="py-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="font-semibold text-dark">{{ item.especialidade?.nome ?? 'Consulta odontológica' }}</p>
          <p class="text-sm text-slate-500">{{ item.medico?.nome ?? 'Equipe Dr. Richard' }} · {{ formatarDataHora(item.data_hora) }}</p>
          <p v-if="item.observacoes" class="text-sm text-slate-500 mt-1">{{ item.observacoes }}</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="badge" :class="classeBadgeStatus(item.status)">{{ rotuloStatusAgendamento(item.status) }}</span>
          <AppButton v-if="item.status === 'pendente' || item.status === 'confirmado'" variante="ghost" tamanho="sm" @click="cancelar(item.id)">
            Cancelar
          </AppButton>
        </div>
      </article>
    </div>
  </section>
</template>
