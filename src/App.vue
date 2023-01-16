<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue';
import { useAuthStore } from './stores/auth';

if (process.env.SERVER) {
  console.log('is server');
} else {
  console.log('is client');
}

onBeforeMount(async () => {
  await useAuthStore().init();
  console.log('App onBeforeMount');
});
onMounted(() => {
  console.log('App onMounted');
});
</script>

<template>
  <router-view />
</template>
