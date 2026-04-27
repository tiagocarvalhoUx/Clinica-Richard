<script setup lang="ts">
import { computed, useId } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    rotulo?: string;
    placeholder?: string;
    erro?: string | null;
    ajuda?: string;
    obrigatorio?: boolean;
    desabilitado?: boolean;
    linhas?: number;
  }>(),
  { erro: null, obrigatorio: false, desabilitado: false, linhas: 4 },
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
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="linhas"
      :required="obrigatorio"
      :disabled="desabilitado"
      :aria-invalid="temErro"
      class="campo resize-y"
      :class="{ 'campo-erro': temErro }"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <p v-if="temErro" class="mensagem-erro">{{ erro }}</p>
    <p v-else-if="ajuda" class="mensagem-ajuda">{{ ajuda }}</p>
  </div>
</template>
