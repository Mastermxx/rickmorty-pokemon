<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const { data } = usePokemonData(`pokemon/${route.params.id}`);
</script>

<template>
  <div>
    <h1>Pokémon Details: {{ data?.name }}</h1>
  </div>
</template>

