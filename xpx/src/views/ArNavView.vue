<script setup lang="ts">
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
</script>
<template>
  <div class="main">
    <div class="btn_tertiary">
      <IconChevronLeft size="20" color="#d1ff31" />
      <a href="/main/ar">Terug naar het overzicht</a>
    </div>
    <div class="main_content">
      <h2>Ga naar Digital Village om de AR ervaring te starten.</h2>

      <h3>Open de navigatie en volg de <span>gele lijn.</span></h3>

      <div class="btn_yellow">
        <a href="/main/video-nav">Open navigatie</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'Peter'
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  color: white;
  position: relative;
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  padding-top: 48px;
  padding-bottom: 160px;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
}
.main_content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.main_content h2 {
  font-weight: 500;
  font-size: 24px;
}

.main_content h3 {
  font-weight: 500;
  font-size: 24px;
}
.main_content span {
  color: #d1ff31;
}
.btn_tertiary {
  display: flex;
  gap: 8px;
  align-items: center;
  a {
    background: transparent;
    color: #d1ff31;
    margin: 0;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 4px;
    font-size: 16px;
  }
}

.btn_yellow {
  width: 100%;
  background: #d1ff31;
  display: flex;
  border-radius: 8px;
  a {
    width: 100%;
    font-weight: 600;
    font-size: 24px;
    background: transparent;
    text-align: center;
  }
}
</style>
