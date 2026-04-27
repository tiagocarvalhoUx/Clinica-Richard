import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import { COLECOES, db } from './firebase';
import { fromSnap } from './converters';
import type { Avaliacao, AvaliacaoComPaciente } from '@/types';

export interface CriarAvaliacao {
  paciente_id: string;
  medico_id: string;
  agendamento_id: string;
  estrelas: number;
  comentario?: string | null;
  publica?: boolean;
}

export async function criarAvaliacao(dados: CriarAvaliacao): Promise<void> {
  if (dados.estrelas < 1 || dados.estrelas > 5) {
    throw new Error('A avaliação deve ter entre 1 e 5 estrelas.');
  }
  const ref = doc(collection(db, COLECOES.avaliacoes));
  await setDoc(ref, {
    paciente_id: dados.paciente_id,
    medico_id: dados.medico_id,
    agendamento_id: dados.agendamento_id,
    estrelas: dados.estrelas,
    comentario: dados.comentario ?? null,
    publica: dados.publica ?? true,
    created_at: serverTimestamp(),
  });
}

export async function listarAvaliacoesPublicas(qtd = 12): Promise<AvaliacaoComPaciente[]> {
  const q = query(collection(db, COLECOES.avaliacoes), where('publica', '==', true));
  const snap = await getDocs(q);

  return snap.docs
    .map<AvaliacaoComPaciente>((d) => ({
      ...fromSnap<Avaliacao>(d),
      paciente: null,
      medico: null,
    }))
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    .slice(0, qtd);
}
