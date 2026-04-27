import { Timestamp, type DocumentData, type QueryDocumentSnapshot } from 'firebase/firestore';

function normalizarValor(valor: unknown): unknown {
  if (valor instanceof Timestamp) return valor.toDate().toISOString();
  if (Array.isArray(valor)) return valor.map(normalizarValor);
  if (valor && typeof valor === 'object') {
    return Object.fromEntries(
      Object.entries(valor).map(([chave, item]) => [chave, normalizarValor(item)]),
    );
  }
  return valor;
}

export function fromSnap<T>(snap: QueryDocumentSnapshot<DocumentData>): T {
  const dados = normalizarValor(snap.data()) as Record<string, unknown>;
  return {
    id: snap.id,
    ...dados,
  } as T;
}
