<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="nav_wrapper">
    <nav>
      <div class="link_wrapper">
        <p>{{ 'TODO: NacIcon' }}</p>
        <RouterLink to="/main/navigator">Navigatie</RouterLink>
      </div>
      <div class="link_wrapper">
        <p>{{ 'TODO: DatingIcon' }}</p>
        <RouterLink to="/main/speeddating">Speeddating</RouterLink>
      </div>
      <div class="link_wrapper">
        <p>{{ 'TODO: ArIcon' }}</p>
        <RouterLink to="/main/ar">A-Reality</RouterLink>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.nav_wrapper {
  border-top: 1px solid white;
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  position: sticky;
  top: calc(100%);
  left: 0;
  padding: 24px;

  align-items: center;
  justify-content: space-between;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.link_wrapper {
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.link_wrapper a {
  background: transparent;
  color: white;
  padding: 0;
}
</style>
