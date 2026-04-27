<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppTextarea from '@/components/ui/AppTextarea.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { enviarContato } from '@/services/contatos.service';
import { useToast } from '@/composables/useToast';
import { useWhatsApp } from '@/composables/useWhatsApp';
import { mensagemErroFirebase } from '@/services/firebase';

const toast = useToast();
const { gerarLink } = useWhatsApp();

const telefone = import.meta.env.VITE_CLINICA_TELEFONE || '+55 (11) 9999-9999';
const email = import.meta.env.VITE_CLINICA_EMAIL || 'contato@clinicadrrichard.com.br';
const endereco = import.meta.env.VITE_CLINICA_ENDERECO || 'Av. Saúde, 1000 — São Paulo, SP';

const formulario = reactive({
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
});

const erros = reactive({
  nome: '' as string | null,
  email: '' as string | null,
  mensagem: '' as string | null,
});

const enviando = ref(false);
const enviado = ref(false);

const linkWhats = computed(() =>
  gerarLink('Olá! Vim pelo site da Clínica Dr. Richard.'),
);

function validar(): boolean {
  erros.nome = formulario.nome.trim().length >= 2 ? null : 'Informe seu nome.';
  erros.email = /\S+@\S+\.\S+/.test(formulario.email)
    ? null
    : 'Informe um e-mail válido.';
  erros.mensagem =
    formulario.mensagem.trim().length >= 10
      ? null
      : 'Sua mensagem precisa ter ao menos 10 caracteres.';
  return !erros.nome && !erros.email && !erros.mensagem;
}

async function enviar(): Promise<void> {
  if (!validar()) return;
  enviando.value = true;
  try {
    await enviarContato({
      nome: formulario.nome.trim(),
      email: formulario.email.trim(),
      telefone: formulario.telefone.trim() || null,
      mensagem: formulario.mensagem.trim(),
    });
    toast.sucesso('Mensagem enviada!', 'Em breve nossa equipe entrará em contato.');
    formulario.nome = '';
    formulario.email = '';
    formulario.telefone = '';
    formulario.mensagem = '';
    enviado.value = true;
  } catch (e) {
    toast.erro('Não foi possível enviar', mensagemErroFirebase(e));
  } finally {
    enviando.value = false;
  }
}
</script>

<template>
  <section class="bg-gradient-hero">
    <div class="container-clinica py-16 lg:py-20 text-center">
      <span class="eyebrow">Fale com a clínica</span>
      <h1 class="titulo-hero mt-4 text-balance">Estamos aqui para ouvir você.</h1>
      <p class="subtitulo mt-5 max-w-2xl mx-auto">
        Tire dúvidas, agende uma consulta ou simplesmente diga oi. Respondemos em até
        um dia útil.
      </p>
    </div>
  </section>

  <section class="container-clinica py-16 lg:py-20">
    <div class="grid lg:grid-cols-[1fr_1.2fr] gap-10">
      <aside class="space-y-4">
        <a
          :href="`tel:${telefone}`"
          class="cartao p-5 flex items-start gap-4 hover:shadow-card transition-shadow"
        >
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-500"
            aria-hidden="true"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Telefone</p>
            <p class="font-medium text-dark">{{ telefone }}</p>
          </div>
        </a>

        <a
          :href="linkWhats"
          target="_blank"
          rel="noopener noreferrer"
          class="cartao p-5 flex items-start gap-4 hover:shadow-card transition-shadow"
        >
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary-50 text-secondary-600"
            aria-hidden="true"
          >
            <svg class="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
              <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">WhatsApp</p>
            <p class="font-medium text-dark">Atendimento rápido</p>
          </div>
        </a>

        <a
          :href="`mailto:${email}`"
          class="cartao p-5 flex items-start gap-4 hover:shadow-card transition-shadow"
        >
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-500"
            aria-hidden="true"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z M22 6l-10 7L2 6" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">E-mail</p>
            <p class="font-medium text-dark break-all">{{ email }}</p>
          </div>
        </a>

        <div class="cartao p-5 flex items-start gap-4">
          <span
            class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-500"
            aria-hidden="true"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Endereço</p>
            <p class="font-medium text-dark">{{ endereco }}</p>
            <p class="text-xs text-slate-500 mt-1">Seg–Sex 8h–20h · Sáb 8h–14h</p>
          </div>
        </div>

        <div class="cartao overflow-hidden">
          <iframe
            title="Mapa da clínica"
            class="w-full aspect-video"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`"
          />
        </div>
      </aside>

      <form class="cartao p-6 sm:p-8 space-y-5" novalidate @submit.prevent="enviar">
        <header>
          <h2 class="titulo-secao text-2xl">Envie uma mensagem</h2>
          <p class="text-sm text-slate-500 mt-1">
            Preencha o formulário abaixo e retornamos em até um dia útil.
          </p>
        </header>

        <div class="grid sm:grid-cols-2 gap-5">
          <AppInput
            v-model="formulario.nome"
            rotulo="Nome completo"
            placeholder="Seu nome"
            autocomplete="name"
            obrigatorio
            :erro="erros.nome"
          />
          <AppInput
            v-model="formulario.email"
            tipo="email"
            rotulo="E-mail"
            placeholder="voce@email.com"
            autocomplete="email"
            obrigatorio
            :erro="erros.email"
          />
        </div>

        <AppInput
          v-model="formulario.telefone"
          tipo="tel"
          rotulo="Telefone (opcional)"
          placeholder="(11) 99999-9999"
          autocomplete="tel"
        />

        <AppTextarea
          v-model="formulario.mensagem"
          rotulo="Mensagem"
          placeholder="Como podemos te ajudar?"
          :linhas="5"
          obrigatorio
          :erro="erros.mensagem"
        />

        <div class="flex items-center justify-between gap-4 pt-2">
          <p class="text-xs text-slate-500">
            Ao enviar, você concorda em ser contatado pela clínica para responder à sua
            solicitação.
          </p>
          <AppButton type="submit" :carregando="enviando">
            Enviar mensagem
          </AppButton>
        </div>

        <p v-if="enviado" class="text-sm text-secondary-700 bg-secondary-50 rounded-xl p-3">
          Recebemos sua mensagem com sucesso. Em breve entraremos em contato.
        </p>
      </form>
    </div>
  </section>
</template>
