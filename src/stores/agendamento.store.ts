import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type {
  Agendamento,
  AgendamentoCompleto,
  Especialidade,
  HorarioDisponivel,
  Medico,
} from '@/types';
import { listarEspecialidades } from '@/services/especialidades.service';
import { listarMedicosPorEspecialidade } from '@/services/medicos.service';
import { listarHorariosDoMedico } from '@/services/horarios.service';
import {
  criarAgendamento as criarAgendamentoSrv,
  cancelarAgendamento as cancelarAgendamentoSrv,
  listarAgendamentosDoPaciente,
  ouvirAgendamentosDoPaciente,
} from '@/services/agendamentos.service';

type Etapa = 'especialidade' | 'medico' | 'horario' | 'confirmacao' | 'sucesso';

export const useAgendamentoStore = defineStore('agendamento', () => {
  const especialidades = ref<Especialidade[]>([]);
  const medicos = ref<Medico[]>([]);
  const horarios = ref<HorarioDisponivel[]>([]);

  const especialidadeSelecionada = ref<Especialidade | null>(null);
  const medicoSelecionado = ref<Medico | null>(null);
  const horarioSelecionado = ref<HorarioDisponivel | null>(null);
  const observacoes = ref<string>('');

  const etapa = ref<Etapa>('especialidade');
  const carregando = ref<boolean>(false);
  const erro = ref<string | null>(null);

  const meusAgendamentos = ref<AgendamentoCompleto[]>([]);
  const carregandoMeus = ref<boolean>(false);

  let unsubRealtime: (() => void) | null = null;

  const datasDisponiveis = computed(() => {
    const set = new Set<string>();
    for (const h of horarios.value) set.add(h.data);
    return Array.from(set).sort();
  });

  function horariosDaData(data: string): HorarioDisponivel[] {
    return horarios.value
      .filter((h) => h.data === data)
      .sort((a, b) => a.hora_inicio.localeCompare(b.hora_inicio));
  }

  async function carregarEspecialidades(): Promise<void> {
    carregando.value = true;
    erro.value = null;
    try {
      especialidades.value = await listarEspecialidades();
    } catch (e) {
      erro.value = 'Não foi possível carregar as especialidades.';
      console.error(e);
    } finally {
      carregando.value = false;
    }
  }

  async function selecionarEspecialidade(esp: Especialidade): Promise<void> {
    especialidadeSelecionada.value = esp;
    medicoSelecionado.value = null;
    horarioSelecionado.value = null;
    medicos.value = [];
    horarios.value = [];
    etapa.value = 'medico';
    carregando.value = true;
    erro.value = null;
    try {
      medicos.value = await listarMedicosPorEspecialidade(esp.id);
    } catch (e) {
      erro.value = 'Não foi possível carregar os médicos.';
      console.error(e);
    } finally {
      carregando.value = false;
    }
  }

  async function selecionarMedico(med: Medico): Promise<void> {
    medicoSelecionado.value = med;
    horarioSelecionado.value = null;
    horarios.value = [];
    etapa.value = 'horario';
    carregando.value = true;
    erro.value = null;
    try {
      horarios.value = await listarHorariosDoMedico(med.id);
    } catch (e) {
      erro.value = 'Não foi possível carregar os horários.';
      console.error(e);
    } finally {
      carregando.value = false;
    }
  }

  function selecionarHorario(h: HorarioDisponivel): void {
    horarioSelecionado.value = h;
    etapa.value = 'confirmacao';
  }

  function voltar(): void {
    if (etapa.value === 'confirmacao') etapa.value = 'horario';
    else if (etapa.value === 'horario') etapa.value = 'medico';
    else if (etapa.value === 'medico') etapa.value = 'especialidade';
  }

  function reiniciar(): void {
    especialidadeSelecionada.value = null;
    medicoSelecionado.value = null;
    horarioSelecionado.value = null;
    observacoes.value = '';
    medicos.value = [];
    horarios.value = [];
    etapa.value = 'especialidade';
    erro.value = null;
  }

  async function confirmar(pacienteId: string): Promise<Agendamento> {
    if (
      !especialidadeSelecionada.value ||
      !medicoSelecionado.value ||
      !horarioSelecionado.value
    ) {
      throw new Error('Complete todas as etapas antes de confirmar.');
    }
    carregando.value = true;
    erro.value = null;
    try {
      const dataHora = `${horarioSelecionado.value.data}T${horarioSelecionado.value.hora_inicio}:00`;
      const ag = await criarAgendamentoSrv({
        paciente_id: pacienteId,
        medico_id: medicoSelecionado.value.id,
        especialidade_id: especialidadeSelecionada.value.id,
        horario_id: horarioSelecionado.value.id,
        data_hora: new Date(dataHora).toISOString(),
        observacoes: observacoes.value || null,
      });
      etapa.value = 'sucesso';
      return ag;
    } catch (e) {
      erro.value = 'Não foi possível confirmar o agendamento. Tente novamente.';
      throw e;
    } finally {
      carregando.value = false;
    }
  }

  async function cancelar(agendamentoId: string): Promise<void> {
    await cancelarAgendamentoSrv(agendamentoId);
  }

  async function carregarMeusAgendamentos(pacienteId: string): Promise<void> {
    carregandoMeus.value = true;
    try {
      meusAgendamentos.value = await listarAgendamentosDoPaciente(pacienteId);
    } finally {
      carregandoMeus.value = false;
    }
  }

  function assinarRealtime(pacienteId: string): void {
    pararRealtime();
    unsubRealtime = ouvirAgendamentosDoPaciente(pacienteId, (lista) => {
      const mapaAtual = new Map(meusAgendamentos.value.map((a) => [a.id, a]));
      meusAgendamentos.value = lista.map<AgendamentoCompleto>((a) => ({
        ...a,
        medico: mapaAtual.get(a.id)?.medico ?? null,
        especialidade: mapaAtual.get(a.id)?.especialidade ?? null,
      }));
    });
  }

  function pararRealtime(): void {
    if (unsubRealtime) {
      unsubRealtime();
      unsubRealtime = null;
    }
  }

  return {
    especialidades,
    medicos,
    horarios,
    especialidadeSelecionada,
    medicoSelecionado,
    horarioSelecionado,
    observacoes,
    etapa,
    carregando,
    erro,
    meusAgendamentos,
    carregandoMeus,
    datasDisponiveis,
    horariosDaData,
    carregarEspecialidades,
    selecionarEspecialidade,
    selecionarMedico,
    selecionarHorario,
    voltar,
    reiniciar,
    confirmar,
    cancelar,
    carregarMeusAgendamentos,
    assinarRealtime,
    pararRealtime,
  };
});
