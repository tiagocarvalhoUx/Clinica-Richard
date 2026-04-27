<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: number;
    leitura?: boolean;
    tamanho?: 'sm' | 'md' | 'lg';
    rotulo?: string;
  }>(),
  { leitura: false, tamanho: 'md', rotulo: 'Avaliação por estrelas' },
);

const emit = defineEmits<{
  (e: 'update:modelValue', valor: number): void;
}>();

function definir(n: number): void {
  if (props.leitura) return;
  emit('update:modelValue', n);
}

function tecla(e: KeyboardEvent, n: number): void {
  if (props.leitura) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    definir(n);
  }
}
</script>

<template>
  <div
    class="inline-flex items-center gap-1"
    role="radiogroup"
    :aria-label="rotulo"
  >
    <button
      v-for="n in 5"
      :key="n"
      type="button"
      :role="leitura ? undefined : 'radio'"
      :aria-checked="modelValue === n"
      :tabindex="leitura ? -1 : 0"
      :disabled="leitura"
      class="transition-transform"
      :class="[
        leitura ? 'cursor-default' : 'hover:scale-110 active:scale-95',
        tamanho === 'sm' ? 'p-0.5' : tamanho === 'lg' ? 'p-1' : 'p-0.5',
      ]"
      @click="definir(n)"
      @keydown="(e) => tecla(e, n)"
    >
      <svg
        :class="[
          n <= modelValue ? 'text-amber-400' : 'text-slate-300',
          tamanho === 'sm' ? 'h-4 w-4' : tamanho === 'lg' ? 'h-7 w-7' : 'h-5 w-5',
        ]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    </button>
  </div>
</template>
