<script setup lang="ts">
const itens = [
  { numero: '12+', rotulo: 'anos cuidando de pacientes' },
  { numero: '+12k', rotulo: 'pacientes atendidos' },
  { numero: '15+', rotulo: 'especialidades médicas' },
  { numero: '4.9', rotulo: 'média de avaliação' },
] as const;
</script>

<template>
  <section class="container-clinica">
    <div
      class="cartao p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 relative z-10"
    >
      <div v-for="i in itens" :key="i.rotulo" class="text-center">
        <p class="font-heading text-3xl sm:text-4xl font-semibold text-primary-500">
          {{ i.numero }}
        </p>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">{{ i.rotulo }}</p>
      </div>
    </div>
  </section>
</template>
