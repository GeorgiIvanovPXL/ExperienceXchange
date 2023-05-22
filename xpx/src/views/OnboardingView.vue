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
      <div @click="redirect_to_login" class="btn_tertiary">
        <p>Ga verder</p>
        <div id="icon"><IconChevronRight size="32" color="#d1ff31" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BgArtOnboarding from '../components/BgArtOnboarding.vue'
import IconChevronRight from '../components/icons/IconChevronRight.vue'

export default {
  components: {
    BgArtOnboarding,
    IconChevronRight
  },
  methods: {
    redirect_to_login() {
      setTimeout(() => {
        this.$router.push('/login')
      }, 300)
    }
  }
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
  transition: 0.3s ease-out;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  #icon {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    background: transparent;
    color: #d1ff31;

    margin: 0;
    padding: 0;
    z-index: 0;
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }
  &:active {
    transition: 0.3s ease-out;
    opacity: 0.4;
    // #icon {
    //   transition: 0.4s ease-out;
    //   transform: (translateX(10px));
    // }
  }
}
</style>

<style scoped></style>
