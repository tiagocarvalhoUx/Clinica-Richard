<script setup lang="ts">
import CtaAgendamento from '@/components/sections/CtaAgendamento.vue';

const valores = [
  {
    titulo: 'Cuidado humanizado',
    texto:
      'Cada paciente é único. Ouvimos com atenção e tratamos com empatia, respeitando histórias e contextos.',
    icone: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
  },
  {
    titulo: 'Excelência clínica',
    texto:
      'Decisões baseadas em evidência científica, com foco em segurança, eficácia e resultados consistentes.',
    icone: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    titulo: 'Modernidade ética',
    texto:
      'Tecnologia a serviço do cuidado, com respeito à privacidade e à individualidade do paciente.',
    icone: 'M12 15v2m0 0H8m4 0h4m1-9V5a4 4 0 00-8 0v3M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z',
  },
] as const;
</script>

<template>
  <section class="container-clinica py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <span class="eyebrow">Quem somos</span>
        <h1 class="titulo-secao mt-3 text-balance">
          Há mais de uma década cuidando de quem confia em nós.
        </h1>
        <p class="subtitulo mt-5">
          A Clínica Dr. Richard nasceu com o propósito de transformar a experiência em
          saúde, oferecendo um cuidado próximo, qualificado e adaptado a cada paciente.
        </p>
        <p class="subtitulo mt-4">
          Construímos uma referência em atendimento humanizado, com profissionais
          comprometidos com a evolução contínua e estrutura preparada para acolher você
          em todos os momentos.
        </p>

        <div class="grid grid-cols-2 gap-6 mt-10">
          <div>
            <p class="font-heading text-3xl font-semibold text-primary-500">+12k</p>
            <p class="text-sm text-slate-500">pacientes atendidos</p>
          </div>
          <div>
            <p class="font-heading text-3xl font-semibold text-primary-500">15+</p>
            <p class="text-sm text-slate-500">especialidades</p>
          </div>
        </div>
      </div>

      <div class="relative rounded-[2rem] bg-white p-2 shadow-elevated sm:p-3">
        <img
          src="/image/clinica02.jpeg"
          alt="Dr. Richard, fundador da clínica"
          class="aspect-square w-full rounded-[1.5rem] object-contain"
          loading="lazy"
        />
        <div
          class="absolute -bottom-6 -left-6 max-w-xs cartao p-5 bg-white/95 backdrop-blur-sm"
        >
          <p class="font-heading text-lg font-semibold text-dark">Dr. Richard</p>
          <p class="text-sm text-primary-500 mb-2">Fundador & Diretor Clínico</p>
          <p class="text-xs text-slate-500 leading-relaxed">
            “Saúde de qualidade começa com escuta e termina com confiança.”
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-accent">
    <div class="container-clinica py-16 lg:py-24">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="eyebrow">Missão & valores</span>
        <h2 class="titulo-secao mt-3">O que nos guia todos os dias</h2>
        <p class="subtitulo mt-4">
          Nossa missão é entregar uma experiência de saúde que une ciência, empatia e
          cuidado verdadeiro com cada pessoa que nos procura.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5">
        <article v-for="v in valores" :key="v.titulo" class="cartao p-7">
          <div
            class="grid h-12 w-12 place-items-center rounded-xl bg-secondary-100 text-secondary-700 mb-5"
            aria-hidden="true"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="v.icone" />
            </svg>
          </div>
          <h3 class="font-heading text-lg font-semibold text-dark">{{ v.titulo }}</h3>
          <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ v.texto }}</p>
        </article>
      </div>
    </div>
  </section>

  <CtaAgendamento />
</template>
