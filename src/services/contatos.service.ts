import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { COLECOES, db } from './firebase';

export interface CriarContato {
  nome: string;
  email: string;
  telefone?: string | null;
  mensagem: string;
}

export async function enviarContato(dados: CriarContato): Promise<void> {
  const ref = doc(collection(db, COLECOES.contatos));
  await setDoc(ref, {
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone ?? null,
    mensagem: dados.mensagem,
    created_at: serverTimestamp(),
  });
}
