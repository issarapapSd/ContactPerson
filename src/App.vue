<template>
  <div class="app">
    <Sidebar />
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const rows = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:700/api/items');
    rows.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss">
/* Your custom styles go here */
</style>
