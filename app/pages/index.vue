<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// Navigation functions
const goToPokemon = () => {
  router.push('/pokemon');
};

const goToRickAndMorty = () => {
  router.push('/rickandmorty');
};
</script>

<template>
  <div class="relative">
    <div
      class="relative rounded-3xl flex flex-col lg:flex-row items-center justify-between bg-white max-w-6xl mx-auto shadow-lg min-h-[600px]">
      <!-- Left Section - Pokémon -->
      <div class="pokemon-section lg:w-1/2 space-y-4 p-10 min-h-[600px]">
        <img src="/images/pokemon-logo.svg" alt="Pokémon Logo" class="w-40" />
        <h1 class="text-4xl font-bold text-gray-800">Gotta Catch 'Em All!</h1>
        <p class="text-lg text-gray-600">
          Step into the world of Pokémon, where you can explore and catch fascinating creatures with unique abilities.
          Discover your favorite Pokémon and embark on thrilling adventures across various regions!
        </p>

        <NuxtLink to="/pokemon">
          <button class="m-0 mt-2 bg-gray-800 text-white rounded-lg">
            Pokémon Overview
          </button>
        </NuxtLink>
      </div>

      <!-- Right Section - Rick & Morty -->
      <div class="lg:w-1/2 space-y-4 p-10 bg-green-700 rounded-3xl min-h-[600px]">
        <img src="/images/rickandmorty-logo.png" alt="Rick & Morty Logo" class="w-60" />
        <h1 class="text-4xl font-bold text-white">Chaos, comedy, and the multiverse collide!</h1>
        <p class="text-lg text-white">
          Join the chaotic universe of Rick & Morty, where a mad scientist and his grandson embark on wild,
          dimension-hopping adventures. Dive into the bizarre and hilarious encounters with eccentric characters across
          the multiverse!
        </p>
        <NuxtLink to="/rickandmorty">
          <button class="m-0 mt-2 bg-gray-800 text-white rounded-lg">
            Rick & Morty Overview
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Card Styles */
.image-card {
  width: 150px;
  height: 100px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
}

.image-card:hover {
  transform: scale(1.05);
}

/* Pokémon background image */
.pokemon-section {
  background-image: url('/images/nicholas-kole-pikachu2.jpeg');
  background-position-y: 50px;
  background-position-x: 50px;
  border-radius: 30px;
}

/* Rick & Morty background image */
.image-card:last-child {
  background-image: url('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

h2 {
  margin: 0;
}

/* Clip-path for the sliced green background */
.clip-slice {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  z-index: -1;
  clip-path: polygon(1157px -7px, 55% -10px, 45.00% 100%, 1165px 100%)
}

.clip-slice-reverse {
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
  z-index: -2;
}
</style>
