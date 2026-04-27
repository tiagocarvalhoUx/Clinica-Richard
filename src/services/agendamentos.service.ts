import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type Unsubscribe,
} from 'firebase/firestore';
import { COLECOES, db } from './firebase';
import { fromSnap } from './converters';
import type {
  Agendamento,
  AgendamentoCompleto,
  Especialidade,
  Medico,
  StatusAgendamento,
} from '@/types';
import { listarMedicos } from './medicos.service';
import { listarEspecialidades } from './especialidades.service';

export interface CriarAgendamento {
  paciente_id: string;
  medico_id: string;
  especialidade_id: string;
  horario_id: string | null;
  data_hora: string;
  observacoes?: string | null;
}

export async function criarAgendamento(dados: CriarAgendamento): Promise<Agendamento> {
  if (dados.horario_id) {
    const horarioRef = doc(db, COLECOES.horariosDisponiveis, dados.horario_id);
    const horarioSnap = await getDoc(horarioRef);
    const horario = horarioSnap.exists()
      ? fromSnap<{ disponivel: boolean }>(horarioSnap as never)
      : null;
    if (!horario?.disponivel) {
      throw new Error('Esse horário acabou de ser reservado. Escolha outro horário disponível.');
    }
  }

  const ref = doc(collection(db, COLECOES.agendamentos));
  await setDoc(ref, {
    paciente_id: dados.paciente_id,
    medico_id: dados.medico_id,
    especialidade_id: dados.especialidade_id,
    horario_id: dados.horario_id,
    data_hora: dados.data_hora,
    status: 'pendente' as StatusAgendamento,
    observacoes: dados.observacoes ?? null,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });

  if (dados.horario_id) {
    await updateDoc(doc(db, COLECOES.horariosDisponiveis, dados.horario_id), {
      disponivel: false,
    });
  }

  const snap = await getDoc(ref);
  return fromSnap<Agendamento>(snap as never);
}

export async function cancelarAgendamento(agendamentoId: string): Promise<void> {
  const ref = doc(db, COLECOES.agendamentos, agendamentoId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const ag = fromSnap<Agendamento>(snap as never);

  await updateDoc(ref, { status: 'cancelado', updated_at: serverTimestamp() });

  if (ag.horario_id) {
    await updateDoc(doc(db, COLECOES.horariosDisponiveis, ag.horario_id), {
      disponivel: true,
    });
  }
}

export async function listarAgendamentosDoPaciente(
  pacienteId: string,
): Promise<AgendamentoCompleto[]> {
  const q = query(
    collection(db, COLECOES.agendamentos),
    where('paciente_id', '==', pacienteId),
    orderBy('data_hora', 'desc'),
  );
  const snap = await getDocs(q);
  const agendamentos = snap.docs.map((d) => fromSnap<Agendamento>(d));

  const [medicos, especialidades] = await Promise.all([listarMedicos(), listarEspecialidades()]);
  const mapaMedicos = new Map<string, Medico>(medicos.map((m) => [m.id, m]));
  const mapaEsp = new Map<string, Especialidade>(especialidades.map((e) => [e.id, e]));

  return agendamentos.map<AgendamentoCompleto>((a) => ({
    ...a,
    medico: mapaMedicos.get(a.medico_id) ?? null,
    especialidade: mapaEsp.get(a.especialidade_id) ?? null,
  }));
}

export function ouvirAgendamentosDoPaciente(
  pacienteId: string,
  callback: (agendamentos: Agendamento[]) => void,
  onErro?: (erro: Error) => void,
): Unsubscribe {
  const q = query(
    collection(db, COLECOES.agendamentos),
    where('paciente_id', '==', pacienteId),
    orderBy('data_hora', 'desc'),
  );
  return onSnapshot(
    q,
    (snap) => callback(snap.docs.map((d) => fromSnap<Agendamento>(d))),
    (err) => onErro?.(err as Error),
  );
}

export async function listarConsultasConcluidasSemAvaliacao(
  pacienteId: string,
): Promise<AgendamentoCompleto[]> {
  const q = query(
    collection(db, COLECOES.agendamentos),
    where('paciente_id', '==', pacienteId),
    where('status', '==', 'concluido'),
    orderBy('data_hora', 'desc'),
  );
  const [snapAg, avSnap] = await Promise.all([
    getDocs(q),
    getDocs(query(collection(db, COLECOES.avaliacoes), where('paciente_id', '==', pacienteId))),
  ]);
  const idsAvaliados = new Set<string>();
  for (const d of avSnap.docs) {
    const data = d.data() as { agendamento_id?: string };
    if (data.agendamento_id) idsAvaliados.add(data.agendamento_id);
  }

  const agendamentos = snapAg.docs
    .map((d) => fromSnap<Agendamento>(d))
    .filter((a) => !idsAvaliados.has(a.id));

  const [medicos, especialidades] = await Promise.all([listarMedicos(), listarEspecialidades()]);
  const mapaMedicos = new Map<string, Medico>(medicos.map((m) => [m.id, m]));
  const mapaEsp = new Map<string, Especialidade>(especialidades.map((e) => [e.id, e]));

  return agendamentos.map<AgendamentoCompleto>((a) => ({
    ...a,
    medico: mapaMedicos.get(a.medico_id) ?? null,
    especialidade: mapaEsp.get(a.especialidade_id) ?? null,
  }));
}
