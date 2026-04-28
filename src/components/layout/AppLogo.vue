<script setup lang="ts">
import { onMounted, ref } from 'vue';

withDefaults(
  defineProps<{
    cor?: 'primary' | 'branco';
    tamanho?: 'sm' | 'md' | 'lg';
  }>(),
  { cor: 'primary', tamanho: 'md' },
);

const animando = ref(false);

function reanimar(): void {
  animando.value = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      animando.value = true;
    });
  });
}

function aoTerminar(): void {
  animando.value = false;
}

onMounted(() => {
  requestAnimationFrame(() => {
    animando.value = true;
  });
});
</script>

<template>
  <span
    class="logo-flip relative inline-flex shrink-0 rounded-md bg-[#e8f0f1] cursor-pointer animate__animated animate__slow"
    :class="[
      tamanho === 'sm' ? 'h-12 w-36' : tamanho === 'lg' ? 'h-20 w-60' : 'h-14 w-44',
      cor === 'branco' ? 'ring-1 ring-white/15' : '',
      animando ? 'logo-flip--ativo animate__flip' : '',
    ]"
    @mouseenter="reanimar"
    @animationend.self="aoTerminar"
  >
    <img
      src="/image/logo-Dr.Richard.png"
      alt="Clínica Dr. Richard"
      class="absolute left-1/2 top-1/2 w-[calc(100%-0.75rem)] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-md"
      decoding="async"
      fetchpriority="high"
    />
  </span>
</template>

<style scoped>
.logo-flip {
  backface-visibility: visible;
  transform-style: preserve-3d;
}

@keyframes logoFlip {
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
}

.logo-flip--ativo {
  animation-name: logoFlip;
  animation-duration: 1.6s;
  animation-fill-mode: both;
}
</style>
