<script setup lang="ts">
import { computed, useId } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    rotulo?: string;
    tipo?: string;
    placeholder?: string;
    erro?: string | null;
    ajuda?: string;
    autocomplete?: string;
    obrigatorio?: boolean;
    desabilitado?: boolean;
  }>(),
  { tipo: 'text', erro: null, obrigatorio: false, desabilitado: false },
);

defineEmits<{
  (e: 'update:modelValue', valor: string): void;
}>();

const id = useId();
const temErro = computed(() => Boolean(props.erro));
</script>

<template>
  <div class="w-full">
    <label v-if="rotulo" :for="id" class="rotulo">
      {{ rotulo }}
      <span v-if="obrigatorio" class="text-danger-500" aria-hidden="true">*</span>
    </label>
    <input
      :id="id"
      :type="tipo"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :required="obrigatorio"
      :disabled="desabilitado"
      :aria-invalid="temErro"
      :aria-describedby="temErro ? `${id}-erro` : ajuda ? `${id}-ajuda` : undefined"
      class="campo"
      :class="{ 'campo-erro': temErro }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="temErro" :id="`${id}-erro`" class="mensagem-erro" role="alert">
      <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0 1 1 0 01-2 0zm.25-7a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0V6z"
          clip-rule="evenodd"
        />
      </svg>
      {{ erro }}
    </p>
    <p v-else-if="ajuda" :id="`${id}-ajuda`" class="mensagem-ajuda">{{ ajuda }}</p>
  </div>
</template>
