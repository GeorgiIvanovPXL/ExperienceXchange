<template>
  <div class="main_review">
    <div class="header_review">
      <h2>Vertel ons wat je van de AR ervaring vond?</h2>
    </div>
    <div class="sliders_container">
      <div class="slider_wrapper">
        <input class="slider" type="range" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.main_review {
  padding: 24px 24px 24px 24px;
  color: #ffffff;
  min-height: 100dvh;
  min-height: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .header_review {
    h2 {
      font-size: 32px;
      font-weight: 500;
    }
  }

  .sliders_container {
    width: 100%;
    .slider_wrapper {
      width: 100%;
      .slider {
        &:first-child {
          &::before {
            content: '';
          }
          &::after {
            content: '';
          }
        }
        width: 100%;
        -webkit-appearance: none;
        width: 100%;
        height: 16px;
        background: #f1f1f1;
        border-radius: 4px;
        outline: none;
        opacity: 1;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          background: #d1ff31;
          cursor: pointer;
        }

        &::-moz-range-thumb {
          width: 25px;
          border-radius: 50%;
          height: 25px;
          background: #d1ff31;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
