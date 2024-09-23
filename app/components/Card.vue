<template>
  <div class="card" @click="onClick" :style="{ backgroundImage: gradientBackgroundImage }">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  backgroundImage: String,
  onClick: Function,
});

// Apply a linear black gradient over the background image
const gradientBackgroundImage = `linear-gradient(rgba(0, 0, 0, 0) 51.91%, rgba(0, 0, 0, 0.3) 75.88%), url(${props.backgroundImage})`;
</script>

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
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
}
</style>
