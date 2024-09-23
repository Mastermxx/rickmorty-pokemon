<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

// Import store and composable
import { usePokemonStore } from '../app/stores/usePokemonStore';
import { useFetchData } from '../app/composables/useFetchData';

// Import components
import Card from '../app/components/Card.vue';

const pokemonStore = usePokemonStore();
const router = useRouter();

const { data, status, fetchData } = useFetchData(pokemonStore.fetchPokemonList);

onMounted(() => {
  fetchData(); 
});

// Pagination functions
const nextPage = () => {
  pokemonStore.fetchPokemonList(pokemonStore.currentPage + 1);
};

const prevPage = () => {
  if (pokemonStore.currentPage > 1) {
    pokemonStore.fetchPokemonList(pokemonStore.currentPage - 1);
  }
};

const goToDetail = (pokemonName: string) => {
  router.push(`/pokemon/${pokemonName}`);
};

const getPokemonBackgroundUrl = (pokemonName: string) => {
  return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
};
</script>

<template>
  <div class="data-container">
    <h1>Pokémon</h1>

    <div v-if="status === 'pending'">Loading Pokémon...</div>

    <div v-if="status === 'success'" class="card-grid">
      <Card
        v-for="pokemon in pokemonStore.pokemonList"
        :key="pokemon.name"
        :title="pokemon.name"
        :backgroundImage="getPokemonBackgroundUrl(pokemon.name)"
        :onClick="() => goToDetail(pokemon.name)"
      />
    </div>

    <div v-if="status === 'error'">Error loading Pokémon</div>

    <div class="pagination">
      <button @click="prevPage" :disabled="pokemonStore.currentPage === 1">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<style>
.data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 40px;
}
.card-grid {
  max-width: 900px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}
</style>
