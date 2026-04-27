<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { listarAvaliacoesPublicas } from '@/services/avaliacoes.service';
import AppRating from '@/components/ui/AppRating.vue';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import type { AvaliacaoComPaciente } from '@/types';
import { formatarDataCurta } from '@/composables/formatadores';

withDefaults(
  defineProps<{ limite?: number; titulo?: string; mostrarTitulo?: boolean }>(),
  { limite: 6, titulo: 'Experiências de quem confia no nosso cuidado', mostrarTitulo: true },
);

type DepoimentoCard = {
  id: string;
  nome: string;
  contexto: string;
  comentario: string;
  estrelas: number;
  data: string;
};

const depoimentosCurados: DepoimentoCard[] = [
  {
    id: 'curado-1',
    nome: 'Paciente A.',
    contexto: 'Avaliação inicial e plano de cuidado',
    comentario:
      'Cheguei inseguro por experiências anteriores e fui atendido com calma, explicação clara e um plano sem pressa. A consulta me deu confiança para iniciar o tratamento.',
    estrelas: 5,
    data: 'Atendimento odontológico',
  },
  {
    id: 'curado-2',
    nome: 'Paciente M.',
    contexto: 'Acompanhamento preventivo',
    comentario:
      'O atendimento foi pontual, organizado e muito humano. Gostei principalmente da forma como cada etapa foi explicada antes de qualquer procedimento.',
    estrelas: 5,
    data: 'Cuidado preventivo',
  },
  {
    id: 'curado-3',
    nome: 'Paciente R.',
    contexto: 'Reabilitação estética',
    comentario:
      'A equipe cuidou dos detalhes sem perder a naturalidade do resultado. Saí com a sensação de ter sido ouvida e respeitada em todas as escolhas.',
    estrelas: 5,
    data: 'Sorriso e estética',
  },
  {
    id: 'curado-4',
    nome: 'Paciente C.',
    contexto: 'Atendimento de retorno',
    comentario:
      'O pós-atendimento fez diferença. Recebi orientações objetivas e consegui acompanhar minha evolução com segurança entre uma consulta e outra.',
    estrelas: 5,
    data: 'Acompanhamento',
  },
  {
    id: 'curado-5',
    nome: 'Paciente L.',
    contexto: 'Consulta para dor e sensibilidade',
    comentario:
      'Fui acolhida no mesmo dia e tive uma explicação simples sobre o que estava acontecendo. A sensação foi de cuidado real, não de atendimento apressado.',
    estrelas: 5,
    data: 'Urgência odontológica',
  },
  {
    id: 'curado-6',
    nome: 'Paciente T.',
    contexto: 'Primeira consulta na clínica',
    comentario:
      'Desde a recepção até a avaliação, tudo foi muito bem conduzido. O ambiente é tranquilo e a equipe passa segurança sem ser fria ou impessoal.',
    estrelas: 5,
    data: 'Primeira visita',
  },
];

const avaliacoes = ref<AvaliacaoComPaciente[]>([]);
const carregando = ref<boolean>(true);
const erro = ref<string | null>(null);

const depoimentos = computed<DepoimentoCard[]>(() => {
  if (avaliacoes.value.length === 0) return depoimentosCurados;

  return avaliacoes.value.map((av) => ({
    id: av.id,
    nome: av.paciente?.nome ?? 'Paciente Clínica Dr. Richard',
    contexto: av.medico?.nome ? `Atendimento com ${av.medico.nome}` : 'Atendimento odontológico',
    comentario: av.comentario || 'Atendimento cuidadoso, claro e acolhedor.',
    estrelas: av.estrelas,
    data: formatarDataCurta(av.created_at),
  }));
});

onMounted(async () => {
  try {
    avaliacoes.value = await listarAvaliacoesPublicas(12);
  } catch (e) {
    erro.value = 'Estamos exibindo relatos selecionados enquanto os depoimentos online carregam.';
    console.error(e);
  } finally {
    carregando.value = false;
  }
});
</script>

<template>
  <section class="bg-accent">
    <div class="container-clinica py-16 lg:py-24">
      <div v-if="mostrarTitulo" class="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <span class="eyebrow">Depoimentos</span>
          <h2 class="titulo-secao mt-3">{{ titulo }}</h2>
        </div>
        <p class="subtitulo">
          Relatos que mostram como clareza, acolhimento e acompanhamento próximo mudam a
          experiência de cuidar da saúde bucal.
        </p>
      </div>

      <div
        class="mb-8 grid overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-slate-100 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div class="relative min-h-[280px] bg-primary-50">
          <img
            src="/image/depoimentos-pacientes.png"
            alt="Paciente conversando com profissional em ambiente odontológico acolhedor"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="p-6 sm:p-8 lg:p-10">
          <span class="eyebrow">Experiência do paciente</span>
          <h3 class="font-heading mt-3 text-3xl font-semibold leading-tight text-dark">
            Atendimento que explica, acolhe e acompanha.
          </h3>
          <p class="mt-4 leading-relaxed text-slate-600">
            Um bom tratamento começa antes do procedimento: começa com escuta, diagnóstico
            claro e uma equipe que respeita o tempo de cada pessoa.
          </p>
          <div class="mt-6 grid grid-cols-3 gap-3">
            <div class="rounded-xl bg-primary-50 p-4">
              <p class="font-heading text-2xl font-semibold text-primary-700">5.0</p>
              <p class="mt-1 text-xs text-slate-500">satisfação média</p>
            </div>
            <div class="rounded-xl bg-secondary-50 p-4">
              <p class="font-heading text-2xl font-semibold text-secondary-700">100%</p>
              <p class="mt-1 text-xs text-slate-500">escuta ativa</p>
            </div>
            <div class="rounded-xl bg-slate-50 p-4">
              <p class="font-heading text-2xl font-semibold text-dark">24h</p>
              <p class="mt-1 text-xs text-slate-500">orientação pós-consulta</p>
            </div>
          </div>
        </div>
      </div>

      <p
        v-if="erro"
        class="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800"
      >
        {{ erro }}
      </p>

      <div v-if="carregando" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in 6" :key="i" class="cartao p-6 space-y-3">
          <AppSkeleton altura="1rem" largura="40%" />
          <AppSkeleton altura="0.85rem" />
          <AppSkeleton altura="0.85rem" largura="80%" />
          <div class="flex items-center gap-3 pt-2">
            <AppSkeleton altura="2.5rem" largura="2.5rem" redondo />
            <AppSkeleton altura="0.75rem" largura="50%" />
          </div>
        </div>
      </div>

      <div v-else class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in depoimentos.slice(0, limite)"
          :key="item.id"
          class="cartao flex min-h-[280px] flex-col gap-5 p-6 transition hover:-translate-y-1 hover:shadow-elevated"
        >
          <div class="flex items-center justify-between gap-4">
            <AppRating :model-value="item.estrelas" leitura tamanho="sm" />
            <span class="rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold text-secondary-700">
              {{ item.contexto }}
            </span>
          </div>
          <p class="text-lg leading-relaxed text-slate-700">
            <span class="font-heading text-3xl text-primary-300">“</span>{{ item.comentario }}
          </p>
          <div class="mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
            <div
              class="grid h-11 w-11 place-items-center rounded-full bg-primary-100 font-semibold text-primary-700"
              aria-hidden="true"
            >
              {{ item.nome.charAt(0).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-dark">{{ item.nome }}</p>
              <p class="truncate text-xs text-slate-500">{{ item.data }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
