<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { listarEspecialidades } from '@/services/especialidades.service';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import AppEmpty from '@/components/ui/AppEmpty.vue';
import type { Especialidade } from '@/types';

withDefaults(
  defineProps<{
    titulo?: string;
    descricao?: string;
    limite?: number | null;
    mostrarTitulo?: boolean;
  }>(),
  {
    titulo: 'Nossas especialidades',
    descricao:
      'Cuidado especializado com profissionais experientes em diversas áreas da saúde.',
    limite: 8,
    mostrarTitulo: true,
  },
);

const especialidades = ref<Especialidade[]>([]);
const carregando = ref<boolean>(true);
const erro = ref<string | null>(null);

const ICONES_PADRAO = [
  'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z',
  'M12 14l-7 7M5 14l7 7M9 9a3 3 0 116 0c0 2-3 3-3 5',
  'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 013 11.5a8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z',
  'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
];

onMounted(async () => {
  try {
    especialidades.value = await listarEspecialidades();
  } catch (e) {
    erro.value =
      'Não foi possível carregar as especialidades agora. Tente novamente em instantes.';
    console.error(e);
  } finally {
    carregando.value = false;
  }
});

function iconePara(esp: Especialidade, index: number): string {
  return esp.icone ?? ICONES_PADRAO[index % ICONES_PADRAO.length];
}
</script>

<template>
  <section class="container-clinica py-16 lg:py-24">
    <div v-if="mostrarTitulo" class="text-center max-w-3xl mx-auto mb-12">
      <span class="eyebrow">Especialidades</span>
      <h2 class="titulo-secao mt-3">{{ titulo }}</h2>
      <p class="subtitulo mt-4">{{ descricao }}</p>
    </div>

    <div v-if="carregando" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div v-for="i in 8" :key="i" class="cartao p-6 space-y-3">
        <AppSkeleton altura="3rem" largura="3rem" />
        <AppSkeleton altura="1.25rem" largura="60%" />
        <AppSkeleton altura="0.85rem" />
        <AppSkeleton altura="0.85rem" largura="80%" />
      </div>
    </div>

    <AppEmpty
      v-else-if="erro || especialidades.length === 0"
      :titulo="erro ?? 'Em breve teremos novidades'"
      :descricao="
        erro
          ? 'Recarregue a página em alguns instantes.'
          : 'Estamos preparando o catálogo de especialidades.'
      "
    />

    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        v-for="(esp, i) in limite ? especialidades.slice(0, limite) : especialidades"
        :key="esp.id"
        class="cartao-hover p-6 group"
      >
        <div
          class="grid h-12 w-12 place-items-center rounded-xl bg-secondary-50 text-secondary-600 mb-5 transition-transform group-hover:scale-110"
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
            <path :d="iconePara(esp, i)" />
          </svg>
        </div>
        <h3 class="font-heading text-lg font-semibold text-dark">{{ esp.nome }}</h3>
        <p v-if="esp.descricao" class="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
          {{ esp.descricao }}
        </p>
      </div>
    </div>
  </section>
</template>
