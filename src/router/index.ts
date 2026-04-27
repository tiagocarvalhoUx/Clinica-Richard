import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

const PublicLayout = () => import('@/layouts/PublicLayout.vue');
const PortalLayout = () => import('@/layouts/PortalLayout.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/public/HomeView.vue'),
        meta: { titulo: 'Clínica Dr. Richard — Saúde com cuidado e modernidade' },
      },
      {
        path: 'sobre',
        name: 'sobre',
        component: () => import('@/views/public/SobreView.vue'),
        meta: { titulo: 'Sobre a Clínica — Dr. Richard' },
      },
      {
        path: 'especialidades',
        name: 'especialidades',
        component: () => import('@/views/public/EspecialidadesView.vue'),
        meta: { titulo: 'Especialidades — Clínica Dr. Richard' },
      },
      {
        path: 'equipe',
        name: 'equipe',
        component: () => import('@/views/public/EquipeView.vue'),
        meta: { titulo: 'Nossa Equipe — Clínica Dr. Richard' },
      },
      {
        path: 'depoimentos',
        name: 'depoimentos',
        component: () => import('@/views/public/DepoimentosView.vue'),
        meta: { titulo: 'Depoimentos — Clínica Dr. Richard' },
      },
      {
        path: 'contato',
        name: 'contato',
        component: () => import('@/views/public/ContatoView.vue'),
        meta: { titulo: 'Contato — Clínica Dr. Richard' },
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/public/LoginView.vue'),
        meta: { titulo: 'Acesso do Paciente — Clínica Dr. Richard', somenteAnonimos: true },
      },
      {
        path: 'auth/callback',
        name: 'auth-callback',
        component: () => import('@/views/public/AuthCallbackView.vue'),
        meta: { titulo: 'Confirmando acesso…' },
      },
    ],
  },
  {
    path: '/portal',
    component: PortalLayout,
    meta: { protegida: true },
    children: [
      {
        path: '',
        name: 'portal-dashboard',
        component: () => import('@/views/portal/DashboardView.vue'),
        meta: { titulo: 'Meu Painel — Clínica Dr. Richard' },
      },
      {
        path: 'agendar',
        name: 'portal-agendar',
        component: () => import('@/views/portal/AgendarView.vue'),
        meta: { titulo: 'Agendar Consulta — Clínica Dr. Richard' },
      },
      {
        path: 'agendamentos',
        name: 'portal-agendamentos',
        component: () => import('@/views/portal/MeusAgendamentosView.vue'),
        meta: { titulo: 'Meus Agendamentos — Clínica Dr. Richard' },
      },
      {
        path: 'perfil',
        name: 'portal-perfil',
        component: () => import('@/views/portal/PerfilView.vue'),
        meta: { titulo: 'Meu Perfil — Clínica Dr. Richard' },
      },
      {
        path: 'avaliacoes',
        name: 'portal-avaliacoes',
        component: () => import('@/views/portal/AvaliacoesView.vue'),
        meta: { titulo: 'Avaliações — Clínica Dr. Richard' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'nao-encontrada',
    component: () => import('@/views/public/NaoEncontradaView.vue'),
    meta: { titulo: 'Página não encontrada' },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();
  if (!auth.inicializado) await auth.inicializar();

  if (to.meta.protegida && !auth.autenticado) {
    return {
      name: 'login',
      query: { redirect: to.fullPath, motivo: 'sessao' },
    };
  }
  if (to.meta.somenteAnonimos && auth.autenticado) {
    return { name: 'portal-dashboard' };
  }
  return true;
});

router.afterEach((to) => {
  const titulo = (to.meta.titulo as string | undefined) ?? 'Clínica Dr. Richard';
  document.title = titulo;
});
