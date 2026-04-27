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
import { COLECOES, db } from './firebase';
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
  void userId;
  return redimensionarImagemParaDataUrl(arquivo);
}

function carregarImagem(arquivo: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(arquivo);
    const imagem = new Image();

    imagem.onload = () => {
      URL.revokeObjectURL(url);
      resolve(imagem);
    };
    imagem.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Não foi possível ler a imagem selecionada.'));
    };
    imagem.src = url;
  });
}

async function redimensionarImagemParaDataUrl(arquivo: File): Promise<string> {
  const imagem = await carregarImagem(arquivo);
  const limite = 512;
  const escala = Math.min(1, limite / Math.max(imagem.naturalWidth, imagem.naturalHeight));
  const largura = Math.max(1, Math.round(imagem.naturalWidth * escala));
  const altura = Math.max(1, Math.round(imagem.naturalHeight * escala));

  const canvas = document.createElement('canvas');
  canvas.width = largura;
  canvas.height = altura;

  const contexto = canvas.getContext('2d');
  if (!contexto) {
    throw new Error('Não foi possível preparar a imagem.');
  }

  contexto.drawImage(imagem, 0, 0, largura, altura);
  return canvas.toDataURL('image/jpeg', 0.82);
}
