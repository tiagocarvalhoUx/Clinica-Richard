<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import AppButton from '@/components/ui/AppButton.vue';
import AppTextarea from '@/components/ui/AppTextarea.vue';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useAgendamentoStore } from '@/stores/agendamento.store';
import { useToast } from '@/composables/useToast';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const auth = useAuthStore();
const fluxo = useAgendamentoStore();
const toast = useToast();
const dataSelecionada = ref('');

const {
  especialidades,
  medicos,
  especialidadeSelecionada,
  medicoSelecionado,
  horarioSelecionado,
  observacoes,
  etapa,
  carregando,
  erro,
  datasDisponiveis,
} = storeToRefs(fluxo);

type ChaveEtapa = 'especialidade' | 'medico' | 'horario' | 'confirmacao';

const passos: { chave: ChaveEtapa; rotulo: string; curto: string }[] = [
  { chave: 'especialidade', rotulo: 'Especialidade', curto: 'Serviço' },
  { chave: 'medico', rotulo: 'Profissional', curto: 'Profissional' },
  { chave: 'horario', rotulo: 'Data e horário', curto: 'Horário' },
  { chave: 'confirmacao', rotulo: 'Confirmação', curto: 'Revisão' },
];

const indiceAtual = computed(() => {
  if (etapa.value === 'sucesso') return passos.length;
  return passos.findIndex((p) => p.chave === etapa.value);
});

const horariosDaData = computed(() =>
  dataSelecionada.value ? fluxo.horariosDaData(dataSelecionada.value) : [],
);

function rotuloHorarioCompleto(): string {
  if (!horarioSelecionado.value) return '';
  const d = parseISO(horarioSelecionado.value.data);
  const dataStr = format(d, "EEEE, dd 'de' MMMM", { locale: ptBR });
  return `${capitalizar(dataStr)} às ${horarioSelecionado.value.hora_inicio}`;
}

function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function rotuloDiaSemana(dataYYYYMMDD: string): string {
  const d = parseISO(dataYYYYMMDD);
  return capitalizar(format(d, 'EEE', { locale: ptBR }).replace('.', ''));
}

function rotuloDiaMes(dataYYYYMMDD: string): string {
  const d = parseISO(dataYYYYMMDD);
  return format(d, 'dd/MM', { locale: ptBR });
}

function quantidadeHorarios(data: string): number {
  return fluxo.horariosDaData(data).length;
}

function inicialDoNome(nome: string | null | undefined): string {
  return (nome?.trim()[0] || '?').toUpperCase();
}

onMounted(async () => {
  fluxo.reiniciar();
  dataSelecionada.value = '';
  await fluxo.carregarEspecialidades();
});

async function escolherMedico(medicoId: string): Promise<void> {
  const medico = medicos.value.find((m) => m.id === medicoId);
  if (!medico) return;
  dataSelecionada.value = '';
  await fluxo.selecionarMedico(medico);
  if (datasDisponiveis.value.length > 0) {
    dataSelecionada.value = datasDisponiveis.value[0];
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

async function novoAgendamento(): Promise<void> {
  fluxo.reiniciar();
  dataSelecionada.value = '';
  await fluxo.carregarEspecialidades();
}
</script>

<template>
  <div class="space-y-5">
    <nav class="text-sm text-slate-500" aria-label="Etapas">
      Portal / <span class="text-dark">Agendar consulta</span>
    </nav>

    <header class="cartao p-5 sm:p-6">
      <h1 class="font-heading text-2xl font-semibold">Agendar consulta</h1>
      <p class="text-sm text-slate-500 mt-1">
        Em poucos passos: escolha o serviço, o profissional, a data e confirme.
      </p>

      <ol class="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
        <li
          v-for="(passo, i) in passos"
          :key="passo.chave"
          class="flex flex-col items-center gap-2 text-center"
        >
          <div class="flex w-full items-center gap-2">
            <span class="hidden sm:block flex-1 h-px" :class="i === 0 ? 'bg-transparent' : i <= indiceAtual ? 'bg-primary-500' : 'bg-slate-200'" />
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition shrink-0"
              :class="
                i < indiceAtual
                  ? 'bg-primary-500 text-white shadow-card'
                  : i === indiceAtual
                    ? 'bg-white text-primary-700 ring-2 ring-primary-500'
                    : 'bg-slate-100 text-slate-500'
              "
            >
              <svg v-if="i < indiceAtual" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span v-else>{{ i + 1 }}</span>
            </span>
            <span class="hidden sm:block flex-1 h-px" :class="i === passos.length - 1 ? 'bg-transparent' : i < indiceAtual ? 'bg-primary-500' : 'bg-slate-200'" />
          </div>
          <span
            class="text-[11px] sm:text-xs font-medium leading-tight"
            :class="i === indiceAtual ? 'text-primary-700' : i < indiceAtual ? 'text-dark' : 'text-slate-500'"
          >
            <span class="hidden sm:inline">{{ passo.rotulo }}</span>
            <span class="sm:hidden">{{ passo.curto }}</span>
          </span>
        </li>
      </ol>
    </header>

    <div
      v-if="especialidadeSelecionada || medicoSelecionado || horarioSelecionado"
      class="flex flex-wrap items-center gap-2"
    >
      <span v-if="especialidadeSelecionada" class="badge-primary">
        {{ especialidadeSelecionada.nome }}
      </span>
      <span v-if="medicoSelecionado" class="badge-secondary">
        {{ medicoSelecionado.nome }}
      </span>
      <span v-if="horarioSelecionado" class="badge-neutral">
        {{ rotuloHorarioCompleto() }}
      </span>
    </div>

    <p v-if="erro" class="rounded-xl bg-danger-50 p-3 text-sm text-danger-700">{{ erro }}</p>

    <section class="cartao p-5 sm:p-6">
      <div v-if="etapa !== 'sucesso'" class="flex items-start justify-between gap-3">
        <div>
          <h2 class="font-heading text-xl font-semibold">
            <template v-if="etapa === 'especialidade'">Escolha a especialidade</template>
            <template v-else-if="etapa === 'medico'">Escolha o profissional</template>
            <template v-else-if="etapa === 'horario'">Escolha a data e o horário</template>
            <template v-else-if="etapa === 'confirmacao'">Revise e confirme</template>
          </h2>
          <p class="text-sm text-slate-500 mt-1">
            <template v-if="etapa === 'especialidade'">Selecione o serviço que você precisa.</template>
            <template v-else-if="etapa === 'medico'">Profissionais disponíveis para {{ especialidadeSelecionada?.nome }}.</template>
            <template v-else-if="etapa === 'horario'">Agenda do(a) {{ medicoSelecionado?.nome }}.</template>
            <template v-else-if="etapa === 'confirmacao'">Confira os dados antes de enviar para a clínica.</template>
          </p>
        </div>
        <AppButton
          v-if="etapa !== 'especialidade'"
          variante="ghost"
          tamanho="sm"
          @click="fluxo.voltar()"
        >
          Voltar
        </AppButton>
      </div>

      <div v-if="carregando" class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AppSkeleton v-for="i in 6" :key="i" altura="7rem" />
      </div>

      <template v-else>
        <div v-if="etapa === 'especialidade'" class="mt-6">
          <div v-if="especialidades.length === 0" class="rounded-xl bg-slate-50 p-6 text-center">
            <p class="font-semibold text-dark">Nenhuma especialidade disponível</p>
            <p class="text-sm text-slate-500 mt-1">A clínica ainda está cadastrando os serviços. Tente novamente mais tarde.</p>
          </div>
          <div v-else class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <button
              v-for="item in especialidades"
              :key="item.id"
              type="button"
              class="cartao-hover p-5 text-left focus-visible:ring-primary-500"
              @click="fluxo.selecionarEspecialidade(item)"
            >
              <p class="font-semibold text-dark">{{ item.nome }}</p>
              <p v-if="item.descricao" class="text-sm text-slate-500 mt-2 line-clamp-3">{{ item.descricao }}</p>
              <p class="mt-3 text-sm font-semibold text-primary-600">Selecionar →</p>
            </button>
          </div>
        </div>

        <div v-else-if="etapa === 'medico'" class="mt-6">
          <div v-if="medicos.length === 0" class="rounded-xl bg-amber-50 p-6 text-center">
            <p class="font-semibold text-dark">Nenhum profissional disponível</p>
            <p class="text-sm text-slate-600 mt-1">
              Ainda não há profissionais cadastrados para
              <strong>{{ especialidadeSelecionada?.nome }}</strong>.
              Escolha outra especialidade ou fale com a clínica.
            </p>
            <AppButton class="mt-4" variante="outline" tamanho="sm" @click="fluxo.voltar()">
              Escolher outra especialidade
            </AppButton>
          </div>
          <div v-else class="grid gap-3 sm:grid-cols-2">
            <button
              v-for="medico in medicos"
              :key="medico.id"
              type="button"
              class="cartao-hover p-5 text-left flex gap-4"
              @click="escolherMedico(medico.id)"
            >
              <div
                class="h-14 w-14 shrink-0 rounded-full overflow-hidden bg-primary-100 text-primary-700 flex items-center justify-center text-lg font-semibold"
              >
                <img v-if="medico.foto_url" :src="medico.foto_url" :alt="medico.nome" class="h-full w-full object-cover" />
                <span v-else>{{ inicialDoNome(medico.nome) }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-dark truncate">{{ medico.nome }}</p>
                <p class="text-xs text-primary-700 mt-0.5">CRO {{ medico.crm }}</p>
                <p v-if="medico.bio" class="text-sm text-slate-500 mt-2 line-clamp-2">{{ medico.bio }}</p>
                <p class="mt-2 text-sm font-semibold text-primary-600">Ver agenda →</p>
              </div>
            </button>
          </div>
        </div>

        <div v-else-if="etapa === 'horario'" class="mt-6">
          <div v-if="datasDisponiveis.length === 0" class="rounded-xl bg-amber-50 p-6 text-center">
            <p class="font-semibold text-dark">Sem horários disponíveis</p>
            <p class="text-sm text-slate-600 mt-1">
              {{ medicoSelecionado?.nome }} não tem horários abertos no momento.
              Tente outro profissional ou fale com a clínica.
            </p>
            <AppButton class="mt-4" variante="outline" tamanho="sm" @click="fluxo.voltar()">
              Escolher outro profissional
            </AppButton>
          </div>
          <div v-else class="space-y-5">
            <div>
              <p class="rotulo">Selecione um dia</p>
              <div class="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                <button
                  v-for="data in datasDisponiveis"
                  :key="data"
                  type="button"
                  class="shrink-0 rounded-2xl border px-4 py-3 text-center transition min-w-[92px]"
                  :class="
                    dataSelecionada === data
                      ? 'border-primary-500 bg-primary-50 text-primary-800 shadow-card'
                      : 'border-slate-200 bg-white hover:border-primary-300 hover:bg-slate-50'
                  "
                  @click="dataSelecionada = data"
                >
                  <p class="text-xs font-semibold uppercase tracking-wide">{{ rotuloDiaSemana(data) }}</p>
                  <p class="text-lg font-bold mt-1">{{ rotuloDiaMes(data) }}</p>
                  <p class="text-[11px] mt-1" :class="dataSelecionada === data ? 'text-primary-700' : 'text-slate-500'">
                    {{ quantidadeHorarios(data) }} horário(s)
                  </p>
                </button>
              </div>
            </div>

            <div>
              <p class="rotulo">Horários disponíveis</p>
              <div v-if="horariosDaData.length === 0" class="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                Selecione uma data para ver os horários.
              </div>
              <div v-else class="grid grid-cols-3 gap-2 sm:grid-cols-5">
                <button
                  v-for="horario in horariosDaData"
                  :key="horario.id"
                  type="button"
                  class="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold transition hover:border-primary-500 hover:bg-primary-50 active:scale-[0.98]"
                  @click="fluxo.selecionarHorario(horario)"
                >
                  {{ horario.hora_inicio }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="etapa === 'confirmacao'" class="mt-6 max-w-2xl space-y-5">
          <dl class="rounded-2xl bg-primary-50 p-5 grid gap-3 text-sm">
            <div class="flex items-start justify-between gap-4">
              <dt class="font-medium text-primary-900">Especialidade</dt>
              <dd class="text-right text-primary-900 font-semibold">{{ especialidadeSelecionada?.nome }}</dd>
            </div>
            <div class="flex items-start justify-between gap-4 border-t border-primary-200/50 pt-3">
              <dt class="font-medium text-primary-900">Profissional</dt>
              <dd class="text-right text-primary-900 font-semibold">{{ medicoSelecionado?.nome }}</dd>
            </div>
            <div class="flex items-start justify-between gap-4 border-t border-primary-200/50 pt-3">
              <dt class="font-medium text-primary-900">Quando</dt>
              <dd class="text-right text-primary-900 font-semibold">{{ rotuloHorarioCompleto() }}</dd>
            </div>
            <div class="flex items-start justify-between gap-4 border-t border-primary-200/50 pt-3">
              <dt class="font-medium text-primary-900">Paciente</dt>
              <dd class="text-right text-primary-900 font-semibold">{{ auth.paciente?.nome ?? '—' }}</dd>
            </div>
          </dl>

          <AppTextarea
            v-model="observacoes"
            rotulo="Observações para a equipe"
            placeholder="Conte algo importante para o atendimento (opcional)."
            :linhas="3"
          />

          <div class="flex flex-col-reverse sm:flex-row gap-3">
            <AppButton variante="ghost" :desabilitado="carregando" @click="fluxo.voltar()">
              Voltar
            </AppButton>
            <AppButton :carregando="carregando" @click="confirmar">
              Confirmar agendamento
            </AppButton>
          </div>
        </div>

        <div v-else-if="etapa === 'sucesso'" class="mt-2 text-center max-w-xl mx-auto">
          <div class="mx-auto h-16 w-16 rounded-full bg-secondary-100 text-secondary-700 flex items-center justify-center">
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="mt-4 font-heading text-2xl font-semibold text-dark">Agendamento solicitado!</h3>
          <p class="mt-2 text-sm text-slate-600">
            A clínica vai confirmar seu horário em breve. Você pode acompanhar o status em
            <strong>Meus agendamentos</strong>.
          </p>

          <dl class="mt-5 rounded-2xl bg-slate-50 p-5 text-left grid gap-2 text-sm">
            <div class="flex justify-between gap-4">
              <dt class="text-slate-500">Especialidade</dt>
              <dd class="font-semibold text-dark">{{ especialidadeSelecionada?.nome }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-slate-500">Profissional</dt>
              <dd class="font-semibold text-dark">{{ medicoSelecionado?.nome }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-slate-500">Horário</dt>
              <dd class="font-semibold text-dark">{{ rotuloHorarioCompleto() }}</dd>
            </div>
          </dl>

          <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <router-link :to="{ name: 'portal-agendamentos' }" class="btn-primary">
              Ver meus agendamentos
            </router-link>
            <AppButton variante="outline" @click="novoAgendamento">
              Novo agendamento
            </AppButton>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>
