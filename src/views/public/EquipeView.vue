<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { listarMedicosComEspecialidade } from '@/services/medicos.service';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import CtaAgendamento from '@/components/sections/CtaAgendamento.vue';
import type { MedicoComEspecialidade } from '@/types';

type ProfissionalCard = {
  id: string;
  nome: string;
  registro: string;
  especialidade: string;
  bio: string;
  fotoUrl: string | null;
  destaque: string;
};

const equipeCurada: ProfissionalCard[] = [
  {
    id: 'curado-richard',
    nome: 'Dr. Richard Cardoso',
    registro: 'CRO/SP 1963',
    especialidade: 'Cirurgião-dentista',
    bio: 'Conduz o atendimento com foco em diagnóstico claro, plano de cuidado individualizado e comunicação simples para cada paciente.',
    fotoUrl: null,
    destaque: 'Planejamento clínico e estética do sorriso',
  },
  {
    id: 'curado-prevencao',
    nome: 'Equipe de Prevenção',
    registro: 'Atendimento clínico',
    especialidade: 'Odontologia preventiva',
    bio: 'Responsável por acompanhar rotina, orientar higiene, identificar riscos cedo e tornar cada retorno mais tranquilo e eficiente.',
    fotoUrl: null,
    destaque: 'Acompanhamento contínuo',
  },
  {
    id: 'curado-recepcao',
    nome: 'Experiência do Paciente',
    registro: 'Acolhimento e agenda',
    especialidade: 'Jornada do paciente',
    bio: 'Organiza horários, confirma informações importantes e mantém o paciente orientado antes, durante e depois da consulta.',
    fotoUrl: null,
    destaque: 'Atendimento humano e pontual',
  },
];

const medicos = ref<MedicoComEspecialidade[]>([]);
const carregando = ref<boolean>(true);
const erro = ref<string | null>(null);

const profissionais = computed<ProfissionalCard[]>(() => {
  if (medicos.value.length === 0) return equipeCurada;

  return medicos.value.map((m) => ({
    id: m.id,
    nome: m.nome,
    registro: m.crm ? `CRO/CRM ${m.crm}` : 'Registro profissional',
    especialidade: m.especialidade?.nome ?? 'Odontologia',
    bio:
      m.bio ||
      'Atendimento orientado por diagnóstico, escuta ativa e plano de cuidado individualizado.',
    fotoUrl: m.foto_url,
    destaque: 'Cuidado individualizado',
  }));
});

onMounted(async () => {
  try {
    medicos.value = await listarMedicosComEspecialidade();
  } catch (e) {
    erro.value = 'Estamos exibindo a estrutura da equipe enquanto os perfis online carregam.';
    console.error(e);
  } finally {
    carregando.value = false;
  }
});

function iniciais(nome: string): string {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}
</script>

<template>
  <section class="overflow-hidden bg-gradient-hero">
    <div class="container-clinica grid gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
      <div>
        <span class="eyebrow">Nossa equipe</span>
        <h1 class="titulo-hero mt-4 text-balance">
          Cuidado técnico com presença humana em cada etapa.
        </h1>
        <p class="subtitulo mt-5 max-w-2xl">
          A experiência na Clínica Dr. Richard foi desenhada para unir diagnóstico claro,
          conforto, organização e acompanhamento próximo antes e depois da consulta.
        </p>
        <div class="mt-8 grid max-w-xl grid-cols-3 gap-3">
          <div class="rounded-2xl bg-white/80 p-4 shadow-card ring-1 ring-slate-100">
            <p class="font-heading text-2xl font-semibold text-primary-700">1:1</p>
            <p class="mt-1 text-xs text-slate-500">plano individual</p>
          </div>
          <div class="rounded-2xl bg-white/80 p-4 shadow-card ring-1 ring-slate-100">
            <p class="font-heading text-2xl font-semibold text-secondary-700">360°</p>
            <p class="mt-1 text-xs text-slate-500">visão do cuidado</p>
          </div>
          <div class="rounded-2xl bg-white/80 p-4 shadow-card ring-1 ring-slate-100">
            <p class="font-heading text-2xl font-semibold text-dark">+10</p>
            <p class="mt-1 text-xs text-slate-500">anos de prática</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-[2rem] bg-white p-2 shadow-elevated ring-1 ring-slate-100">
          <img
            src="/image/equipe-clinica.png"
            alt="Equipe odontológica em clínica moderna"
            class="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
            loading="eager"
          />
        </div>
        <div class="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-slate-100 backdrop-blur-sm sm:left-auto sm:right-8 sm:max-w-xs">
          <p class="text-sm font-semibold text-dark">Atendimento coordenado</p>
          <p class="mt-1 text-xs leading-relaxed text-slate-500">
            Recepção, avaliação clínica e acompanhamento alinhados para reduzir dúvidas e
            tornar a jornada mais leve.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container-clinica py-16 lg:py-24">
    <div class="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <span class="eyebrow">Especialistas e atendimento</span>
        <h2 class="titulo-secao mt-3">Uma equipe preparada para acolher e resolver.</h2>
      </div>
      <p class="subtitulo">
        Mais do que listar profissionais, esta página mostra como a clínica organiza
        conhecimento, agenda e comunicação para entregar uma experiência consistente.
      </p>
    </div>

    <p
      v-if="erro"
      class="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800"
    >
      {{ erro }}
    </p>

    <div v-if="carregando" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="i in 6" :key="i" class="cartao overflow-hidden">
        <AppSkeleton altura="18rem" />
        <div class="p-5 space-y-2">
          <AppSkeleton altura="1.1rem" largura="60%" />
          <AppSkeleton altura="0.9rem" largura="40%" />
          <AppSkeleton altura="0.8rem" />
          <AppSkeleton altura="0.8rem" largura="80%" />
        </div>
      </div>
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="m in profissionais"
        :key="m.id"
        class="cartao group overflow-hidden transition hover:-translate-y-1 hover:shadow-elevated"
      >
        <div class="relative aspect-[4/3] bg-gradient-hero">
          <img
            v-if="m.fotoUrl"
            :src="m.fotoUrl"
            :alt="`Foto de ${m.nome}`"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,#d5f5ed,#f8fbfc_55%,#e8f0f1)]"
            aria-hidden="true"
          >
            <div class="grid h-24 w-24 place-items-center rounded-full bg-white/80 font-heading text-4xl font-semibold text-primary-700 shadow-card ring-1 ring-white">
              {{ iniciais(m.nome) }}
            </div>
          </div>
          <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur-sm">
            {{ m.especialidade }}
          </span>
        </div>
        <div class="p-6">
          <p class="text-xs font-semibold uppercase tracking-wider text-secondary-700">
            {{ m.destaque }}
          </p>
          <h3 class="font-heading mt-2 text-xl font-semibold text-dark">{{ m.nome }}</h3>
          <p class="mt-1 text-xs text-slate-500">{{ m.registro }}</p>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ m.bio }}</p>
        </div>
      </article>
    </div>
  </section>

  <section class="bg-accent">
    <div class="container-clinica grid gap-8 py-14 lg:grid-cols-3">
      <article class="cartao p-6">
        <h3 class="font-heading text-xl font-semibold text-dark">Diagnóstico claro</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          Antes de qualquer plano, a equipe explica achados, prioridades e alternativas de
          tratamento com linguagem simples.
        </p>
      </article>
      <article class="cartao p-6">
        <h3 class="font-heading text-xl font-semibold text-dark">Conforto e previsibilidade</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          O fluxo da consulta foi pensado para reduzir espera, ansiedade e dúvidas entre
          uma etapa e outra.
        </p>
      </article>
      <article class="cartao p-6">
        <h3 class="font-heading text-xl font-semibold text-dark">Acompanhamento próximo</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          O cuidado continua depois da cadeira: orientações, retornos e histórico do
          paciente ficam integrados.
        </p>
      </article>
    </div>
  </section>

  <CtaAgendamento />
</template>
