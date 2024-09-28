import { defineStore } from 'pinia'

interface PokemonListResponse {
  name: string
  url: string
}

interface PokemonList {
  count: number
  next: string
  previous: string
  results: PokemonListResponse[]
}

interface PokemonType {
  type: {
    name: string
  }
}

interface PokemonDetail {
  name: string
  height: number
  weight: number
  base_experience: number
  types: PokemonType[]
}

interface PokemonState {
  pokemonList: PokemonListResponse[]
  pokemonDetail: PokemonDetail | null
  currentPage: number
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): PokemonState => ({
    pokemonList: [], // List of Pokémon
    pokemonDetail: null, // Store Pokémon details
    currentPage: 1, // Pagination state
  }),
  actions: {
    async fetchPokemonList(page = 1) {
      const limit = 9
      const offset = (page - 1) * limit
      const response = await $fetch<PokemonList>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      this.pokemonList = response.results
      this.currentPage = page
    },
    async fetchPokemonDetail(id: string) {
      const response = await $fetch<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      this.pokemonDetail = response
    },
  },
})
