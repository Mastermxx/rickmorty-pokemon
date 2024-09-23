<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

// Import store and composable
import { useRickAndMortyStore } from '../app/stores/useRickAndMortyStore';
import { useFetchData } from '../app/composables/useFetchData';
import { useViewModeStore } from '../app/stores/useViewModeStore';

// Import components
import Card from '../app/components/Card.vue';

const rickAndMortyStore = useRickAndMortyStore();
const viewModeStore = useViewModeStore();

const router = useRouter();

const { data, status, fetchData } = useFetchData(rickAndMortyStore.fetchCharacterList);

onMounted(() => {
  fetchData(rickAndMortyStore.currentPage);
});

// Pagination functions
const nextPage = () => {
  rickAndMortyStore.fetchCharacterList(rickAndMortyStore.currentPage + 1);
};

const prevPage = () => {
  if (rickAndMortyStore.currentPage > 1) {
    rickAndMortyStore.fetchCharacterList(rickAndMortyStore.currentPage - 1);
  }
};

const goToDetail = (characterId: number) => {
  router.push(`/rickandmorty/${characterId}`);
};
</script>

<template>
  <div class="data-container">
    <h1>Rick & Morty Characters</h1>

    <div v-if="status === 'pending'">Loading characters...</div>

    <button @click="viewModeStore.toggleMode">
      Toggle to {{ viewModeStore.mode === 'grid' ? 'List' : 'Grid' }} View
    </button>

    <div :class="viewModeStore.mode === 'grid' ? 'card-grid' : 'card-list'" v-if="status === 'success'">
      <Card v-for="character in rickAndMortyStore.characters" :key="character.id" :title="character.name"
        :backgroundImage="character.image" :onClick="() => goToDetail(character.id)" />
    </div>

    <div v-if="status === 'error'">Error loading characters</div>

    <div class="pagination">
      <button @click="prevPage" :disabled="rickAndMortyStore.currentPage === 1">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>
