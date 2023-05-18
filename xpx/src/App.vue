<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  /* display: flex; */
  width: 100%;
  /* flex-direction: column;
  align-items: stretch;
  justify-content: flex-start; */
  min-height: 100dvh;
  background-color: #232323;
}
</style>
