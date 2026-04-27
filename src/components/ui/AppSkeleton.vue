<script setup lang="ts">
withDefaults(
  defineProps<{
    altura?: string;
    largura?: string;
    redondo?: boolean;
  }>(),
  { altura: '1rem', largura: '100%', redondo: false },
);
</script>

<template>
  <div
    class="skeleton"
    :class="{ 'rounded-full': redondo }"
    :style="{ height: altura, width: largura }"
    aria-hidden="true"
  />
</template>
