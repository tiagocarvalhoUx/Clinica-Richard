<script setup lang="ts">
withDefaults(
  defineProps<{
    tamanho?: 'sm' | 'md' | 'lg';
    rotulo?: string;
  }>(),
  { tamanho: 'md', rotulo: 'Carregando…' },
);
</script>

<template>
  <div role="status" class="inline-flex items-center gap-3 text-slate-500">
    <svg
      class="animate-spin"
      :class="{
        'h-4 w-4': tamanho === 'sm',
        'h-6 w-6': tamanho === 'md',
        'h-10 w-10': tamanho === 'lg',
      }"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
      <path
        class="text-primary-500"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
      />
    </svg>
    <span class="sr-only">{{ rotulo }}</span>
  </div>
</template>
