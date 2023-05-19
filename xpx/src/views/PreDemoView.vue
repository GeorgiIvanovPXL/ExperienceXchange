<script setup lang="ts"></script>
<template>
  <div class="main">
    <div class="heading">
      <h3>
        Ga naar één van de aangewezen plekken in het lokaal staan en druk op play als je zover bent!
      </h3>
    </div>
    <div class="main_content">
      <div @click="redirect" class="btn_yellow_rounded_anim">Play</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push('/main/demo')
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
  padding-top: 48px;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
}
.heading {
  padding: 24px;
  background: #232323;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 8px;
  justify-content: center;
}
.heading p {
  font-size: 20px;
}
.heading h3 {
  font-size: 32px;
  font-weight: 500;
}

.main_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 24px 0px 24px;
}

.btn_yellow_rounded_anim {
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background: #d1ff31;
  position: relative;
  transition: 0.3s ease-out;
  z-index: 10;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  display: flex;
  align-items: center;
  color: #232323;
  font-weight: 600;
  font-size: 24px;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transition: 0.3s ease-out;
    transform: scale(0.8);
  }
}
.btn_yellow_rounded_anim::before {
  content: '';
  position: absolute;
  left: 50%;

  animation: pulsing_anim 1.6s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  top: 50%;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  opacity: 0.5;
  z-index: -1;

  background-color: #d1ff31;
  transform: translate(-50%, -50%);
}

@keyframes pulsing_anim {
  0% {
    opacity: 0;
    width: 148px;
    height: 148px;
  }
  25% {
    opacity: 0;
    width: 96px;
    height: 96px;
  }
  50% {
    opacity: 0.64;
  }
  100% {
    opacity: 0;
    width: 154px;
    height: 154px;
  }
}
</style>
