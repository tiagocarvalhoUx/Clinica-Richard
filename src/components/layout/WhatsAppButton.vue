<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useWhatsApp } from '@/composables/useWhatsApp';

const { gerarLink, numero } = useWhatsApp();
const ativo = Boolean(numero);

const aberto = ref(false);
const reduzirMovimento = ref(false);

const CHAVE_VISTO = 'cdr-wa-cta-visto';

const acoesRapidas = [
  {
    rotulo: 'Agendar avaliação',
    descricao: 'Primeira consulta com o Dr. Richard',
    icone: 'agenda',
    mensagem:
      'Olá! Gostaria de agendar uma avaliação na Clínica Dr. Richard. Pode me ajudar com os horários disponíveis?',
  },
  {
    rotulo: 'Tirar uma dúvida',
    descricao: 'Tratamentos, valores e convênios',
    icone: 'duvida',
    mensagem:
      'Olá! Tenho uma dúvida sobre os tratamentos oferecidos pela Clínica Dr. Richard.',
  },
  {
    rotulo: 'Urgência odontológica',
    descricao: 'Dor de dente, trauma ou inchaço',
    icone: 'urgencia',
    mensagem:
      'Olá! Estou com uma urgência odontológica (dor / trauma) e preciso de atendimento o quanto antes.',
  },
];

function abrirConversa(mensagem?: string): void {
  window.open(gerarLink(mensagem), '_blank', 'noopener,noreferrer');
  aberto.value = false;
}

function alternarPainel(): void {
  aberto.value = !aberto.value;
  if (aberto.value) sessionStorage.setItem(CHAVE_VISTO, '1');
}

function fecharPainel(): void {
  aberto.value = false;
  sessionStorage.setItem(CHAVE_VISTO, '1');
}

function aoApertarTecla(evento: KeyboardEvent): void {
  if (evento.key === 'Escape' && aberto.value) fecharPainel();
}

onMounted(() => {
  if (typeof window === 'undefined') return;
  reduzirMovimento.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.addEventListener('keydown', aoApertarTecla);

  if (reduzirMovimento.value) return;
  if (sessionStorage.getItem(CHAVE_VISTO)) return;
  setTimeout(() => {
    if (!sessionStorage.getItem(CHAVE_VISTO)) aberto.value = true;
  }, 4500);
});

onUnmounted(() => {
  if (typeof window === 'undefined') return;
  window.removeEventListener('keydown', aoApertarTecla);
});
</script>

<template>
  <div
    v-if="ativo"
    class="fixed z-40"
    style="bottom: max(1.25rem, env(safe-area-inset-bottom)); right: max(1.25rem, env(safe-area-inset-right));"
  >
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-3 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-3 scale-95"
    >
      <div
        v-if="aberto"
        role="dialog"
        aria-label="Atendimento via WhatsApp"
        class="absolute bottom-[4.5rem] right-0 w-[340px] max-w-[calc(100vw-1.5rem)] origin-bottom-right rounded-2xl bg-white shadow-elevated ring-1 ring-slate-200 overflow-hidden"
      >
        <header class="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
          <div class="relative h-11 w-11 rounded-full bg-white/15 grid place-items-center">
            <svg class="h-6 w-6" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path
                d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.18 1.6 6.01L4 28l6.13-1.6A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.85c-1.86 0-3.69-.5-5.29-1.45l-.38-.22-3.64.95.97-3.55-.25-.39A9.85 9.85 0 0 1 6.15 16c0-5.43 4.42-9.85 9.85-9.85S25.85 10.57 25.85 16 21.43 25.85 16 25.85z"
              />
            </svg>
            <span
              class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-[#075E54]"
              aria-hidden="true"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-sm leading-tight">Clínica Dr. Richard Cardoso</p>
            <p class="text-[11px] text-white/80 flex items-center gap-1.5 mt-0.5">
              <span class="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" aria-hidden="true" />
              Atendimento ativo · resposta em minutos
            </p>
          </div>
          <button
            type="button"
            class="text-white/80 hover:text-white rounded-full p-1 -mr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Fechar atendimento"
            @click="fecharPainel"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div class="bg-[#ECE5DD] px-4 pt-4 pb-3">
          <div class="relative max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 shadow-sm">
            <p class="text-sm text-slate-700 leading-relaxed">
              Olá! Aqui é a equipe do <strong>Dr. Richard</strong>. Como podemos cuidar do seu sorriso hoje?
            </p>
            <span class="block text-[10px] text-slate-400 mt-1 text-right">agora</span>
          </div>
        </div>

        <div class="p-3 grid gap-1.5 bg-white border-t border-slate-100">
          <button
            v-for="acao in acoesRapidas"
            :key="acao.rotulo"
            type="button"
            class="flex items-center gap-3 text-left rounded-xl border border-slate-200 px-3 py-2.5 hover:border-[#25D366] hover:bg-[#25D366]/5 transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/30"
            @click="abrirConversa(acao.mensagem)"
          >
            <span
              class="h-9 w-9 shrink-0 rounded-full bg-[#25D366]/10 text-[#128C7E] grid place-items-center group-hover:bg-[#25D366] group-hover:text-white transition"
              aria-hidden="true"
            >
              <svg v-if="acao.icone === 'agenda'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke-linecap="round" stroke-linejoin="round" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4" />
              </svg>
              <svg v-else-if="acao.icone === 'duvida'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 9a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 4M12 17.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l9 16H3l9-16zM12 10v4M12 17.5h.01" />
              </svg>
            </span>
            <span class="flex-1 min-w-0">
              <span class="block text-sm font-semibold text-dark group-hover:text-[#128C7E]">{{ acao.rotulo }}</span>
              <span class="block text-xs text-slate-500 truncate">{{ acao.descricao }}</span>
            </span>
            <svg class="h-4 w-4 text-slate-300 group-hover:text-[#25D366] transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <p class="px-4 pb-3 text-[10px] text-slate-400 text-center">
          Você será redirecionado(a) para o WhatsApp.
        </p>
      </div>
    </transition>

    <button
      type="button"
      class="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated hover:bg-[#1FBA59] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 transition-transform active:scale-95"
      :aria-label="aberto ? 'Fechar atendimento WhatsApp' : 'Abrir atendimento WhatsApp'"
      :aria-expanded="aberto"
      @click="alternarPainel"
    >
      <span
        v-if="!aberto && !reduzirMovimento"
        class="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"
        aria-hidden="true"
      />
      <span
        v-if="!aberto"
        class="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5"
        aria-hidden="true"
      >
        <span
          v-if="!reduzirMovimento"
          class="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping"
        />
        <span class="relative h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
      </span>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 scale-75 rotate-45"
        enter-to-class="opacity-100 scale-100 rotate-0"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100 rotate-0"
        leave-to-class="opacity-0 scale-75 -rotate-45"
        mode="out-in"
      >
        <svg
          v-if="!aberto"
          key="wa"
          class="relative h-7 w-7"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 4C9.37 4 4 9.37 4 16c0 2.11.55 4.18 1.6 6.01L4 28l6.13-1.6A11.93 11.93 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 4 16 4zm0 21.85c-1.86 0-3.69-.5-5.29-1.45l-.38-.22-3.64.95.97-3.55-.25-.39A9.85 9.85 0 0 1 6.15 16c0-5.43 4.42-9.85 9.85-9.85S25.85 10.57 25.85 16 21.43 25.85 16 25.85z"
          />
        </svg>
        <svg
          v-else
          key="x"
          class="relative h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </transition>
    </button>
  </div>
</template>
