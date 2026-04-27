<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useToast } from '@/composables/useToast';
import { mensagemErroFirebase } from '@/services/firebase';

const auth = useAuthStore();
const toast = useToast();
const route = useRoute();

const formulario = reactive({ email: '' });
const erro = ref<string | null>(null);
const enviando = ref(false);
const enviado = ref(false);
const motivo = computed(() => route.query.motivo as string | undefined);

function valido(): boolean {
  if (!/\S+@\S+\.\S+/.test(formulario.email)) {
    erro.value = 'Informe um e-mail válido.';
    return false;
  }
  erro.value = null;
  return true;
}

async function enviar(): Promise<void> {
  if (!valido()) return;
  enviando.value = true;
  try {
    await auth.enviarMagicLink(formulario.email.trim());
    enviado.value = true;
    toast.sucesso('Link de acesso enviado!', `Verifique a caixa de entrada de ${formulario.email}.`);
  } catch (e) {
    toast.erro('Não foi possível enviar', mensagemErroFirebase(e));
  } finally {
    enviando.value = false;
  }
}
</script>

<template>
  <section class="min-h-[80vh] grid lg:grid-cols-[1.05fr_1fr] bg-white">
    <div class="hidden lg:flex relative bg-gradient-primary text-white p-12 xl:p-16 flex-col justify-between overflow-hidden">
      <div class="absolute inset-0 grid-pattern opacity-15 mix-blend-overlay" aria-hidden="true" />
      <div class="relative">
        <p class="text-xs font-semibold tracking-[0.2em] uppercase text-white/75">Portal do paciente</p>
        <h1 class="font-heading text-4xl xl:text-5xl font-semibold mt-6 leading-tight text-balance">
          Acesso seguro, simples e sem senha.
        </h1>
        <p class="mt-6 text-white/85 leading-relaxed max-w-md">
          Informe seu e-mail e enviaremos um link mágico para você acompanhar consultas,
          agendamentos e dados do seu perfil.
        </p>
      </div>
      <ul class="relative space-y-3 mt-10 text-sm text-white/90">
        <li class="flex items-center gap-3"><span class="h-2 w-2 rounded-full bg-white" />Sem cadastro com senha</li>
        <li class="flex items-center gap-3"><span class="h-2 w-2 rounded-full bg-white" />Acesso por link seguro</li>
        <li class="flex items-center gap-3"><span class="h-2 w-2 rounded-full bg-white" />Agendamentos atualizados em tempo real</li>
      </ul>
    </div>

    <div class="flex items-center justify-center p-6 sm:p-12">
      <div class="w-full max-w-md">
        <h2 class="titulo-secao">Acesse com seu e-mail</h2>
        <p class="text-slate-500 mt-2">Enviaremos um link mágico para você entrar sem senha.</p>

        <div v-if="motivo === 'sessao'" class="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800" role="alert">
          Sua sessão expirou. Informe seu e-mail novamente para continuar.
        </div>

        <form v-if="!enviado" class="mt-8 space-y-5" novalidate @submit.prevent="enviar">
          <AppInput
            v-model="formulario.email"
            tipo="email"
            rotulo="Seu e-mail"
            placeholder="voce@email.com"
            autocomplete="email"
            obrigatorio
            :erro="erro"
            ajuda="Use o e-mail cadastrado na clínica."
          />
          <AppButton type="submit" :carregando="enviando" bloco-completo>
            Enviar link de acesso
          </AppButton>
        </form>

        <div v-else class="mt-8 cartao p-6 text-center animate-fade-in-up" role="status">
          <div class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary-100 text-secondary-700" aria-hidden="true">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z M22 6l-10 7L2 6" />
            </svg>
          </div>
          <h3 class="font-heading text-xl font-semibold mt-4">Confira seu e-mail</h3>
          <p class="text-sm text-slate-600 mt-2 leading-relaxed">
            Enviamos um link de acesso para <strong class="text-dark">{{ formulario.email }}</strong>.
          </p>
          <button type="button" class="btn-ghost mt-5" @click="enviado = false">
            Enviar novamente
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
