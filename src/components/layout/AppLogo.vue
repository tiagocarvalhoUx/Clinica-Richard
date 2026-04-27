<script setup lang="ts">
withDefaults(
  defineProps<{
    cor?: 'primary' | 'branco';
    tamanho?: 'sm' | 'md' | 'lg';
  }>(),
  { cor: 'primary', tamanho: 'md' },
);
</script>

<template>
  <span
    class="relative inline-flex shrink-0 overflow-hidden rounded-md bg-[#e8f0f1]"
    :class="[
      tamanho === 'sm' ? 'h-12 w-36' : tamanho === 'lg' ? 'h-20 w-60' : 'h-14 w-44',
      cor === 'branco' ? 'ring-1 ring-white/15' : '',
    ]"
  >
    <img
      src="/image/logo-Dr.Richard.png"
      alt="Clínica Dr. Richard"
      class="absolute left-1/2 top-1/2 w-[calc(100%-0.75rem)] max-w-none -translate-x-1/2 -translate-y-1/2"
      decoding="async"
      fetchpriority="high"
    />
  </span>
</template>
