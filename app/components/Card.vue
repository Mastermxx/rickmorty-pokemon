<!-- components/Card.vue -->
<template>
      <div class="card" @click="handleClick" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="name">
            {{ name }}
        </div>
        <div class="name">
            {{ name }}
        </div>
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    name: string;
    backgroundImage?: string;
    onClick: () => void;
  }>();
  
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  </script>
  
  <style scoped>
  .card {
    /* border: 1px solid #ccc; */
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
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  