<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { listarAvaliacoesPublicas } from '@/services/avaliacoes.service';
import AppRating from '@/components/ui/AppRating.vue';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import AppEmpty from '@/components/ui/AppEmpty.vue';
import type { AvaliacaoComPaciente } from '@/types';
import { formatarDataCurta } from '@/composables/formatadores';

withDefaults(
  defineProps<{ limite?: number; titulo?: string; mostrarTitulo?: boolean }>(),
  { limite: 6, titulo: 'O que nossos pacientes dizem', mostrarTitulo: true },
);

const avaliacoes = ref<AvaliacaoComPaciente[]>([]);
const carregando = ref<boolean>(true);
const erro = ref<string | null>(null);

onMounted(async () => {
  try {
    avaliacoes.value = await listarAvaliacoesPublicas(12);
  } catch (e) {
    erro.value = 'Não foi possível carregar os depoimentos agora.';
    console.error(e);
  } finally {
    carregando.value = false;
  }
});
</script>

<template>
  <section class="bg-accent">
    <div class="container-clinica py-16 lg:py-24">
      <div v-if="mostrarTitulo" class="text-center max-w-3xl mx-auto mb-12">
        <span class="eyebrow">Depoimentos</span>
        <h2 class="titulo-secao mt-3">{{ titulo }}</h2>
        <p class="subtitulo mt-4">
          Histórias reais de quem confia o seu cuidado à Clínica Dr. Richard.
        </p>
      </div>

      <div v-if="carregando" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="i in 6" :key="i" class="cartao p-6 space-y-3">
          <AppSkeleton altura="1rem" largura="40%" />
          <AppSkeleton altura="0.85rem" />
          <AppSkeleton altura="0.85rem" largura="80%" />
          <div class="flex items-center gap-3 pt-2">
            <AppSkeleton altura="2.5rem" largura="2.5rem" redondo />
            <AppSkeleton altura="0.75rem" largura="50%" />
          </div>
        </div>
      </div>

      <AppEmpty
        v-else-if="erro || avaliacoes.length === 0"
        :titulo="erro ?? 'Em breve, novos depoimentos.'"
        :descricao="
          erro
            ? 'Tente recarregar a página em instantes.'
            : 'Os primeiros depoimentos aparecerão aqui assim que forem publicados.'
        "
      />

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="av in avaliacoes.slice(0, limite)"
          :key="av.id"
          class="cartao p-6 flex flex-col gap-4 hover:shadow-elevated transition-shadow"
        >
          <AppRating :model-value="av.estrelas" leitura tamanho="sm" />
          <p class="text-slate-700 leading-relaxed">
            <span class="text-primary-300 text-2xl font-heading">“</span>
            {{ av.comentario || 'Atendimento excelente.' }}
          </p>
          <div class="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
            <div
              class="grid h-10 w-10 place-items-center rounded-full bg-primary-100 text-primary-700 font-semibold"
              aria-hidden="true"
            >
              {{ (av.paciente?.nome ?? 'P').charAt(0).toUpperCase() }}
            </div>
            <div class="min-w-0">
              <p class="text-sm font-semibold text-dark truncate">
                {{ av.paciente?.nome ?? 'Paciente Clínica Dr. Richard' }}
              </p>
              <p class="text-xs text-slate-500 truncate">
                <template v-if="av.medico?.nome">com {{ av.medico.nome }} · </template>
                {{ formatarDataCurta(av.created_at) }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
