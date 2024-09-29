<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData'
import { onMounted } from 'vue'

import { useRouter } from 'vue-router'

// Import store and composable
import { useRickAndMortyStore } from '@/stores/useRickAndMortyStore'
import { useViewModeStore } from '@/stores/useViewModeStore'

// Import components
import Card from '@/components/Card.vue'

const rickAndMortyStore = useRickAndMortyStore()
const viewModeStore = useViewModeStore()
const router = useRouter()

const { status, fetchData } = useFetchData(rickAndMortyStore.fetchCharacterList)

onMounted(() => {
  fetchData(rickAndMortyStore.currentPage)
})

// Pagination functions
function nextPage() {
  rickAndMortyStore.fetchCharacterList(rickAndMortyStore.currentPage + 1)
}

function prevPage() {
  if (rickAndMortyStore.currentPage > 1) {
    rickAndMortyStore.fetchCharacterList(rickAndMortyStore.currentPage - 1)
  }
}

function goToDetail(characterId: number) {
  router.push(`/rickandmorty/${characterId}`)
}
</script>

<template>
  <div class="relative">
    <div class="relative rounded-3xl flex flex-col items-center justify-between bg-white max-w-6xl mx-auto shadow-lg min-h-[600px] w-full p-10">
      <h1 class="text-4xl font-bold mb-8 text-gray-800">
        Rick & Morty Characters
      </h1>

      <!-- Loading State -->
      <div v-if="status === 'pending'" class="text-center text-gray-700">
        Loading characters...
      </div>

      <!-- Toggle Button -->
      <button class="mb-4 bg-gray-800 text-white px-4 py-2 rounded-lg" data-cy="view-toggle" @click="viewModeStore.toggleMode">
        Toggle to {{ viewModeStore.mode === 'grid' ? 'List' : 'Grid' }} View
      </button>

      <!-- Characters List/Grid -->
      <div v-if="status === 'success'" :class="viewModeStore.mode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'">
        <Card
          v-for="character in rickAndMortyStore.RickandMortycharacters"
          :key="character.id"
          :title="character.name"
          :background-image="character.image"
          @click="() => goToDetail(character.id)"
        />
      </div>

      <!-- Error State -->
      <div v-if="status === 'error'" class="text-center text-red-500 mt-4">
        Error loading characters
      </div>

      <!-- Pagination -->
      <div class="flex justify-center gap-4 mt-8">
        <button :disabled="rickAndMortyStore.currentPage === 1" class="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400" @click="prevPage">
          Previous
        </button>
        <button class="px-4 py-2 bg-gray-800 text-white rounded-lg" @click="nextPage">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<!-- No custom CSS as we are using Tailwind CSS utility classes -->
<style scoped>
.grid-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.grid-list .card {
  width: 100%;
  background-color: red;
  color: green;
  height: 40px;
}
</style>
