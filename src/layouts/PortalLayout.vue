<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import PortalSidebar from '@/components/layout/PortalSidebar.vue';

const route = useRoute();
const aberto = ref(false);

const titulo = computed(() => {
  const mapa: Record<string, string> = {
    'portal-dashboard': 'Meu painel',
    'portal-agendar': 'Agendar consulta',
    'portal-agendamentos': 'Meus agendamentos',
    'portal-perfil': 'Meu perfil',
    'portal-avaliacoes': 'Avaliações',
  };
  return mapa[String(route.name)] ?? 'Portal do paciente';
});
</script>

<template>
  <div class="min-h-screen bg-light">
    <div class="lg:flex">
      <PortalSidebar :aberto="aberto" @fechar="aberto = false" />

      <div class="flex-1 min-w-0 flex flex-col">
        <header
          class="sticky top-0 z-20 bg-white/85 backdrop-blur-md border-b border-slate-100"
        >
          <div class="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              class="lg:hidden p-2 -ml-2 rounded-lg text-dark hover:bg-slate-100"
              aria-label="Abrir menu"
              @click="aberto = true"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="font-heading text-xl font-semibold text-dark">{{ titulo }}</h1>
          </div>
        </header>

        <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
