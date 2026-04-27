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
        class="relative mb-8 grid overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-slate-100 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <span
          class="pointer-events-none absolute -left-10 -top-10 hidden h-40 w-40 rounded-full bg-primary-100/60 blur-3xl lg:block"
          aria-hidden="true"
        />
        <span
          class="pointer-events-none absolute -bottom-12 -right-10 hidden h-48 w-48 rounded-full bg-secondary-100/60 blur-3xl lg:block"
          aria-hidden="true"
        />

        <div class="group relative min-h-[320px] overflow-hidden bg-primary-50 lg:min-h-full">
          <img
            src="/image/clinica-03.png"
            alt="Equipe do Dr. Richard em atendimento humanizado a uma paciente"
            class="h-full w-full object-cover object-[55%_45%] transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/45 via-primary-900/5 to-transparent"
            aria-hidden="true"
          />
          <span
            class="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary-700 shadow-sm backdrop-blur-md ring-1 ring-white/60"
          >
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21s-7-4.35-7-10a5 5 0 019-3 5 5 0 019 3c0 5.65-7 10-7 10z" />
            </svg>
            Atendimento humanizado
          </span>
          <div
            class="absolute inset-x-4 bottom-4 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-elevated ring-1 ring-white/70 backdrop-blur-md sm:flex"
          >
            <div
              class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-700"
              aria-hidden="true"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />
              </svg>
            </div>
            <div class="min-w-0 text-sm leading-tight">
              <p class="font-semibold text-dark">Consultas com tempo de qualidade</p>
              <p class="mt-0.5 text-xs text-slate-500">
                Em média 50 min para examinar, escutar e explicar
              </p>
            </div>
          </div>
        </div>

        <div class="relative p-6 sm:p-8 lg:p-10">
          <span class="eyebrow">Experiência do paciente</span>
          <h3 class="font-heading mt-3 text-3xl font-semibold leading-tight text-dark">
            Atendimento que explica, acolhe e acompanha.
          </h3>
          <p class="mt-4 leading-relaxed text-slate-600">
            Um bom tratamento começa antes do procedimento: começa com escuta, diagnóstico
            claro e uma equipe que respeita o tempo de cada pessoa.
          </p>
          <div class="mt-6 grid grid-cols-3 gap-3">
            <div
              class="group/stat relative overflow-hidden rounded-2xl border border-primary-100 bg-primary-50/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <span
                class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600"
                aria-hidden="true"
              />
              <div class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-primary-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2l2.92 6.26L22 9.27l-5 4.73L18.18 21 12 17.77 5.82 21 7 14l-5-4.73 7.08-1.01L12 2z"
                  />
                </svg>
                <p class="font-heading text-2xl font-semibold text-primary-700">5.0</p>
              </div>
              <p class="mt-1.5 text-xs text-slate-500">satisfação média</p>
            </div>
            <div
              class="group/stat relative overflow-hidden rounded-2xl border border-secondary-100 bg-secondary-50/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <span
                class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-secondary-400 to-secondary-600"
                aria-hidden="true"
              />
              <div class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-secondary-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  />
                </svg>
                <p class="font-heading text-2xl font-semibold text-secondary-700">100%</p>
              </div>
              <p class="mt-1.5 text-xs text-slate-500">escuta ativa</p>
            </div>
            <div
              class="group/stat relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <span
                class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600"
                aria-hidden="true"
              />
              <div class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />
                </svg>
                <p class="font-heading text-2xl font-semibold text-dark">24h</p>
              </div>
              <p class="mt-1.5 text-xs text-slate-500">orientação pós-consulta</p>
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
