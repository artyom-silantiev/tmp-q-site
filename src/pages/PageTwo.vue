<script lang="ts">
async function getRandomNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4 + Math.random());
    }, 500 + 500 * Math.random());
  });
}
</script>
<script setup lang="ts">
import { ref, onMounted, onBeforeMount, onUnmounted } from 'vue';
import { useMeta } from 'quasar';
import AsyncHelloComponent from '../components/AsyncHelloComponent.vue';

useMeta({
  title: 'Page Two',
});

const res = await Promise.all([getRandomNumber(), getRandomNumber()]);
const randomNumberOne = ref(res[0]);
const randomNumberTwo = ref(res[1]);

onBeforeMount(() => {
  console.log('Page Two', 'onBeforeMount');
});
onMounted(async () => {
  console.log('Page Two', 'onMounted');
});
onUnmounted(() => {
  console.log('Page Two', 'onUnmounted');
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>Is Page Two!</div>
    <div>Random number one (async data): {{ randomNumberOne }}</div>
    <div>Random number two (async data): {{ randomNumberTwo }}</div>
    <AsyncHelloComponent name="User" :sleep="3000" />
  </q-page>
</template>
