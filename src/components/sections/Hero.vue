<script setup lang="ts">
const beneficios = [
  'Atendimento humanizado',
  'Equipe especializada',
  'Estrutura moderna',
] as const;
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-hero">
    <div
      class="absolute inset-0 grid-pattern opacity-60 mask-fade-b"
      aria-hidden="true"
    />
    <div
      class="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-secondary-200/40 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="container-clinica relative grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24"
    >
      <div class="animate-fade-in-up">
        <span class="eyebrow">
          <span class="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
          Cuidado de excelência desde 2010
        </span>
        <h1 class="titulo-hero mt-5 text-balance">
          Sua saúde merece o
          <span class="text-primary-500">cuidado</span>
          que ela precisa.
        </h1>
        <p class="subtitulo mt-5 max-w-xl">
          Na Clínica Dr. Richard, unimos tecnologia de ponta e atendimento humanizado
          para acompanhar você em cada etapa do seu bem-estar.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <router-link :to="{ name: 'login' }" class="btn-primary btn-lg shadow-elevated">
            Agendar consulta
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </router-link>
          <router-link :to="{ name: 'especialidades' }" class="btn-outline btn-lg">
            Ver especialidades
          </router-link>
        </div>

        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <li
            v-for="b in beneficios"
            :key="b"
            class="flex items-center gap-2 text-sm text-slate-600"
          >
            <span
              class="grid h-6 w-6 place-items-center rounded-full bg-secondary-500 text-white"
              aria-hidden="true"
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            {{ b }}
          </li>
        </ul>
      </div>

      <div class="relative animate-fade-in-up [animation-delay:120ms]">
        <div
          class="relative aspect-square overflow-hidden rounded-[2rem] bg-white p-2 shadow-elevated sm:p-3 lg:rounded-[2.5rem]"
        >
          <img
            src="/image/clinica01.jpeg"
            alt="Ambiente da Clínica Dr. Richard"
            class="h-full w-full rounded-[1.5rem] object-contain lg:rounded-[2rem]"
            loading="eager"
          />
          <div
            class="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 backdrop-blur-sm p-5 shadow-card border border-white/40"
          >
            <div class="flex items-center gap-3">
              <div class="flex -space-x-2" aria-hidden="true">
                <span class="h-8 w-8 rounded-full ring-2 ring-white bg-primary-200" />
                <span class="h-8 w-8 rounded-full ring-2 ring-white bg-secondary-200" />
                <span class="h-8 w-8 rounded-full ring-2 ring-white bg-amber-200" />
              </div>
              <div>
                <p class="text-sm font-semibold text-dark">+12 mil pacientes</p>
                <p class="text-xs text-slate-500">recomendam nosso atendimento</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute -top-6 -left-6 hidden lg:flex animate-float items-center gap-3 rounded-2xl bg-white shadow-card border border-slate-100 px-4 py-3"
        >
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-secondary-100 text-secondary-700" aria-hidden="true">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold text-dark">Confirmação imediata</p>
            <p class="text-[11px] text-slate-500">do seu agendamento</p>
          </div>
        </div>

        <div
          class="absolute -bottom-6 -right-6 hidden lg:flex animate-float [animation-delay:600ms] items-center gap-3 rounded-2xl bg-white shadow-card border border-slate-100 px-4 py-3"
        >
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-primary-100 text-primary-700" aria-hidden="true">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <p class="text-xs font-semibold text-dark">Atende 7 dias</p>
            <p class="text-[11px] text-slate-500">8h às 20h · Sáb 8h–14h</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
