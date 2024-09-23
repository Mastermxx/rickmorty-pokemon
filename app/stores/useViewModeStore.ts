import { defineStore } from 'pinia';

export const useViewModeStore = defineStore('viewMode', {
  state: () => ({
    mode: 'grid'
  }),
  actions: {
    toggleMode() {
      this.mode = this.mode === 'grid' ? 'list' : 'grid';
    }
  }
});
