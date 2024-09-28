<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useFetchData } from '../app/composables/useFetchData'
// Import store and composable
import { usePokemonStore } from '../app/stores/usePokemonStore'
import { useViewModeStore } from '../app/stores/useViewModeStore'

// Import components
import Card from '../app/components/Card.vue'

const pokemonStore = usePokemonStore()
const viewModeStore = useViewModeStore()
const router = useRouter()

const { status, fetchData } = useFetchData(pokemonStore.fetchPokemonList)

onMounted(() => {
  fetchData(pokemonStore.currentPage)
})

// Pagination functions
function nextPage() {
  pokemonStore.fetchPokemonList(pokemonStore.currentPage + 1)
}

function prevPage() {
  if (pokemonStore.currentPage > 1) {
    pokemonStore.fetchPokemonList(pokemonStore.currentPage - 1)
  }
}

function goToDetail(pokemonName: string) {
  router.push(`/pokemon/${pokemonName}`)
}

function getPokemonBackgroundUrl(pokemonName: string) {
  return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`
}
</script>

<template>
  <div class="relative">
    <div
      class="relative rounded-3xl flex flex-col items-center justify-between bg-white max-w-6xl mx-auto shadow-lg min-h-[600px] w-full p-10"
    >
      <h1 class="text-4xl font-bold mb-8 text-gray-800">
        Pokémon
      </h1>

      <!-- Loading State -->
      <div v-if="status === 'pending'" class="text-center text-gray-700">
        Loading characters...
      </div>

      <!-- Toggle Button -->
      <button
        class="mb-4 bg-gray-800 text-white px-4 py-2 rounded-lg" data-cy="view-toggle"
        @click="viewModeStore.toggleMode"
      >
        Toggle to {{ viewModeStore.mode === 'grid' ? 'List' : 'Grid' }} View
      </button>
      <!-- Pokémon Cards and Pagination Section -->
      <div class="w-full p-10">
        <div
          v-if="status === 'success'"
          :class="viewModeStore.mode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'"
        >
          <Card
            v-for="pokemon in pokemonStore.pokemonList" :key="pokemon.name" :title="pokemon.name"
            :background-image="getPokemonBackgroundUrl(pokemon.name)" @click="() => goToDetail(pokemon.name)"
          />
        </div>

        <div v-if="status === 'error'" class="text-center text-red-500">
          Error loading Pokémon
        </div>

        <div class="flex justify-center gap-4 mt-8">
          <button
            :disabled="pokemonStore.currentPage === 1"
            class="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400" @click="prevPage"
          >
            Previous
          </button>
          <button class="px-4 py-2 bg-gray-800 text-white rounded-lg" @click="nextPage">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
