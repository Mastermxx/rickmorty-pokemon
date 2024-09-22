<script setup lang="ts">

  import { useRouter } from 'vue-router';

  const { data, status } = usePokemonData('pokemon?limit=9');
  const router = useRouter();

  const goToDetail = (pokemonName: string) => {
    router.push(`/pokemon/${pokemonName}`);
  };

  // Function to get the Pokémon image URL
  const getPokemonBackgroundUrl = (pokemonName: string) => {
    return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
  };

</script>

<template>
  <div class="data-container">
    <h1>Pokémon</h1>

    <!-- When waiting on the data show loading -->
    <div v-if="status === 'pending'">Loading Pokémon...</div>

    <div v-if="data" class="card-grid">
      <Card
        v-for="pokemon in data.results"
        :key="pokemon.name"
        :title="pokemon.name"
        :backgroundImage="getPokemonBackgroundUrl(pokemon.name)"
        :onClick="() => goToDetail(pokemon.name)"
      >
        <p>{{ pokemon.name }}</p>
      </Card>
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
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 13px;
}
.card-grid {
  max-width: 900px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
</style>
