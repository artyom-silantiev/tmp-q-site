<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

console.log('Is server', process.env.SERVER);
console.log('Is client', process.env.CLIENT);

onMounted(() => {
  console.log('Hello, world!');
});
</script>
