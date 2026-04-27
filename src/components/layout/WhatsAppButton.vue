<script setup lang="ts">
import { useWhatsApp } from '@/composables/useWhatsApp';

const { gerarLink, numero } = useWhatsApp();
const link = gerarLink('Olá! Gostaria de agendar uma consulta na Clínica Dr. Richard.');
const ativo = Boolean(numero);
</script>

<template>
  <a
    v-if="ativo"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-40 group"
    aria-label="Falar pelo WhatsApp"
  >
    <span
      class="absolute inset-0 rounded-full bg-secondary-500/40 animate-ping"
      aria-hidden="true"
    />
    <span
      class="relative grid h-14 w-14 place-items-center rounded-full bg-secondary-500 text-white shadow-elevated transition-transform group-hover:scale-110"
    >
      <svg class="h-7 w-7" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path
          d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.18 1.6 6.01L4 28l6.13-1.6A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.85c-1.86 0-3.69-.5-5.29-1.45l-.38-.22-3.64.95.97-3.55-.25-.39A9.85 9.85 0 0 1 6.15 16c0-5.43 4.42-9.85 9.85-9.85S25.85 10.57 25.85 16 21.43 25.85 16 25.85z"
        />
      </svg>
    </span>
  </a>
</template>
