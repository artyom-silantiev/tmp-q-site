<script setup lang="ts">
import HelloComponent from '../components/HelloComponent.vue';
import { usePageMeta } from 'src/lib/page_meta';
import { api } from 'src/boot/axios';

const res = await api.get('/configs');
const config = res.data;

usePageMeta({
  title: 'Page One',
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>Is Page One!</div>
    <div>
      <HelloComponent name="User" />
    </div>
    <div>
      {{ config }}
    </div>
  </q-page>
</template>
