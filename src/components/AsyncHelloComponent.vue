<script setup lang="ts">
import { onMounted } from 'vue-demi';

interface Props {
  name: string;
  sleep?: number;
}
const props = withDefaults(defineProps<Props>(), {
  name: 'User',
  number: 1000,
});

await new Promise((resolve) => {
  setTimeout(() => {
    resolve(props.name);
  }, props.sleep);
});

onMounted(() => {
  console.log('AsyncHelloComponent mounted!');
});
</script>

<template>
  <div>Hello, {{ name }}</div>
</template>
