<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue';

if (process.env.SERVER) {
  console.log('is server');
} else {
  console.log('is client');
}

onBeforeMount(() => {
  console.log('App onBeforeMount');
});
onMounted(() => {
  console.log('App onMounted');
});
</script>

<template>
  <router-view />
</template>
