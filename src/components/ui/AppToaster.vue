<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useToastStore } from '@/stores/toast.store';

const store = useToastStore();
const { toasts } = storeToRefs(store);

const cores: Record<string, string> = {
  sucesso: 'bg-secondary-50 border-secondary-200 text-secondary-700',
  erro: 'bg-danger-50 border-danger-200 text-danger-600',
  info: 'bg-primary-50 border-primary-200 text-primary-700',
  aviso: 'bg-amber-50 border-amber-200 text-amber-700',
};
</script>

<template>
  <div
    class="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none"
    role="region"
    aria-label="Notificações"
    aria-live="polite"
  >
    <transition-group name="page-fade" tag="div" class="flex flex-col gap-2">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="pointer-events-auto rounded-2xl border shadow-elevated p-4 bg-white"
        :class="cores[t.tipo]"
        role="status"
      >
        <div class="flex items-start gap-3">
          <div class="font-semibold text-sm flex-1">{{ t.titulo }}</div>
          <button
            type="button"
            class="text-current opacity-60 hover:opacity-100 transition"
            aria-label="Fechar notificação"
            @click="store.remover(t.id)"
          >
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 011.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
              />
            </svg>
          </button>
        </div>
        <p v-if="t.mensagem" class="text-xs text-slate-600 mt-1">{{ t.mensagem }}</p>
      </div>
    </transition-group>
  </div>
</template>
