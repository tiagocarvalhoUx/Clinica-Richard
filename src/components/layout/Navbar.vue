<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth.store';
import AppLogo from './AppLogo.vue';

const route = useRoute();
const auth = useAuthStore();
const { autenticado } = storeToRefs(auth);

const aberto = ref(false);

const links = [
  { rotulo: 'Início', destino: { name: 'home' } },
  { rotulo: 'Sobre', destino: { name: 'sobre' } },
  { rotulo: 'Especialidades', destino: { name: 'especialidades' } },
  { rotulo: 'Equipe', destino: { name: 'equipe' } },
  { rotulo: 'Depoimentos', destino: { name: 'depoimentos' } },
  { rotulo: 'Contato', destino: { name: 'contato' } },
] as const;

function ativo(nome: string): boolean {
  return route.name === nome;
}

function fechar(): void {
  aberto.value = false;
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-100 bg-white/85 backdrop-blur-md"
  >
    <div class="container-clinica flex h-16 items-center justify-between">
      <router-link :to="{ name: 'home' }" class="flex items-center" aria-label="Página inicial">
        <AppLogo />
      </router-link>

      <nav
        class="hidden lg:flex items-center gap-1"
        aria-label="Navegação principal"
      >
        <router-link
          v-for="l in links"
          :key="l.rotulo"
          :to="l.destino"
          class="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          :class="
            ativo(l.destino.name)
              ? 'text-primary-600 bg-primary-50'
              : 'text-slate-600 hover:text-dark hover:bg-slate-50'
          "
        >
          {{ l.rotulo }}
        </router-link>
      </nav>

      <div class="hidden lg:flex items-center gap-2">
        <router-link
          v-if="!autenticado"
          :to="{ name: 'login' }"
          class="btn-ghost"
        >
          Entrar
        </router-link>
        <router-link
          v-else
          :to="{ name: 'portal-dashboard' }"
          class="btn-ghost"
        >
          Meu portal
        </router-link>
        <router-link :to="{ name: 'login' }" class="btn-primary">
          Agendar consulta
        </router-link>
      </div>

      <button
        type="button"
        class="lg:hidden p-2 rounded-lg text-dark hover:bg-slate-100"
        :aria-expanded="aberto"
        aria-label="Abrir menu"
        @click="aberto = !aberto"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path
            v-if="!aberto"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6l12 12M6 18L18 6"
          />
        </svg>
      </button>
    </div>

    <transition name="page-fade">
      <div v-if="aberto" class="lg:hidden border-t border-slate-100 bg-white">
        <nav class="container-clinica py-4 flex flex-col gap-1" aria-label="Menu mobile">
          <router-link
            v-for="l in links"
            :key="l.rotulo"
            :to="l.destino"
            class="px-3 py-3 rounded-xl text-base font-medium"
            :class="
              ativo(l.destino.name)
                ? 'bg-primary-50 text-primary-600'
                : 'text-dark hover:bg-slate-50'
            "
            @click="fechar"
          >
            {{ l.rotulo }}
          </router-link>
          <div class="h-px bg-slate-100 my-2" />
          <router-link
            v-if="!autenticado"
            :to="{ name: 'login' }"
            class="btn-outline justify-center"
            @click="fechar"
          >
            Entrar
          </router-link>
          <router-link
            v-else
            :to="{ name: 'portal-dashboard' }"
            class="btn-outline justify-center"
            @click="fechar"
          >
            Meu portal
          </router-link>
          <router-link
            :to="{ name: 'login' }"
            class="btn-primary justify-center"
            @click="fechar"
          >
            Agendar consulta
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>
