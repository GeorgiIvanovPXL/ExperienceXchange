<template>
  <div class="main_ob">
    <div class="main_wrapper">
      <div class="absolute_art_f">
        <BgArtOnboarding />
      </div>
      <div class="heading">
        <p>Welkom bij</p>
        <h1>XPX</h1>
      </div>
      <p class="para">Ontdek de vernieuwde PXL-info experience.</p>
      <div class="btn_tertiary">
        <a href="/login">Ga verder</a>
        <div id="icon"><IconChevronRight size="32" color="#d1ff31" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

import { useRouter } from 'vue-router'
import BgArtOnboarding from '../components/BgArtOnboarding.vue'
import IconChevronRight from '../components/icons/IconChevronRight.vue'
const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault() // Prevent default form submission
  router.push('/main/navigator')
}
</script>

<style lang="scss" scoped>
.main_ob {
  color: white;
  width: 100%;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
  height: 100dvh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: center;
  .absolute_art_f {
    position: absolute;
    top: 16px;
    z-index: -1;
    right: 16px;
  }
}

.main_wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 340px;
}
.main_ob .heading {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.main_ob .heading p {
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}
.main_ob .heading h1 {
  color: white;
  font-size: 96px;
  font-weight: 600;
  line-height: 106px;
  margin: 0;
}
.para {
  font-size: 20px;
}
.btn_tertiary {
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  #icon {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    background: transparent;
    color: #d1ff31;

    margin: 0;
    padding: 0;
    z-index: 0;
    font-size: 24px;
  }
}

.btn_tertiary:active,
.btn_tertiary:hover {
  cursor: pointer;
  #icon {
    transition: 0.4s ease-out;
    transform: (translateX(10px));
  }
}
</style>

<style scoped></style>
