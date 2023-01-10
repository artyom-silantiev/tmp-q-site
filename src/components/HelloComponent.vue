<script setup lang="ts">
import { onMounted } from 'vue-demi';

interface Props {
  name: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: 'User',
});

onMounted(() => {
  console.log('HelloComponent mounted!');
});
</script>

<template>
  <div>Hello, {{ name }}</div>
</template>
