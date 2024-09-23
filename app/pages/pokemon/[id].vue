<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { usePokemonStore } from '@/stores/usePokemonStore';

const route = useRoute();
const pokemonStore = usePokemonStore();

// Fetch Pokémon details when the component is mounted
onMounted(() => {
  pokemonStore.fetchPokemonDetail(route.params.id); // Fetch detail based on route param ID
});
</script>

<template>
  <div v-if="!pokemonStore.pokemonDetail">Loading Pokémon details...</div>
  <div v-else>
    <h1>{{ pokemonStore.pokemonDetail.name }}</h1>
    <p><strong>Base Experience:</strong> {{ pokemonStore.pokemonDetail.base_experience }}</p>
    <p><strong>Height:</strong> {{ pokemonStore.pokemonDetail.height }}</p>
    <p><strong>Weight:</strong> {{ pokemonStore.pokemonDetail.weight }}</p>
    <p><strong>Types:</strong>
      <span v-for="typeObj in pokemonStore.pokemonDetail.types" :key="typeObj.type.name">
        {{ typeObj.type.name }}
      </span>
    </p>
  </div>
</template>
