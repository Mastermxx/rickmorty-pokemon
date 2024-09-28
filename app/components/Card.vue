<script setup lang="ts">
import { computed } from 'vue'
import { useViewModeStore } from '../stores/useViewModeStore' // Assuming this store handles view mode

const props = defineProps({
  title: String,
  backgroundImage: String,
  onClick: Function,
})

// Get the current view mode from Pinia store
const viewModeStore = useViewModeStore()
const isListView = computed(() => viewModeStore.mode === 'list')

// Define the gradient background style for grid view
const charImage = props.backgroundImage
const gradientBackgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 51.91%, rgba(0, 0, 0, 0.3) 75.88%), url(${props.backgroundImage})`
</script>

<template>
  <div>
    <div v-if="isListView" class="card">
      <img :src="charImage" height="200" width="200">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <slot />
      </div>
    </div>

    <div v-else class="card" :style="{ backgroundImage: gradientBackgroundImage }" @click="onClick">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 16px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 340px;
  width: 270px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Mona Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.card-list .card {
  padding: 10px;
  width: 900px;
  height: 70px;
  background-color: #222;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
