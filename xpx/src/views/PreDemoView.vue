<script setup lang="ts">
import IconBusiness from '@/components/icons/IconBusiness.vue'
import IconHealthcare from '@/components/icons/IconHealthcare.vue'
import IconMusic from '@/components/icons/IconMusic.vue'
import IconDigital from '@/components/icons/IconDigital.vue'
</script>
<template>
  <div class="main">
    <div class="heading">
      <h3>
        Ga naar één van de aangewezen plekken in het lokaal staan, druk op play als je zover bent!
      </h3>
    </div>
    <div class="main_content">
      <div class="btn_yellow_rounded_anim">
        <a href="/main/pre-demo">Play</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
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
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn_yellow_rounded_anim::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 136px;
  height: 136px;
  border-radius: 50%;
  opacity: 0.5;
  z-index: -1;

  background-color: #d1ff31;
  transform: translate(-50%, -50%);
}
.btn_yellow_rounded_anim a {
  width: 100%;
  font-weight: 600;
  font-size: 24px;
  background: transparent;
  text-align: center;
}
</style>
