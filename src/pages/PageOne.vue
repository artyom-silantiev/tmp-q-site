<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
import AsyncPage from './PageOneAsync.vue';

const isError = ref(false);

onErrorCaptured((error) => {
  console.log('onErrorCaptured', error);
  isError.value = true;
});
</script>

<template>
  <div v-if="isError">Load error</div>
  <Suspense v-else>
    <AsyncPage />

    <template #fallback> Loading... </template>
  </Suspense>
</template>
