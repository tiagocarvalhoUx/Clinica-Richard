/**
 * Inicialização única do Firebase para o frontend.
 * Auth + Firestore + Storage.
 */
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

function valorAusenteOuPlaceholder(valor: unknown): boolean {
  if (typeof valor !== 'string' || !valor.trim()) return true;
  return /^(AIzaSy\.\.\.|seu-projeto|123456789|1:123456789:web:abcdef)$/i.test(valor.trim());
}

const camposInvalidos = Object.entries(config)
  .filter(([, valor]) => valorAusenteOuPlaceholder(valor))
  .map(([campo]) => campo);

if (camposInvalidos.length > 0) {
  throw new Error(
    `[Firebase] Configuração ausente ou inválida: ${camposInvalidos.join(
      ', ',
    )}. Crie frontend/.env com as variáveis VITE_FIREBASE_* do console Firebase e reinicie o Vite.`,
  );
}

export const firebaseApp: FirebaseApp = initializeApp(config);
export const auth: Auth = getAuth(firebaseApp);
export const db: Firestore = getFirestore(firebaseApp);
export const storage: FirebaseStorage = getStorage(firebaseApp);

export const COLECOES = {
  especialidades: 'especialidades',
  medicos: 'medicos',
  horariosDisponiveis: 'horarios_disponiveis',
  pacientes: 'pacientes',
  agendamentos: 'agendamentos',
  avaliacoes: 'avaliacoes',
  contatos: 'contatos',
} as const;

export function mensagemErroFirebase(erro: unknown): string {
  const codigo =
    typeof erro === 'object' && erro !== null && 'code' in erro
      ? String((erro as { code: unknown }).code)
      : '';

  const mapa: Record<string, string> = {
    'auth/invalid-email': 'E-mail inválido. Confira e tente novamente.',
    'auth/user-disabled': 'Sua conta foi desativada. Entre em contato com a clínica.',
    'auth/expired-action-code': 'O link expirou. Solicite um novo acesso.',
    'auth/invalid-action-code': 'Link inválido ou já utilizado. Solicite um novo.',
    'auth/configuration-not-found':
      'Login por e-mail ainda não configurado. Ative o provedor E-mail/Senha no Firebase Authentication.',
    'auth/network-request-failed': 'Sem conexão. Verifique sua internet e tente novamente.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos e tente de novo.',
    'permission-denied': 'Você não tem permissão para esta operação.',
    unavailable: 'Serviço indisponível no momento. Tente novamente em instantes.',
  };

  if (codigo && mapa[codigo]) return mapa[codigo];
  if (erro instanceof Error && erro.message) return erro.message;
  return 'Ocorreu um erro inesperado. Tente novamente em instantes.';
}
