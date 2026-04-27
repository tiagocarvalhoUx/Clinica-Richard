import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { COLECOES, db } from './firebase';
import { fromSnap } from './converters';
import type { Especialidade, Medico, MedicoComEspecialidade } from '@/types';

export async function listarMedicos(): Promise<Medico[]> {
  const q = query(
    collection(db, COLECOES.medicos),
    where('ativo', '==', true),
    orderBy('nome', 'asc'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => fromSnap<Medico>(d));
}

export async function listarMedicosPorEspecialidade(
  especialidadeId: string,
): Promise<Medico[]> {
  const q = query(
    collection(db, COLECOES.medicos),
    where('ativo', '==', true),
    where('especialidade_id', '==', especialidadeId),
    orderBy('nome', 'asc'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => fromSnap<Medico>(d));
}

export async function listarMedicosComEspecialidade(): Promise<MedicoComEspecialidade[]> {
  const [medicos, especialidadesSnap] = await Promise.all([
    listarMedicos(),
    getDocs(collection(db, COLECOES.especialidades)),
  ]);
  const mapa = new Map<string, Especialidade>();
  for (const d of especialidadesSnap.docs) {
    const e = fromSnap<Especialidade>(d);
    mapa.set(e.id, e);
  }
  return medicos.map((m) => ({ ...m, especialidade: mapa.get(m.especialidade_id) ?? null }));
}

export async function buscarMedicoPorId(id: string): Promise<Medico | null> {
  const ref = doc(db, COLECOES.medicos, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return fromSnap<Medico>(snap as never);
}
