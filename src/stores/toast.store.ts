import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Toast, ToastTipo } from '@/types';

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([]);

  function adicionar(toast: Omit<Toast, 'id'>): string {
    const id = `t_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const novo: Toast = { id, duracaoMs: 4000, ...toast };
    toasts.value.push(novo);
    if (novo.duracaoMs && novo.duracaoMs > 0) {
      window.setTimeout(() => remover(id), novo.duracaoMs);
    }
    return id;
  }

  function remover(id: string): void {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }

  function notificar(tipo: ToastTipo, titulo: string, mensagem?: string): string {
    return adicionar({ tipo, titulo, mensagem });
  }

  const sucesso = (titulo: string, mensagem?: string) => notificar('sucesso', titulo, mensagem);
  const erro = (titulo: string, mensagem?: string) => notificar('erro', titulo, mensagem);
  const info = (titulo: string, mensagem?: string) => notificar('info', titulo, mensagem);
  const aviso = (titulo: string, mensagem?: string) => notificar('aviso', titulo, mensagem);

  return { toasts, adicionar, remover, sucesso, erro, info, aviso };
});
