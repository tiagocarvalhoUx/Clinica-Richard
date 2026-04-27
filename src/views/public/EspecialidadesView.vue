<script setup lang="ts">
import CtaAgendamento from '@/components/sections/CtaAgendamento.vue';

interface EspecialidadeFolder {
  nome: string;
  descricao: string;
  destaque: string;
  categoria: string;
  icone: string;
}

const especialidades: EspecialidadeFolder[] = [
  {
    nome: 'Clareamento dental personalizado',
    descricao:
      'Planejamento individual para clarear o sorriso com segurança, preservando a naturalidade e a saúde do esmalte.',
    destaque: 'Estética do sorriso',
    categoria: 'Estética',
    icone: 'M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z',
  },
  {
    nome: 'Implantes',
    descricao:
      'Reposição de dentes perdidos com foco em função, conforto mastigatório e resultado visual integrado ao sorriso.',
    destaque: 'Reabilitação segura',
    categoria: 'Reabilitação',
    icone: 'M12 3c2.5 0 4 1.8 4 4.4 0 1.9-.9 3.5-2 4.6v7a2 2 0 01-4 0v-7c-1.1-1.1-2-2.7-2-4.6C8 4.8 9.5 3 12 3zM9 12h6',
  },
  {
    nome: 'Aparelho ortodôntico',
    descricao:
      'Correção do alinhamento dental e da mordida com acompanhamento próximo em cada etapa do tratamento.',
    destaque: 'Alinhamento e mordida',
    categoria: 'Ortodontia',
    icone: 'M4 9h16M4 15h16M8 6v12M16 6v12M6 9a2 2 0 104 0 2 2 0 00-4 0zM14 15a2 2 0 104 0 2 2 0 00-4 0z',
  },
  {
    nome: 'Todo tipo de prótese',
    descricao:
      'Soluções protéticas para recuperar estética, fala e mastigação, respeitando a anatomia e a rotina de cada paciente.',
    destaque: 'Função e estética',
    categoria: 'Reabilitação',
    icone: 'M6 14c1.5-2 3.5-3 6-3s4.5 1 6 3M8 14v3a4 4 0 008 0v-3M7 8c.8-2.5 2.4-4 5-4s4.2 1.5 5 4',
  },
  {
    nome: 'Tratamento de canal',
    descricao:
      'Cuidado endodôntico para tratar infecções internas do dente e aliviar dor, preservando a estrutura dental.',
    destaque: 'Alívio e preservação',
    categoria: 'Tratamento',
    icone: 'M12 3c3 0 5 2.1 5 5.2 0 2.2-1.2 3.9-2.6 5.1L13 20a1 1 0 01-2 0l-1.4-6.7C8.2 12.1 7 10.4 7 8.2 7 5.1 9 3 12 3zM12 7v7',
  },
  {
    nome: 'Limpeza personalizada',
    descricao:
      'Profilaxia orientada por avaliação clínica para remover placa, manchas superficiais e prevenir inflamações.',
    destaque: 'Prevenção ativa',
    categoria: 'Prevenção',
    icone: 'M4 18c5-1 8-4 10-9M14 9l5-5M15 4l5 5M7 20h10M8 16l-3-3 3-3M5 13h8',
  },
  {
    nome: 'Restaurações',
    descricao:
      'Reconstrução de dentes comprometidos por cáries, fraturas ou desgaste, com acabamento natural e funcional.',
    destaque: 'Reconstrução dental',
    categoria: 'Tratamento',
    icone: 'M8 4h8l2 5-6 11L6 9l2-5zM8 9h8M12 4v16',
  },
  {
    nome: 'Cirurgias gerais e especializadas',
    descricao:
      'Procedimentos cirúrgicos planejados com avaliação criteriosa, orientação prévia e cuidado no pós-operatório.',
    destaque: 'Procedimentos planejados',
    categoria: 'Cirurgia',
    icone: 'M14.5 4.5l5 5-10 10H5v-4l9.5-11zM13 6l5 5M4 20h16',
  },
  {
    nome: 'Cirurgia do siso e gengivais',
    descricao:
      'Extração de dentes do siso e cirurgias gengivais com atenção à segurança, conforto e recuperação do paciente.',
    destaque: 'Siso e gengiva',
    categoria: 'Cirurgia',
    icone: 'M12 3c2.8 0 5 2 5 5 0 2-1 3.5-2.2 4.8L13 20a1 1 0 01-2 0l-1.8-7.2C8 11.5 7 10 7 8c0-3 2.2-5 5-5zM9 8h6M10 12h4',
  },
];

const categorias = Array.from(new Set(especialidades.map((item) => item.categoria)));
</script>

<template>
  <section class="relative overflow-hidden bg-[#edf4f5]">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" aria-hidden="true" />
    <div class="container-clinica grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div>
        <span class="eyebrow">Especialidades odontológicas</span>
        <h1 class="titulo-hero mt-4 text-balance">
          Tratamentos para cuidar da saúde, função e estética do seu sorriso.
        </h1>
        <p class="subtitulo mt-5 max-w-2xl">
          A Clínica Dr. Richard reúne procedimentos preventivos, estéticos, reabilitadores e cirúrgicos em uma experiência clara, acolhedora e fácil de agendar.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <router-link :to="{ name: 'login' }" class="btn-primary btn-lg">
            Agendar consulta
          </router-link>
          <router-link :to="{ name: 'contato' }" class="btn-outline btn-lg">
            Falar com a clínica
          </router-link>
        </div>
      </div>

      <div class="rounded-2xl border border-white/70 bg-white/65 p-4 shadow-elevated backdrop-blur">
        <div class="rounded-xl bg-white p-5">
          <p class="text-sm font-semibold text-primary-700">Áreas disponíveis</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="categoria in categorias"
              :key="categoria"
              class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
            >
              {{ categoria }}
            </span>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-3">
            <div class="rounded-xl bg-[#edf4f5] p-4">
              <p class="text-2xl font-semibold text-dark">{{ especialidades.length }}</p>
              <p class="mt-1 text-xs text-slate-600">tratamentos listados</p>
            </div>
            <div class="rounded-xl bg-secondary-50 p-4">
              <p class="text-2xl font-semibold text-dark">1:1</p>
              <p class="mt-1 text-xs text-slate-600">planejamento individual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container-clinica py-14 lg:py-20">
    <div class="mb-10 max-w-3xl">
      <span class="eyebrow">Escolha pelo seu objetivo</span>
      <h2 class="titulo-secao mt-3">Especialidades descritas no folder</h2>
      <p class="subtitulo mt-4">
        Cards objetivos, com linguagem simples e informações escaneáveis para o paciente entender rapidamente qual cuidado procurar.
      </p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="item in especialidades"
        :key="item.nome"
        class="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
      >
        <div class="flex items-start justify-between gap-4">
          <div
            class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-700 transition group-hover:bg-primary-500 group-hover:text-white"
            aria-hidden="true"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path :d="item.icone" />
            </svg>
          </div>
          <span class="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            {{ item.categoria }}
          </span>
        </div>

        <h3 class="mt-5 font-heading text-xl font-semibold leading-snug text-dark">
          {{ item.nome }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          {{ item.descricao }}
        </p>

        <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span class="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
            {{ item.destaque }}
          </span>
          <router-link
            :to="{ name: 'login' }"
            class="text-sm font-semibold text-primary-700 hover:text-primary-900"
            :aria-label="`Agendar ${item.nome}`"
          >
            Agendar
          </router-link>
        </div>
      </article>
    </div>
  </section>

  <section class="bg-white">
    <div class="container-clinica grid gap-6 py-12 lg:grid-cols-3">
      <div class="rounded-2xl bg-primary-50 p-6">
        <p class="text-sm font-semibold text-primary-800">Avaliação inicial</p>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          O tratamento começa com escuta, exame clínico e definição da melhor sequência de cuidado.
        </p>
      </div>
      <div class="rounded-2xl bg-[#edf4f5] p-6">
        <p class="text-sm font-semibold text-primary-800">Explicação clara</p>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          Cada procedimento é apresentado com etapas, cuidados e expectativas realistas.
        </p>
      </div>
      <div class="rounded-2xl bg-secondary-50 p-6">
        <p class="text-sm font-semibold text-secondary-800">Acompanhamento</p>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          O paciente acompanha agendamentos e histórico pelo portal, com acesso por link mágico.
        </p>
      </div>
    </div>
  </section>

  <CtaAgendamento />
</template>
