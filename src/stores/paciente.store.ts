import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  atualizarPaciente as atualizarPacienteSrv,
  buscarPacientePorUserId,
  type AtualizarPaciente,
} from '@/services/pacientes.service';
import type { Paciente } from '@/types';

export const usePacienteStore = defineStore('paciente', () => {
  const dados = ref<Paciente | null>(null);
  const carregando = ref<boolean>(false);
  const salvando = ref<boolean>(false);

  async function carregar(userId: string): Promise<void> {
    carregando.value = true;
    try {
      dados.value = await buscarPacientePorUserId(userId);
    } finally {
      carregando.value = false;
    }
  }

  async function atualizar(dadosNovos: AtualizarPaciente): Promise<void> {
    if (!dados.value) throw new Error('Paciente não carregado.');
    salvando.value = true;
    try {
      await atualizarPacienteSrv(dados.value.id, dadosNovos);
      dados.value = { ...dados.value, ...dadosNovos } as Paciente;
    } finally {
      salvando.value = false;
    }
  }

  return { dados, carregando, salvando, carregar, atualizar };
});
