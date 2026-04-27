<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import AppToaster from '@/components/ui/AppToaster.vue';

const auth = useAuthStore();

onMounted(async () => {
  await auth.inicializar();
});
</script>

<template>
  <div class="min-h-screen bg-light text-dark antialiased">
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppToaster />
  </div>
</template>
