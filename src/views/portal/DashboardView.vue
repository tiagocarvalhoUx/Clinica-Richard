<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useAgendamentoStore } from '@/stores/agendamento.store';
import { formatarDataHora, rotuloStatusAgendamento, classeBadgeStatus } from '@/composables/formatadores';

const auth = useAuthStore();
const agendamento = useAgendamentoStore();
const { paciente } = storeToRefs(auth);
const { meusAgendamentos, carregandoMeus } = storeToRefs(agendamento);

const proximos = computed(() =>
  meusAgendamentos.value
    .filter((item) => new Date(item.data_hora).getTime() >= Date.now() && item.status !== 'cancelado')
    .slice(0, 3),
);

onMounted(async () => {
  if (!paciente.value) return;
  await agendamento.carregarMeusAgendamentos(paciente.value.id);
  agendamento.assinarRealtime(paciente.value.id);
});
</script>

<template>
  <div class="space-y-6">
    <section class="grid gap-4 md:grid-cols-3">
      <div class="cartao p-5">
        <p class="text-sm text-slate-500">Próximas consultas</p>
        <p class="mt-2 text-3xl font-semibold text-dark">{{ proximos.length }}</p>
      </div>
      <div class="cartao p-5">
        <p class="text-sm text-slate-500">Total de agendamentos</p>
        <p class="mt-2 text-3xl font-semibold text-dark">{{ meusAgendamentos.length }}</p>
      </div>
      <div class="cartao p-5">
        <p class="text-sm text-slate-500">Status em tempo real</p>
        <p class="mt-2 text-sm font-semibold text-secondary-700">Ativo</p>
      </div>
    </section>

    <section class="cartao p-5">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="font-heading text-2xl font-semibold">Seu cuidado em andamento</h2>
          <p class="text-sm text-slate-500 mt-1">Acompanhe os próximos compromissos da clínica.</p>
        </div>
        <router-link :to="{ name: 'portal-agendar' }" class="btn-primary">Agendar consulta</router-link>
      </div>

      <div v-if="carregandoMeus" class="mt-6 space-y-3">
        <AppSkeleton v-for="i in 3" :key="i" class="h-20" />
      </div>
      <div v-else-if="proximos.length === 0" class="mt-6 rounded-xl bg-primary-50 p-5 text-sm text-primary-800">
        Você ainda não possui consultas futuras. Agende um horário para continuar seu tratamento.
      </div>
      <div v-else class="mt-6 divide-y divide-slate-100">
        <article v-for="item in proximos" :key="item.id" class="py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="font-semibold text-dark">{{ item.especialidade?.nome ?? 'Consulta odontológica' }}</p>
            <p class="text-sm text-slate-500">{{ item.medico?.nome ?? 'Equipe Dr. Richard' }} · {{ formatarDataHora(item.data_hora) }}</p>
          </div>
          <span class="badge" :class="classeBadgeStatus(item.status)">{{ rotuloStatusAgendamento(item.status) }}</span>
        </article>
      </div>
    </section>
  </div>
</template>
