<script setup lang="ts">
defineProps<{
  titulo: string;
  descricao?: string;
  icone?: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center py-12 px-4">
    <div
      class="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 mb-4"
      aria-hidden="true"
    >
      <svg
        class="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-dark mb-1">{{ titulo }}</h3>
    <p v-if="descricao" class="text-sm text-slate-500 max-w-md">{{ descricao }}</p>
    <slot />
  </div>
</template>
