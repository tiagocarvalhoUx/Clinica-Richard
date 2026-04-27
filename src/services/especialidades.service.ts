import { collection, getDocs, query, where } from 'firebase/firestore';
import { COLECOES, db } from './firebase';
import { fromSnap } from './converters';
import type { Especialidade } from '@/types';

export async function listarEspecialidades(): Promise<Especialidade[]> {
  const q = query(collection(db, COLECOES.especialidades), where('ativo', '==', true));
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => fromSnap<Especialidade>(d))
    .sort((a, b) => (a.ordem ?? Number.MAX_SAFE_INTEGER) - (b.ordem ?? Number.MAX_SAFE_INTEGER));
}

export async function buscarEspecialidadePorSlug(slug: string): Promise<Especialidade | null> {
  const q = query(collection(db, COLECOES.especialidades), where('slug', '==', slug));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return fromSnap<Especialidade>(snap.docs[0]);
}
