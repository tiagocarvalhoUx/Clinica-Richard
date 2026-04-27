export * from './database';

export type ToastTipo = 'sucesso' | 'erro' | 'info' | 'aviso';

export interface Toast {
  id: string;
  tipo: ToastTipo;
  titulo: string;
  mensagem?: string;
  duracaoMs?: number;
}

export interface OpcaoSelecao<T = string> {
  valor: T;
  rotulo: string;
  descricao?: string;
}
