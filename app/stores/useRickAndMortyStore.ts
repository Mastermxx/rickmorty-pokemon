import { defineStore } from 'pinia'

interface RickandMortyListResponse {
  id: number
  name: string
  image: string
}

interface RickandMortyList {
  count: number
  next: string
  previous: string
  results: RickandMortyListResponse[]
}

interface RickandMortyDetail {
  id: number
  name: string
  status: number
  species: string
  image: string
  origin: {
    name: string
  }
}

interface RickandMortyState {
  RickandMortycharacters: RickandMortyListResponse[]
  RickandMortyDetail: RickandMortyDetail | null
  currentPage: number
}

export const useRickAndMortyStore = defineStore('rickAndMorty', {
  state: (): RickandMortyState => ({
    RickandMortycharacters: [], // List of characters
    RickandMortyDetail: null, // Store character details
    currentPage: 1, // Pagination state
  }),
  actions: {
    async fetchCharacterList(page = 1) {
      const response = await $fetch<RickandMortyList>(`https://rickandmortyapi.com/api/character?page=${page}`)
      this.RickandMortycharacters = response.results
      this.currentPage = page
    },
    async fetchCharacterDetail(id: string) {
      const response = await $fetch<RickandMortyDetail>(`https://rickandmortyapi.com/api/character/${id}`)
      this.RickandMortyDetail = response
    },
  },
})
