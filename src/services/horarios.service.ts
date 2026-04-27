import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { COLECOES, db } from './firebase';
import { fromSnap } from './converters';
import type { HorarioDisponivel } from '@/types';

export async function listarHorariosDoMedico(
  medicoId: string,
  dataYYYYMMDD?: string,
): Promise<HorarioDisponivel[]> {
  const filtros = [where('medico_id', '==', medicoId), where('disponivel', '==', true)];
  if (dataYYYYMMDD) filtros.push(where('data', '==', dataYYYYMMDD));

  const q = query(
    collection(db, COLECOES.horariosDisponiveis),
    ...filtros,
    orderBy('data', 'asc'),
    orderBy('hora_inicio', 'asc'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => fromSnap<HorarioDisponivel>(d));
}

export async function listarDatasComHorariosDoMedico(medicoId: string): Promise<string[]> {
  const horarios = await listarHorariosDoMedico(medicoId);
  const datas = new Set<string>();
  for (const h of horarios) datas.add(h.data);
  return Array.from(datas).sort();
}
