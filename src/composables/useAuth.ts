import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth.store';

export function useAuth() {
  const store = useAuthStore();
  const { usuario, paciente, carregando, autenticado, nomePaciente } = storeToRefs(store);
  return {
    usuario,
    paciente,
    carregando,
    autenticado,
    nomePaciente,
    inicializar: store.inicializar,
    enviarMagicLink: store.enviarMagicLink,
    concluirMagicLink: store.concluirMagicLink,
    sair: store.sair,
  };
}
