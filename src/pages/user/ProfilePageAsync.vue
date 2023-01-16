<script setup lang="ts">
import { usePageMeta } from 'src/lib/page_meta';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const $router = useRouter();

usePageMeta({
  title: 'Profile',
});

const authStore = useAuthStore();
const { user } = authStore.toRefs();

async function logout() {
  await authStore.logout();
  $router.push('/login');
}
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>Profile page</div>
    <div>User id: {{ user?.id }}</div>
    <div>User role: {{ user?.role }}</div>
    <div>
      <q-btn @click="logout">Logout</q-btn>
    </div>
  </q-page>
</template>
