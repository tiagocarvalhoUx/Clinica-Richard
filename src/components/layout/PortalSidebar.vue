<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth.store';
import AppLogo from './AppLogo.vue';

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();
const { paciente, nomePaciente } = storeToRefs(auth);

defineProps<{ aberto: boolean }>();
const emit = defineEmits<{ (e: 'fechar'): void }>();

const itens = [
  {
    rotulo: 'Painel',
    destino: { name: 'portal-dashboard' },
    icone: 'M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V10',
  },
  {
    rotulo: 'Agendar consulta',
    destino: { name: 'portal-agendar' },
    icone: 'M12 8v8m4-4H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    rotulo: 'Meus agendamentos',
    destino: { name: 'portal-agendamentos' },
    icone: 'M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
  },
  {
    rotulo: 'Avaliações',
    destino: { name: 'portal-avaliacoes' },
    icone: 'M11.05 3.05a1 1 0 011.9 0l2.13 4.32 4.77.69a1 1 0 01.55 1.7l-3.45 3.36.81 4.75a1 1 0 01-1.45 1.05L12 16.77l-4.27 2.24a1 1 0 01-1.45-1.05l.81-4.75-3.45-3.36a1 1 0 01.55-1.7l4.77-.69 2.09-4.32z',
  },
  {
    rotulo: 'Meu perfil',
    destino: { name: 'portal-perfil' },
    icone: 'M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
] as const;

function ativo(nome: string): boolean {
  return route.name === nome;
}

async function sair(): Promise<void> {
  await auth.sair();
  router.push({ name: 'home' });
}
</script>

<template>
  <transition name="page-fade">
    <div
      v-if="aberto"
      class="lg:hidden fixed inset-0 z-30 bg-dark/40 backdrop-blur-sm"
      @click="emit('fechar')"
    />
  </transition>

  <aside
    class="fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-slate-100 z-40 transform transition-transform"
    :class="aberto ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    aria-label="Menu lateral"
  >
    <div class="h-16 px-6 flex items-center border-b border-slate-100">
      <router-link :to="{ name: 'home' }" class="flex items-center" aria-label="Página inicial">
        <AppLogo />
      </router-link>
    </div>

    <nav class="p-4 space-y-1" aria-label="Menu portal">
      <router-link
        v-for="item in itens"
        :key="item.rotulo"
        :to="item.destino"
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
        :class="
          ativo(item.destino.name)
            ? 'bg-primary-50 text-primary-700'
            : 'text-slate-600 hover:bg-slate-50 hover:text-dark'
        "
        @click="emit('fechar')"
      >
        <svg
          class="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path :d="item.icone" />
        </svg>
        {{ item.rotulo }}
      </router-link>
    </nav>

    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-white">
      <div class="flex items-center gap-3 mb-3">
        <div
          class="grid h-10 w-10 place-items-center rounded-full bg-primary-100 text-primary-700 font-semibold"
          aria-hidden="true"
        >
          {{ nomePaciente.charAt(0).toUpperCase() }}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-dark truncate">{{ nomePaciente }}</p>
          <p class="text-xs text-slate-500 truncate">{{ paciente?.email }}</p>
        </div>
      </div>
      <button
        type="button"
        class="btn-ghost w-full justify-start text-sm text-slate-600"
        @click="sair"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
        </svg>
        Sair
      </button>
    </div>
  </aside>
</template>
