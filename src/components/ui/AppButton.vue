<script setup lang="ts">
import { computed } from 'vue';

type Variante = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Tamanho = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    variante?: Variante;
    tamanho?: Tamanho;
    tipo?: 'button' | 'submit' | 'reset';
    carregando?: boolean;
    desabilitado?: boolean;
    blocoCompleto?: boolean;
  }>(),
  {
    variante: 'primary',
    tamanho: 'md',
    tipo: 'button',
    carregando: false,
    desabilitado: false,
    blocoCompleto: false,
  },
);

const classes = computed(() => {
  const variantes: Record<Variante, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
  };
  const tamanhos: Record<Tamanho, string> = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  return [
    variantes[props.variante],
    tamanhos[props.tamanho],
    props.blocoCompleto ? 'w-full' : '',
  ];
});
</script>

<template>
  <button
    :type="tipo"
    :class="classes"
    :disabled="desabilitado || carregando"
    :aria-busy="carregando"
  >
    <svg
      v-if="carregando"
      class="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle class="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
      <path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
    </svg>
    <slot />
  </button>
</template>
