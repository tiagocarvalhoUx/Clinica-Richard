<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { listarMedicosComEspecialidade } from '@/services/medicos.service';
import AppSkeleton from '@/components/ui/AppSkeleton.vue';
import AppEmpty from '@/components/ui/AppEmpty.vue';
import CtaAgendamento from '@/components/sections/CtaAgendamento.vue';
import type { MedicoComEspecialidade } from '@/types';

const medicos = ref<MedicoComEspecialidade[]>([]);
const carregando = ref<boolean>(true);
const erro = ref<string | null>(null);

onMounted(async () => {
  try {
    medicos.value = await listarMedicosComEspecialidade();
  } catch (e) {
    erro.value = 'Não foi possível carregar a equipe agora.';
    console.error(e);
  } finally {
    carregando.value = false;
  }
});

function iniciais(nome: string): string {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}
</script>

<template>
  <section class="bg-gradient-hero">
    <div class="container-clinica py-16 lg:py-20 text-center">
      <span class="eyebrow">Nossa equipe</span>
      <h1 class="titulo-hero mt-4 text-balance">
        Profissionais que cuidam de você como gente.
      </h1>
      <p class="subtitulo mt-5 max-w-2xl mx-auto">
        Conheça os especialistas que tornam a Clínica Dr. Richard uma referência em
        atendimento humanizado e excelência clínica.
      </p>
    </div>
  </section>

  <section class="container-clinica py-16 lg:py-24">
    <div v-if="carregando" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="cartao overflow-hidden">
        <AppSkeleton altura="18rem" />
        <div class="p-5 space-y-2">
          <AppSkeleton altura="1.1rem" largura="60%" />
          <AppSkeleton altura="0.9rem" largura="40%" />
          <AppSkeleton altura="0.8rem" />
          <AppSkeleton altura="0.8rem" largura="80%" />
        </div>
      </div>
    </div>

    <AppEmpty
      v-else-if="erro || medicos.length === 0"
      :titulo="erro ?? 'Em breve apresentaremos a equipe'"
      :descricao="
        erro
          ? 'Tente recarregar a página em instantes.'
          : 'Os perfis dos profissionais aparecerão aqui assim que forem publicados.'
      "
    />

    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="m in medicos"
        :key="m.id"
        class="cartao overflow-hidden hover:shadow-elevated transition-shadow"
      >
        <div class="aspect-[4/5] bg-primary-100 relative">
          <img
            v-if="m.foto_url"
            :src="m.foto_url"
            :alt="`Foto de ${m.nome}`"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            v-else
            class="h-full w-full grid place-items-center text-primary-700 font-heading text-5xl"
            aria-hidden="true"
          >
            {{ iniciais(m.nome) }}
          </div>
          <span
            v-if="m.especialidade?.nome"
            class="absolute top-3 left-3 badge-primary backdrop-blur-sm bg-white/90"
          >
            {{ m.especialidade.nome }}
          </span>
        </div>
        <div class="p-5">
          <h3 class="font-heading text-lg font-semibold text-dark">{{ m.nome }}</h3>
          <p class="text-xs text-slate-500 mt-1">CRM {{ m.crm }}</p>
          <p v-if="m.bio" class="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
            {{ m.bio }}
          </p>
        </div>
      </article>
    </div>
  </section>

  <CtaAgendamento />
</template>
