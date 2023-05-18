<template>
  <div class="nav_wrapper">
    <nav>
      <div :class="{ active: isActive('/main/navigator') }" class="link_wrapper">
        <RouterLink to="/main/navigator">
          <IconNavigatorVue size="24" :color="getIconColor('/main/navigator')" />
          Navigatie
        </RouterLink>
      </div>
      <div :class="{ active: isActive('/main/speeddating') }" class="link_wrapper">
        <RouterLink to="/main/speeddating">
          <IconSpeedDatingVue size="24" :color="getIconColor('/main/speeddating')" />
          Speeddating
        </RouterLink>
      </div>
      <div :class="{ active: isActive('/main/ar') }" class="link_wrapper">
        <RouterLink to="/main/ar">
          <IconArVue size="24" :color="getIconColor('/main/ar')" />
          A-Reality
        </RouterLink>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import IconSpeedDatingVue from '../components/icons/IconSpeedDating.vue'
import IconNavigatorVue from '../components/icons/IconNavigator.vue'
import IconArVue from '../components/icons/IconAr.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const isActive = (routePath: string) => {
  const currentPath = useRoute().path
  return currentPath === routePath
}

const getIconColor = (routePath: string) => {
  return isActive(routePath) ? '#D1FF31' : 'white'
}
</script>

<style scoped>
.nav_wrapper {
  border-top: 1.5px solid white;
  background-color: #232323;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 16px 10px 16px;
  z-index: 1000;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  color: white;
  padding: 0;
}
.active {
  color: #d1ff31;
}
.active a {
  color: #d1ff31;
}
</style>
