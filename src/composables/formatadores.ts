import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatarData(iso: string | Date | null | undefined): string {
  if (!iso) return '—';
  const d = typeof iso === 'string' ? parseISO(iso) : iso;
  return format(d, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function formatarDataCurta(iso: string | Date | null | undefined): string {
  if (!iso) return '—';
  const d = typeof iso === 'string' ? parseISO(iso) : iso;
  return format(d, 'dd/MM/yyyy', { locale: ptBR });
}

export function formatarHora(iso: string | Date | null | undefined): string {
  if (!iso) return '—';
  const d = typeof iso === 'string' ? parseISO(iso) : iso;
  return format(d, 'HH:mm', { locale: ptBR });
}

export function formatarDataHora(iso: string | Date | null | undefined): string {
  if (!iso) return '—';
  const d = typeof iso === 'string' ? parseISO(iso) : iso;
  return format(d, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
}

export function formatarDiaSemana(dataYYYYMMDD: string): string {
  const d = parseISO(dataYYYYMMDD);
  return format(d, "EEEE',' dd 'de' MMMM", { locale: ptBR });
}

export function tempoRelativo(iso: string | Date | null | undefined): string {
  if (!iso) return '';
  const d = typeof iso === 'string' ? parseISO(iso) : iso;
  return formatDistanceToNow(d, { addSuffix: true, locale: ptBR });
}

export function formatarTelefone(valor: string | null | undefined): string {
  if (!valor) return '';
  const dig = valor.replace(/\D/g, '');
  if (dig.length === 11) return `(${dig.slice(0, 2)}) ${dig.slice(2, 7)}-${dig.slice(7)}`;
  if (dig.length === 10) return `(${dig.slice(0, 2)}) ${dig.slice(2, 6)}-${dig.slice(6)}`;
  return valor;
}

export function rotuloStatusAgendamento(status: string): string {
  const mapa: Record<string, string> = {
    pendente: 'Pendente',
    confirmado: 'Confirmado',
    em_atendimento: 'Em atendimento',
    concluido: 'Concluído',
    cancelado: 'Cancelado',
  };
  return mapa[status] ?? status;
}

export function classeBadgeStatus(status: string): string {
  const mapa: Record<string, string> = {
    pendente: 'badge-warning',
    confirmado: 'badge-primary',
    em_atendimento: 'badge-secondary',
    concluido: 'badge-secondary',
    cancelado: 'badge-danger',
  };
  return mapa[status] ?? 'badge-neutral';
}
