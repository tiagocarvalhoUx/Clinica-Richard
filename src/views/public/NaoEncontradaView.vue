<template>
  <section class="container-clinica py-24 text-center">
    <p class="eyebrow justify-center">Página não encontrada</p>
    <h1 class="titulo-hero mt-4">Não encontramos esse endereço</h1>
    <p class="subtitulo mx-auto mt-4 max-w-2xl">
      O link pode ter mudado ou expirado. Volte para a página inicial ou acesse o portal do paciente.
    </p>
    <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <router-link :to="{ name: 'home' }" class="btn-primary">Voltar ao início</router-link>
      <router-link :to="{ name: 'login' }" class="btn-outline">Acessar portal</router-link>
    </div>
  </section>
</template>
