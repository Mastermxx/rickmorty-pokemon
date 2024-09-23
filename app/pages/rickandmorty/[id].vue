<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useRickAndMortyStore } from '@/stores/useRickAndMortyStore';

const route = useRoute();
const rickAndMortyStore = useRickAndMortyStore();

// Fetch character details when the component is mounted
onMounted(() => {
  rickAndMortyStore.fetchCharacterDetail(route.params.id); // Fetch character based on route param ID
});
</script>

<template>
  <div v-if="!rickAndMortyStore.characterDetail">Loading character details...</div>
  <div v-else>
    <h1>{{ rickAndMortyStore.characterDetail.name }}</h1>
    <p><strong>Status:</strong> {{ rickAndMortyStore.characterDetail.status }}</p>
    <p><strong>Species:</strong> {{ rickAndMortyStore.characterDetail.species }}</p>
    <p><strong>Origin:</strong> {{ rickAndMortyStore.characterDetail.origin.name }}</p>
    <img :src="rickAndMortyStore.characterDetail.image" :alt="rickAndMortyStore.characterDetail.name" />
  </div>
</template>
