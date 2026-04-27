<script setup lang="ts">
import Depoimentos from '@/components/sections/Depoimentos.vue';
import CtaAgendamento from '@/components/sections/CtaAgendamento.vue';
</script>

<template>
  <section class="bg-gradient-hero">
    <div class="container-clinica py-16 lg:py-20 text-center">
      <span class="eyebrow">Depoimentos</span>
      <h1 class="titulo-hero mt-4 text-balance">
        Confiança de quem já é parte da nossa história.
      </h1>
      <p class="subtitulo mt-5 max-w-2xl mx-auto">
        Veja experiências reais de pacientes que escolheram a Clínica Dr. Richard para
        cuidar da sua saúde.
      </p>
    </div>
  </section>

  <Depoimentos :limite="24" :mostrar-titulo="false" />
  <CtaAgendamento />
</template>
