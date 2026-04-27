<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import AppButton from '@/components/ui/AppButton.vue';
import AppTextarea from '@/components/ui/AppTextarea.vue';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useAgendamentoStore } from '@/stores/agendamento.store';
import { useToast } from '@/composables/useToast';
import { formatarDiaSemana } from '@/composables/formatadores';

const auth = useAuthStore();
const fluxo = useAgendamentoStore();
const toast = useToast();
const dataSelecionada = ref('');

const {
  especialidades,
  medicos,
  horarios,
  especialidadeSelecionada,
  medicoSelecionado,
  horarioSelecionado,
  observacoes,
  etapa,
  carregando,
  erro,
  datasDisponiveis,
} = storeToRefs(fluxo);

const horariosDaData = computed(() =>
  dataSelecionada.value ? fluxo.horariosDaData(dataSelecionada.value) : [],
);

onMounted(async () => {
  fluxo.reiniciar();
  await fluxo.carregarEspecialidades();
});

async function escolherMedico(medicoId: string): Promise<void> {
  const medico = medicos.value.find((m) => m.id === medicoId);
  if (medico) {
    dataSelecionada.value = '';
    await fluxo.selecionarMedico(medico);
  }
}

async function confirmar(): Promise<void> {
  if (!auth.paciente) return;
  try {
    await fluxo.confirmar(auth.paciente.id);
    toast.sucesso('Consulta solicitada', 'Recebemos seu pedido de agendamento.');
  } catch (e) {
    toast.erro('Não foi possível agendar', e instanceof Error ? e.message : 'Tente novamente.');
  }
}
</script>

<template>
  <div class="space-y-6">
    <nav class="text-sm text-slate-500" aria-label="Etapas">
      Portal / <span class="text-dark">Agendar consulta</span>
    </nav>

    <section class="cartao p-5 sm:p-6">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="font-heading text-2xl font-semibold">Agendar consulta</h2>
          <p class="text-sm text-slate-500 mt-1">Escolha especialidade, profissional, data e horário.</p>
        </div>
        <AppButton v-if="etapa !== 'especialidade' && etapa !== 'sucesso'" variante="ghost" @click="fluxo.voltar()">Voltar</AppButton>
      </div>

      <p v-if="erro" class="mt-4 rounded-xl bg-danger-50 p-3 text-sm text-danger-700">{{ erro }}</p>

      <div v-if="carregando" class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AppSkeleton v-for="i in 6" :key="i" class="h-28" />
      </div>

      <div v-else-if="etapa === 'especialidade'" class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="item in especialidades"
          :key="item.id"
          type="button"
          class="cartao-hover p-5 text-left focus-visible:ring-primary-500"
          @click="fluxo.selecionarEspecialidade(item)"
        >
          <p class="font-semibold text-dark">{{ item.nome }}</p>
          <p class="text-sm text-slate-500 mt-2 line-clamp-3">{{ item.descricao }}</p>
        </button>
      </div>

      <div v-else-if="etapa === 'medico'" class="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          v-for="medico in medicos"
          :key="medico.id"
          type="button"
          class="cartao-hover p-5 text-left"
          @click="escolherMedico(medico.id)"
        >
          <p class="font-semibold text-dark">{{ medico.nome }}</p>
          <p class="text-sm text-primary-700 mt-1">{{ medico.crm }}</p>
          <p class="text-sm text-slate-500 mt-2">{{ medico.bio }}</p>
        </button>
      </div>

      <div v-else-if="etapa === 'horario'" class="mt-6 grid gap-5 lg:grid-cols-[260px_1fr]">
        <div class="space-y-2">
          <button
            v-for="data in datasDisponiveis"
            :key="data"
            type="button"
            class="w-full rounded-xl border px-4 py-3 text-left text-sm transition"
            :class="dataSelecionada === data ? 'border-primary-500 bg-primary-50 text-primary-800' : 'border-slate-200 bg-white hover:bg-slate-50'"
            @click="dataSelecionada = data"
          >
            {{ formatarDiaSemana(data) }}
          </button>
        </div>
        <div>
          <p class="text-sm font-medium text-dark mb-3">Horários disponíveis</p>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button
              v-for="horario in horariosDaData"
              :key="horario.id"
              type="button"
              class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold hover:border-primary-500 hover:bg-primary-50"
              @click="fluxo.selecionarHorario(horario)"
            >
              {{ horario.hora_inicio }}
            </button>
          </div>
          <p v-if="horarios.length > 0 && !dataSelecionada" class="text-sm text-slate-500">Selecione uma data para ver os horários.</p>
        </div>
      </div>

      <div v-else-if="etapa === 'confirmacao'" class="mt-6 max-w-2xl space-y-5">
        <div class="rounded-xl bg-primary-50 p-5 text-sm text-primary-900">
          <p><strong>Especialidade:</strong> {{ especialidadeSelecionada?.nome }}</p>
          <p><strong>Profissional:</strong> {{ medicoSelecionado?.nome }}</p>
          <p><strong>Horário:</strong> {{ horarioSelecionado?.data }} às {{ horarioSelecionado?.hora_inicio }}</p>
        </div>
        <AppTextarea v-model="observacoes" rotulo="Observações para a equipe" placeholder="Conte algo importante para o atendimento." />
        <AppButton :carregando="carregando" @click="confirmar">Confirmar agendamento</AppButton>
      </div>

      <div v-else class="mt-6 rounded-xl bg-secondary-50 p-6">
        <h3 class="font-heading text-2xl font-semibold text-dark">Agendamento solicitado</h3>
        <p class="mt-2 text-sm text-slate-600">A clínica confirmará o horário e você poderá acompanhar o status em Meus agendamentos.</p>
        <router-link :to="{ name: 'portal-agendamentos' }" class="btn-secondary mt-5 inline-flex">Ver meus agendamentos</router-link>
      </div>
    </section>
  </div>
</template>
