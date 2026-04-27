import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { User } from 'firebase/auth';
import {
  enviarMagicLink as enviarMagicLinkSrv,
  concluirMagicLink as concluirMagicLinkSrv,
  ouvirEstadoAuth,
  sair as sairSrv,
} from '@/services/auth.service';
import { buscarPacientePorUserId, criarOuObterPaciente } from '@/services/pacientes.service';
import type { Paciente } from '@/types';

export const useAuthStore = defineStore('auth', () => {
  const usuario = ref<User | null>(null);
  const paciente = ref<Paciente | null>(null);
  const carregando = ref<boolean>(true);
  const inicializado = ref<boolean>(false);

  const autenticado = computed(() => usuario.value !== null);
  const nomePaciente = computed(
    () => paciente.value?.nome || usuario.value?.displayName || usuario.value?.email || '',
  );

  let unsub: (() => void) | null = null;

  function inicializar(): Promise<void> {
    if (inicializado.value) return Promise.resolve();
    inicializado.value = true;

    return new Promise((resolve) => {
      unsub = ouvirEstadoAuth(async (u) => {
        usuario.value = u;
        if (u) {
          try {
            let pac = await buscarPacientePorUserId(u.uid);
            if (!pac) {
              pac = await criarOuObterPaciente({
                user_id: u.uid,
                email: u.email ?? '',
                nome: u.displayName || (u.email ? u.email.split('@')[0] : 'Paciente'),
              });
            }
            paciente.value = pac;
          } catch (e) {
            console.error('[auth] falha ao carregar paciente', e);
            paciente.value = null;
          }
        } else {
          paciente.value = null;
        }
        carregando.value = false;
        resolve();
      });
    });
  }

  async function enviarMagicLink(email: string): Promise<void> {
    await enviarMagicLinkSrv(email);
  }

  async function concluirMagicLink(href: string, emailFallback?: string): Promise<void> {
    await concluirMagicLinkSrv(href, emailFallback);
  }

  async function sair(): Promise<void> {
    await sairSrv();
    paciente.value = null;
    usuario.value = null;
  }

  function destruir(): void {
    if (unsub) {
      unsub();
      unsub = null;
    }
    inicializado.value = false;
  }

  return {
    usuario,
    paciente,
    carregando,
    inicializado,
    autenticado,
    nomePaciente,
    inicializar,
    enviarMagicLink,
    concluirMagicLink,
    sair,
    destruir,
  };
});
