import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { COLECOES, db, storage } from './firebase';
import { fromSnap } from './converters';
import type { Paciente } from '@/types';

export async function buscarPacientePorUserId(userId: string): Promise<Paciente | null> {
  const q = query(collection(db, COLECOES.pacientes), where('user_id', '==', userId), limit(1));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return fromSnap<Paciente>(snap.docs[0]);
}

export interface InsertPaciente {
  user_id: string;
  nome: string;
  email: string;
  telefone?: string | null;
  cpf?: string | null;
  data_nascimento?: string | null;
  foto_url?: string | null;
}

export async function criarOuObterPaciente(dados: InsertPaciente): Promise<Paciente> {
  const existente = await buscarPacientePorUserId(dados.user_id);
  if (existente) return existente;

  const ref = doc(collection(db, COLECOES.pacientes));
  await setDoc(ref, {
    user_id: dados.user_id,
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone ?? null,
    cpf: dados.cpf ?? null,
    data_nascimento: dados.data_nascimento ?? null,
    foto_url: dados.foto_url ?? null,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  const snap = await getDoc(ref);
  return fromSnap<Paciente>(snap as never);
}

export type AtualizarPaciente = Partial<
  Pick<Paciente, 'nome' | 'telefone' | 'cpf' | 'data_nascimento' | 'foto_url'>
>;

export async function atualizarPaciente(
  pacienteId: string,
  dados: AtualizarPaciente,
): Promise<void> {
  const ref = doc(db, COLECOES.pacientes, pacienteId);
  await updateDoc(ref, { ...dados, updated_at: serverTimestamp() });
}

export async function uploadFotoPaciente(userId: string, arquivo: File): Promise<string> {
  const extensao = arquivo.name.split('.').pop()?.toLowerCase() || 'jpg';
  const caminho = `pacientes/${userId}/avatar-${Date.now()}.${extensao}`;
  const refStorage = storageRef(storage, caminho);
  await uploadBytes(refStorage, arquivo, { contentType: arquivo.type || 'image/jpeg' });
  return getDownloadURL(refStorage);
}
