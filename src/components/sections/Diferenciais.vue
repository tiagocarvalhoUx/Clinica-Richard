<script setup lang="ts">
const itens = [
  {
    titulo: 'Atendimento humanizado',
    texto:
      'Nosso atendimento é guiado por escuta ativa, empatia e cuidado individual com cada paciente.',
    icone: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
  },
  {
    titulo: 'Equipe especializada',
    texto:
      'Profissionais com formação reconhecida e atualização contínua em práticas baseadas em evidência.',
    icone: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 7a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    titulo: 'Tecnologia moderna',
    texto:
      'Equipamentos de última geração e prontuário digital integrado para um cuidado seguro e ágil.',
    icone: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    titulo: 'Agenda online',
    texto:
      'Marque consultas em poucos cliques, com confirmação automática e lembretes em tempo real.',
    icone: 'M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
  },
] as const;
</script>

<template>
  <section class="container-clinica py-16 lg:py-24">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="eyebrow">Por que escolher a Clínica Dr. Richard</span>
      <h2 class="titulo-secao mt-3">Cuidado feito para você, do início ao fim.</h2>
      <p class="subtitulo mt-4">
        Combinamos experiência clínica e empatia para entregar uma experiência de saúde
        confortável, segura e moderna.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        v-for="item in itens"
        :key="item.titulo"
        class="cartao-hover p-6 group"
      >
        <div
          class="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-primary-500 mb-5 transition-transform group-hover:scale-110"
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
            <path :d="item.icone" />
          </svg>
        </div>
        <h3 class="font-heading text-lg font-semibold text-dark">{{ item.titulo }}</h3>
        <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ item.texto }}</p>
      </div>
    </div>
  </section>
</template>
