<script setup lang="ts">
import AppLogo from './AppLogo.vue';

const ano = new Date().getFullYear();
const telefone = import.meta.env.VITE_CLINICA_TELEFONE || '+55 (11) 9999-9999';
const email = import.meta.env.VITE_CLINICA_EMAIL || 'contato@clinicadrrichard.com.br';
const endereco = import.meta.env.VITE_CLINICA_ENDERECO || 'São Paulo, SP';
</script>

<template>
  <footer class="bg-dark text-slate-300">
    <div class="container-clinica py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <AppLogo cor="branco" tamanho="md" />
        <p class="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
          Saúde com cuidado, modernidade e tecnologia. Sua jornada de bem-estar começa
          aqui.
        </p>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
          Navegação
        </h3>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/" class="hover:text-white transition">Início</router-link></li>
          <li><router-link to="/sobre" class="hover:text-white transition">Sobre</router-link></li>
          <li>
            <router-link to="/especialidades" class="hover:text-white transition">
              Especialidades
            </router-link>
          </li>
          <li><router-link to="/equipe" class="hover:text-white transition">Equipe</router-link></li>
          <li>
            <router-link to="/depoimentos" class="hover:text-white transition">
              Depoimentos
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
          Atendimento
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 mt-0.5 text-secondary-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
            </svg>
            <span>{{ telefone }}</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 mt-0.5 text-secondary-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"/>
            </svg>
            <a :href="`mailto:${email}`" class="hover:text-white transition break-all">{{ email }}</a>
          </li>
          <li class="flex items-start gap-2">
            <svg class="h-4 w-4 mt-0.5 text-secondary-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z"/>
            </svg>
            <span>{{ endereco }}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
          Horário
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex justify-between"><span>Seg–Sex</span><span>08h–20h</span></li>
          <li class="flex justify-between"><span>Sábado</span><span>08h–14h</span></li>
          <li class="flex justify-between text-slate-500"><span>Domingo</span><span>Fechado</span></li>
        </ul>
        <router-link
          :to="{ name: 'login' }"
          class="btn-secondary mt-6 w-full justify-center"
        >
          Agendar consulta
        </router-link>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="container-clinica py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>© {{ ano }} Clínica Dr. Richard. Todos os direitos reservados.</p>
        <p>CNPJ 00.000.000/0001-00 · Responsável técnico: Dr. Richard — CRM 000000</p>
      </div>
    </div>
  </footer>
</template>
