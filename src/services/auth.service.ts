import {
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
  type User,
} from 'firebase/auth';
import { auth } from './firebase';

const CHAVE_EMAIL = 'clinica.dr.richard.email_login';

export async function enviarMagicLink(email: string): Promise<void> {
  const url = `${import.meta.env.VITE_SITE_URL || window.location.origin}/auth/callback`;
  await sendSignInLinkToEmail(auth, email, {
    url,
    handleCodeInApp: true,
  });
  window.localStorage.setItem(CHAVE_EMAIL, email);
}

export function urlEhMagicLink(href: string): boolean {
  return isSignInWithEmailLink(auth, href);
}

export async function concluirMagicLink(href: string, emailFallback?: string): Promise<User> {
  const email = window.localStorage.getItem(CHAVE_EMAIL) || emailFallback || '';
  if (!email) {
    throw new Error('Informe o e-mail para confirmar o acesso.');
  }
  const cred = await signInWithEmailLink(auth, email, href);
  window.localStorage.removeItem(CHAVE_EMAIL);
  return cred.user;
}

export async function sair(): Promise<void> {
  await signOut(auth);
}

export function emailSalvoLocalmente(): string | null {
  return window.localStorage.getItem(CHAVE_EMAIL);
}

export function ouvirEstadoAuth(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback);
}
