export type StatusAgendamento =
  | 'pendente'
  | 'confirmado'
  | 'em_atendimento'
  | 'concluido'
  | 'cancelado';

export interface Especialidade {
  id: string;
  nome: string;
  slug: string;
  descricao: string | null;
  icone: string | null;
  ordem: number | null;
  ativo: boolean;
  created_at: string;
}

export interface Medico {
  id: string;
  nome: string;
  crm: string;
  especialidade_id: string;
  foto_url: string | null;
  bio: string | null;
  ativo: boolean;
  created_at: string;
}

export interface HorarioDisponivel {
  id: string;
  medico_id: string;
  data: string;
  hora_inicio: string;
  hora_fim: string;
  disponivel: boolean;
  created_at: string;
}

export interface Paciente {
  id: string;
  user_id: string;
  nome: string;
  email: string;
  telefone: string | null;
  cpf: string | null;
  data_nascimento: string | null;
  foto_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Agendamento {
  id: string;
  paciente_id: string;
  medico_id: string;
  especialidade_id: string;
  horario_id: string | null;
  data_hora: string;
  status: StatusAgendamento;
  observacoes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Avaliacao {
  id: string;
  paciente_id: string;
  medico_id: string;
  agendamento_id: string;
  estrelas: number;
  comentario: string | null;
  publica: boolean;
  created_at: string;
}

export interface Contato {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  mensagem: string;
  created_at: string;
}

export interface MedicoComEspecialidade extends Medico {
  especialidade?: Especialidade | null;
}

export interface AgendamentoCompleto extends Agendamento {
  medico?: Medico | null;
  especialidade?: Especialidade | null;
}

export interface AvaliacaoComPaciente extends Avaliacao {
  paciente?: Pick<Paciente, 'id' | 'nome' | 'foto_url'> | null;
  medico?: Pick<Medico, 'id' | 'nome'> | null;
}

export interface ContatoInsert {
  nome: string;
  email: string;
  telefone: string | null;
  mensagem: string;
}

type Tabela<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row & Record<string, unknown>;
  Insert: Insert & Record<string, unknown>;
  Update: Update & Record<string, unknown>;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      especialidades: Tabela<Especialidade>;
      medicos: Tabela<Medico>;
      horarios_disponiveis: Tabela<HorarioDisponivel>;
      pacientes: Tabela<
        Paciente,
        Omit<Paciente, 'id' | 'created_at' | 'updated_at'> &
          Partial<Pick<Paciente, 'created_at' | 'updated_at'>>
      >;
      agendamentos: Tabela<
        Agendamento,
        Omit<Agendamento, 'id' | 'created_at' | 'updated_at' | 'status'> &
          Partial<Pick<Agendamento, 'created_at' | 'updated_at' | 'status'>>
      >;
      avaliacoes: Tabela<
        Avaliacao,
        Omit<Avaliacao, 'id' | 'created_at'> & Partial<Pick<Avaliacao, 'created_at'>>
      >;
      contatos: Tabela<Contato, ContatoInsert>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
