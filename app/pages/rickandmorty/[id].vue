<script setup lang="ts">
import { useRickAndMortyStore } from '@/stores/useRickAndMortyStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const rickAndMortyStore = useRickAndMortyStore()

// Fetch Rick & Morty character details when the component is mounted
onMounted(() => {
  rickAndMortyStore.fetchCharacterDetail(route.params.id) // Fetch character details based on route param ID
})
</script>

<template>
  <div class="relative">
    <div
      class="relative rounded-3xl flex flex-col lg:flex-row items-center justify-between bg-white max-w-6xl mx-auto shadow-lg min-h-[600px]"
    >
      <!-- Left Section - Pokémon Overview -->
      <div class="rickandmorty-section lg:w-1/2 space-y-4 p-10 min-h-[600px]">
        <img src="/images/rickandmorty-logo.png" alt="Rick & Morty Logo" class="w-60">
        <h1 class="text-4xl font-bold text-gray-800">
          Chaos, comedy, and the multiverse collide!
        </h1>
        <p class="text-lg text-gray-600 max-is-4">
          Join the chaotic universe of Rick & Morty, where a mad scientist and his grandson embark on wild,
          dimension-hopping adventures. Dive into the bizarre and hilarious encounters with eccentric characters across
          the multiverse!
        </p>

        <NuxtLink to="/rickandmorty">
          <button class="m-0 mt-2 p-2 bg-gray-800 text-white rounded-lg">
            Rick & Morty Overview
          </button>
        </NuxtLink>
      </div>

      <!-- Right Section - Rick & Morty Details -->
      <div class="lg:w-1/2 space-y-4 p-10 bg-green-700 rounded-3xl min-h-[600px]">
        <div v-if="rickAndMortyStore.characterDetail">
          <!-- Render character image and details when available -->
          <img :src="rickAndMortyStore.characterDetail.image" :alt="rickAndMortyStore.characterDetail.name" class="w-60">
          <h1 class="text-4xl font-bold text-white">
            {{ rickAndMortyStore.characterDetail.name }}
          </h1>
          <p><strong>Status:</strong> {{ rickAndMortyStore.characterDetail.status }}</p>
          <p><strong>Species:</strong> {{ rickAndMortyStore.characterDetail.species }}</p>
          <p><strong>Origin:</strong> {{ rickAndMortyStore.characterDetail.origin.name }}</p>
        </div>

        <!-- Loading state -->
        <div v-else>
          Loading character details...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rickandmorty-section {
  background-image: url('/images/rickandmorty.jpg');
  background-size: cover;
  background-position-y: -10px;
  background-position-x: 170px;
  border-radius: 30px;
}
</style>
