<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useToast } from '@/composables/useToast';
import { emailSalvoLocalmente, urlEhMagicLink } from '@/services/auth.service';
import { mensagemErroFirebase } from '@/services/firebase';

const auth = useAuthStore();
const router = useRouter();
const toast = useToast();

const status = ref<'verificando' | 'pedir_email' | 'erro'>('verificando');
const emailManual = ref('');
const erro = ref<string | null>(null);
const enviando = ref(false);

async function concluir(href: string, emailFallback?: string): Promise<void> {
  enviando.value = true;
  try {
    await auth.concluirMagicLink(href, emailFallback);
    toast.sucesso('Bem-vindo!', 'Acesso autorizado com sucesso.');
    router.replace({ name: 'portal-dashboard' });
  } catch (e) {
    erro.value = mensagemErroFirebase(e);
    status.value = 'erro';
  } finally {
    enviando.value = false;
  }
}

onMounted(async () => {
  const href = window.location.href;
  if (!urlEhMagicLink(href)) {
    status.value = 'erro';
    erro.value = 'Link inválido ou expirado. Solicite um novo acesso.';
    return;
  }
  const emailLocal = emailSalvoLocalmente();
  if (emailLocal) await concluir(href, emailLocal);
  else status.value = 'pedir_email';
});

async function confirmarManual(): Promise<void> {
  if (!/\S+@\S+\.\S+/.test(emailManual.value)) {
    erro.value = 'Informe o e-mail que recebeu o link.';
    return;
  }
  erro.value = null;
  await concluir(window.location.href, emailManual.value.trim());
}
</script>

<template>
  <section class="container-clinica py-24 flex items-center justify-center">
    <div class="w-full max-w-md text-center cartao p-8">
      <template v-if="status === 'verificando'">
        <AppSpinner tamanho="lg" />
        <h1 class="titulo-secao text-2xl mt-6">Confirmando seu acesso...</h1>
        <p class="text-sm text-slate-500 mt-2">
          Estamos validando o link mágico. Isso leva apenas um instante.
        </p>
      </template>

      <template v-else-if="status === 'pedir_email'">
        <h1 class="titulo-secao text-2xl">Confirme seu e-mail</h1>
        <p class="text-sm text-slate-500 mt-2">
          Por segurança, informe novamente o e-mail que recebeu o link.
        </p>
        <form class="mt-6 space-y-4 text-left" @submit.prevent="confirmarManual">
          <AppInput
            v-model="emailManual"
            tipo="email"
            rotulo="E-mail"
            placeholder="voce@email.com"
            autocomplete="email"
            obrigatorio
            :erro="erro"
          />
          <AppButton type="submit" :carregando="enviando" bloco-completo>
            Confirmar acesso
          </AppButton>
        </form>
      </template>

      <template v-else>
        <div class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-danger-100 text-danger-600" aria-hidden="true">
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="titulo-secao text-2xl mt-4">Não foi possível entrar</h1>
        <p class="text-sm text-slate-600 mt-2">{{ erro }}</p>
        <router-link :to="{ name: 'login' }" class="btn-primary mt-6 inline-flex">
          Solicitar novo link
        </router-link>
      </template>
    </div>
  </section>
</template>
