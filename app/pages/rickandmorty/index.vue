<script setup lang="ts">

import { useRouter } from 'vue-router';

const { data, status } = useRickAndMortyData('character');
const router = useRouter();

const goToDetail = (characterId: number) => {
  router.push(`/rickandmorty/${characterId}`);
};
</script>

<template>
  <div class="data-container">
    <h1>Rick & Morty Characters</h1>

  <!-- When waiting on the data show loading -->
  <div v-if="status === 'pending'">Loading Rick & Morty Characters...</div>

    <!-- Ensure data exists before rendering -->
    <div v-if="data" class="card-grid">
      <Card
        v-for="character in data.results"
        :key="character.id"
        :title="character.name"
        :backgroundImage="character.image"
        @click="() => goToDetail(character.id)"
      >
        <p>{{ character.species }}</p>
        <p>{{ character.status }}</p>
      </Card>
    </div>
  </div>
</template>

