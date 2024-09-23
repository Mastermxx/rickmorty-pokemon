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
  <div class="py-8">
    <UContainer>
      <header class="border-b mb-8 py-2 text-xl">
        <h1>
          Welcome to the home page! Click an image to explore the API data.
        </h1>
      </header>
      
      <div class="grid gap-4 xl:grid-cols-2">
        <!-- Pokémon Section -->
        <div class="image-card" @click="goToPokemon">
          <div class="overlay">
            <h2 class="text-xl text-white">Explore Pokémon</h2>
          </div>
        </div>
        
        <!-- Rick & Morty Section -->
        <div class="image-card" @click="goToRickAndMorty">
          <div class="overlay">
            <h2 class="text-xl text-white">Explore Rick & Morty</h2>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.image-card {
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}

/* Pokémon background image */
.image-card:first-child {
  background-image: url('https://img.pokemondb.net/artwork/large/pikachu.jpg');
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
  padding: 20px;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

h2 {
  margin: 0;
}
</style>
