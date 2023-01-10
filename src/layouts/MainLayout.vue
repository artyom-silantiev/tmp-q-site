<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item to="/">
          <q-item-label>Index</q-item-label>
        </q-item>
        <q-item to="/one">
          <q-item-label>Page One</q-item-label>
        </q-item>
        <q-item to="/two">
          <q-item-label>Page Two</q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <Suspense>
        <router-view />

        <template #fallback>
          <div class="row items-center">Loading...</div>
        </template>
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
