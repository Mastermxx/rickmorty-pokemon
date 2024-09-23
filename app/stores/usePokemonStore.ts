import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [], // List of Pokémon
    pokemonDetail: null, // Store Pokémon details
    currentPage: 1, // Pagination state
  }),
  actions: {
    async fetchPokemonList(page = 1) {
      const limit = 9;
      const offset = (page - 1) * limit;
      const response = await $fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      this.pokemonList = response.results;
      this.currentPage = page;
    },
    async fetchPokemonDetail(id) {
      const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.pokemonDetail = response;
    },
  },
});
