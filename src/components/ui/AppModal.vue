<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';

const props = defineProps<{
  aberto: boolean;
  titulo: string;
  descricao?: string;
}>();

const emit = defineEmits<{
  (e: 'fechar'): void;
}>();

function aoTeclar(e: KeyboardEvent): void {
  if (e.key === 'Escape' && props.aberto) emit('fechar');
}

onMounted(() => window.addEventListener('keydown', aoTeclar));
onUnmounted(() => window.removeEventListener('keydown', aoTeclar));

watch(
  () => props.aberto,
  (v) => {
    document.body.style.overflow = v ? 'hidden' : '';
  },
);
</script>

<template>
  <transition name="page-fade">
    <div
      v-if="aberto"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      :aria-label="titulo"
    >
      <div
        class="absolute inset-0 bg-dark/40 backdrop-blur-sm"
        @click="emit('fechar')"
      />
      <div
        class="relative w-full max-w-md rounded-2xl bg-white shadow-elevated p-6 animate-fade-in-up"
      >
        <div class="flex items-start justify-between mb-3">
          <div>
            <h2 class="font-heading text-xl font-semibold text-dark">{{ titulo }}</h2>
            <p v-if="descricao" class="text-sm text-slate-500 mt-1">{{ descricao }}</p>
          </div>
          <button
            type="button"
            class="text-slate-400 hover:text-dark transition p-1"
            aria-label="Fechar"
            @click="emit('fechar')"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 011.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
              />
            </svg>
          </button>
        </div>
        <div>
          <slot />
        </div>
        <div v-if="$slots.acoes" class="flex justify-end gap-2 mt-6">
          <slot name="acoes" />
        </div>
      </div>
    </div>
  </transition>
</template>
