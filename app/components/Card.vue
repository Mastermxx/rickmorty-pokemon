<script setup lang="ts">
import { useViewModeStore } from '@/stores/useViewModeStore'
import { computed } from 'vue'

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
    <!-- Conditional class binding based on isListView -->
    <div :class="{ 'card-list': isListView, 'card-grid': !isListView }">
      <!-- List View -->
      <div v-if="isListView" class="card-list-item card" @click="onClick">
        <img :src="charImage" height="50" width="50">
        <div class="card-content">
          <h3>{{ title }}</h3>
          <slot />
        </div>
      </div>

      <!-- Grid View -->
      <div v-else class="card" :style="{ backgroundImage: gradientBackgroundImage }" @click="onClick">
        <div class="card-content">
          <h3>{{ title }}</h3>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* General card styles */
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

/* List view specific styling */
.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-list-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  width: 900px;
  height: 70px;
  background-color: #222;
  gap: 20px;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

/* Grid view specific styling */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
