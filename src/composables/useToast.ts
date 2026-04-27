import { useToastStore } from '@/stores/toast.store';

export function useToast() {
  const store = useToastStore();
  return {
    sucesso: store.sucesso,
    erro: store.erro,
    info: store.info,
    aviso: store.aviso,
  };
}
