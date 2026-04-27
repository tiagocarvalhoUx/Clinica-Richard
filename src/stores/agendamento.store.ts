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
import { mensagemErroFirebase } from '@/services/firebase';

type Etapa = 'especialidade' | 'medico' | 'horario' | 'confirmacao' | 'sucesso';

const DR_RICHARD_PADRAO: Medico = {
  id: 'dr-richard-cardoso',
  nome: 'Dr. Richard Cardoso',
  crm: 'CRO/SP 1963',
  especialidade_id: 'todas',
  foto_url: null,
  bio: 'Cirurgião-dentista responsável pelo planejamento clínico, avaliação inicial e condução do atendimento.',
  ativo: true,
  created_at: new Date().toISOString(),
};

const HORARIOS_PADRAO = ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00'];

const ESPECIALIDADES_PADRAO: Especialidade[] = [
  {
    id: 'avaliacao-odontologica',
    nome: 'Avaliação odontológica',
    slug: 'avaliacao-odontologica',
    descricao: 'Consulta inicial para diagnóstico, orientações e definição do melhor plano de cuidado.',
    icone: null,
    ordem: 1,
    ativo: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'clareamento-dental',
    nome: 'Clareamento dental personalizado',
    slug: 'clareamento-dental',
    descricao: 'Planejamento estético para clarear o sorriso com acompanhamento profissional.',
    icone: null,
    ordem: 2,
    ativo: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'limpeza-prevencao',
    nome: 'Limpeza e prevenção',
    slug: 'limpeza-prevencao',
    descricao: 'Profilaxia, orientação de higiene e acompanhamento preventivo da saúde bucal.',
    icone: null,
    ordem: 3,
    ativo: true,
    created_at: new Date().toISOString(),
  },
];

function dataLocalYYYYMMDD(data: Date): string {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function proximosHorariosPadrao(medicoId: string): HorarioDisponivel[] {
  const horarios: HorarioDisponivel[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);

  while (horarios.length < 30) {
    const diaSemana = cursor.getDay();
    if (diaSemana !== 0) {
      const data = dataLocalYYYYMMDD(cursor);
      const horasDoDia = diaSemana === 6 ? HORARIOS_PADRAO.slice(0, 3) : HORARIOS_PADRAO;

      for (const hora of horasDoDia) {
        horarios.push({
          id: `fallback-${medicoId}-${data}-${hora.replace(':', '')}`,
          medico_id: medicoId,
          data,
          hora_inicio: hora,
          hora_fim: `${String(Number(hora.slice(0, 2)) + 1).padStart(2, '0')}:00`,
          disponivel: true,
          created_at: new Date().toISOString(),
        });
      }
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return horarios;
}

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
      const lista = await listarEspecialidades();
      especialidades.value = lista.length > 0 ? lista : ESPECIALIDADES_PADRAO;
    } catch (e) {
      especialidades.value = ESPECIALIDADES_PADRAO;
      erro.value = null;
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
      const lista = await listarMedicosPorEspecialidade(esp.id);
      medicos.value =
        lista.length > 0
          ? lista
          : [{ ...DR_RICHARD_PADRAO, especialidade_id: esp.id }];
    } catch (e) {
      medicos.value = [{ ...DR_RICHARD_PADRAO, especialidade_id: esp.id }];
      erro.value = null;
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
      const lista = await listarHorariosDoMedico(med.id);
      horarios.value = lista.length > 0 ? lista : proximosHorariosPadrao(med.id);
    } catch (e) {
      horarios.value = proximosHorariosPadrao(med.id);
      erro.value = null;
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
      const horarioId = horarioSelecionado.value.id.startsWith('fallback-')
        ? null
        : horarioSelecionado.value.id;
      const ag = await criarAgendamentoSrv({
        paciente_id: pacienteId,
        medico_id: medicoSelecionado.value.id,
        especialidade_id: especialidadeSelecionada.value.id,
        horario_id: horarioId,
        data_hora: new Date(dataHora).toISOString(),
        observacoes: observacoes.value || null,
      });
      etapa.value = 'sucesso';
      return ag;
    } catch (e) {
      erro.value = mensagemErroFirebase(e);
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
