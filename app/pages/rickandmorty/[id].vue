<script setup lang="ts">

  import { useRoute } from 'vue-router';

  const route = useRoute();
  const { data, status, error } = useRickAndMortyData(`character/${route.params.id}`);

</script>

<template>

  <!-- When waiting on the data show loading -->
  <div v-if="status === 'pending'">Loading Rick & Morty Characters...</div>

  <div v-if="data">
    <h1>{{ data.name }}</h1>
  </div>
  
</template>
