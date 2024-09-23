import { defineStore } from 'pinia';

export const useRickAndMortyStore = defineStore('rickAndMorty', {
  state: () => ({
    characters: [], // List of characters
    characterDetail: null, // Store character details
    currentPage: 1, // Pagination state
  }),
  actions: {
    async fetchCharacterList(page = 1) {
      const response = await $fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      this.characters = response.results;
      this.currentPage = page;
    },
    async fetchCharacterDetail(id) {
      const response = await $fetch(`https://rickandmortyapi.com/api/character/${id}`);
      this.characterDetail = response;
    },
  },
});
