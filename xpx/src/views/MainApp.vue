<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="nav">
    <nav>
      <div>
        <RouterLink to="/navigator">Navigatie</RouterLink>
      </div>
      <div>
        <RouterLink to="/speeddating">Speeddating</RouterLink>
      </div>
      <div>
        <RouterLink to="/ar">A-Reality</RouterLink>
      </div>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.nav {
  width: 100%;
  position: sticky;
  top: calc(100%);
  left: 0;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
}
nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
</style>
