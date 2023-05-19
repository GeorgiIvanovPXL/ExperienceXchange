<template>
  <div class="main">
    <div class="btn_tertiary">
      <IconChevronLeft size="20" color="#d1ff31" />
      <a href="/main/ar">Terug naar het overzicht</a>
    </div>
    <div class="main_content">
      <h2>Ga naar Digital Village om de AR ervaring te starten.</h2>

      <h3>Open de navigatie en volg de <span>gele lijn.</span></h3>

      <div @click="redirect" class="btn_yellow">Open navigatie</div>
    </div>
  </div>
</template>

<script lang="ts">
import IconChevronLeft from '../components/icons/IconChevronLeft.vue'
export default {
  components: {
    IconChevronLeft
  },
  data() {
    return {
      name: 'Peter'
    }
  },
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push('/video-nav')
      }, 300)
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
  transition: 0.3s ease-out;
  border-radius: 8px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  font-weight: 600;
  color: #232323;
  padding: 8px;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #d2ff31d5;
    transition: 0.3s ease-out;
    transform: scale(0.8);
  }
}
</style>
