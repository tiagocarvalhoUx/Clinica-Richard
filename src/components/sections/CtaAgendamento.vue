<script setup lang="ts">
import { useWhatsApp } from '@/composables/useWhatsApp';

const { gerarLink } = useWhatsApp();
const linkWhats = gerarLink('Olá! Gostaria de agendar uma consulta.');
</script>

<template>
  <section class="container-clinica py-16 lg:py-24">
    <div
      class="relative overflow-hidden rounded-[2rem] bg-gradient-primary text-white shadow-elevated"
    >
      <div
        class="absolute inset-0 grid-pattern opacity-20 mix-blend-overlay"
        aria-hidden="true"
      />
      <div
        class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center p-8 sm:p-12 lg:p-16">
        <div>
          <span
            class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/80"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse-soft" aria-hidden="true" />
            Agende em poucos minutos
          </span>
          <h2
            class="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight text-balance"
          >
            Pronto para cuidar da sua saúde com mais carinho?
          </h2>
          <p class="mt-4 text-white/85 text-base sm:text-lg max-w-2xl">
            Marque sua consulta sem fricção: informe apenas seu e-mail e receba o link
            mágico para acessar nosso portal e agendar.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <router-link
              :to="{ name: 'login' }"
              class="btn-lg bg-white text-primary-600 hover:bg-accent shadow-card hover:shadow-elevated font-semibold rounded-xl inline-flex items-center justify-center gap-2 px-7 py-4 transition"
            >
              Agendar agora
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </router-link>
            <a
              :href="linkWhats"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-lg border border-white/40 text-white hover:bg-white/10 rounded-xl inline-flex items-center justify-center gap-2 px-7 py-4 transition"
            >
              <svg class="h-4 w-4" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div class="hidden lg:block">
          <div class="relative aspect-square">
            <div
              class="absolute inset-0 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-end"
            >
              <p class="text-sm font-semibold tracking-wider uppercase text-white/70 mb-2">
                Plantão de dúvidas
              </p>
              <p class="font-heading text-3xl font-semibold leading-tight">
                Atendemos você de forma próxima e ágil.
              </p>
              <p class="mt-3 text-sm text-white/80">
                Tire dúvidas, agende ou remarque sua consulta sem complicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
