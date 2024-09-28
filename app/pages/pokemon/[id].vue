<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemonStore } from '../app/stores/usePokemonStore'

const route = useRoute()
const pokemonStore = usePokemonStore()

// Fetch Pokémon details when the component is mounted
onMounted(() => {
  pokemonStore.fetchPokemonDetail(route.params.id)
})

// Function to get Pokémon image URL
function getPokemonBackgroundUrl(pokemonName: string) {
  return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`
}
</script>

<template>
  <div class="relative">
    <div
      class="relative rounded-3xl flex flex-col lg:flex-row items-center justify-between bg-white max-w-6xl mx-auto shadow-lg min-h-[600px]"
    >
      <!-- Left Section - Pokémon Overview -->
      <div class="pokemon-section lg:w-1/2 space-y-4 p-10 min-h-[600px]">
        <img src="/images/pokemon-logo.svg" alt="Pokémon Logo" class="w-40">
        <h1 class="text-4xl font-bold text-gray-800">
          Gotta Catch 'Em All!
        </h1>
        <p class="text-lg text-gray-600">
          Step into the world of Pokémon, where you can explore and catch fascinating creatures with unique abilities.
        </p>

        <NuxtLink to="/pokemon">
          <button class="m-0 mt-2 p-2 bg-gray-800 text-white rounded-lg">
            Pokémon Overview
          </button>
        </NuxtLink>
      </div>

      <!-- Right Section - Pokémon Details -->
      <div class="lg:w-1/2 space-y-4 p-10 bg-green-700 rounded-3xl min-h-[600px]">
        <!-- Add v-if to check for data availability -->
        <div v-if="pokemonStore.pokemonDetail">
          <img
            :src="getPokemonBackgroundUrl(pokemonStore.pokemonDetail.name)"
            alt="Pokémon Image"
            class="w-60"
          >
          <h1 class="text-4xl font-bold text-white">
            {{ pokemonStore.pokemonDetail.name }}
          </h1>

          <div class="text-2xl font-bold text-gray-800">
            <p><strong>Base Experience:</strong> {{ pokemonStore.pokemonDetail.base_experience }}</p>
            <p><strong>Height:</strong> {{ pokemonStore.pokemonDetail.height }}</p>
            <p><strong>Weight:</strong> {{ pokemonStore.pokemonDetail.weight }}</p>
            <p>
              <strong>Types: </strong>
              <span v-for="typeObj in pokemonStore.pokemonDetail.types" :key="typeObj.type.name">
                {{ typeObj.type.name }}
              </span>
            </p>
          </div>
        </div>

        <div v-else>
          Loading Pokémon details...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-section {
  background-image: url('/images/nicholas-kole-pikachu2.jpeg');
  background-position-y: 50px;
  background-position-x: 50px;
  border-radius: 30px;
}
</style>
