<template>
  <div class="main_review_last">
    <div class="header_review_last">
      <h2>Heeft de AR-modus je geholpen met je studiekeuze?</h2>
    </div>
    <div class="sliders_container">
      <div class="slider_wrapper">
        <input class="slider" type="range" id="slider_1_last" />
      </div>
    </div>
    <div @click="redirect_back" class="btn_redirect_back">Indienen en terug</div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    redirect_back() {
      setTimeout(() => {
        this.$router.push('/main/navigator')
      }, 300)
    }
  }
}
</script>
<style lang="scss">
.main_review_last {
  padding: 24px 24px 160px 24px;
  color: #ffffff;
  min-height: 100dvh;
  min-height: 100%;
  gap: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  .header_review_last {
    h2 {
      font-size: 32px;
      font-weight: 500;
    }
  }

  .sliders_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 64px;
    .slider_wrapper {
      width: 100%;
      .slider {
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

      #slider_1_last {
        position: relative;
        z-index: 1;
        color: #ffffff;
        font-size: 16px;
      }

      #slider_1_last {
        &::before {
          content: 'Helemaal niet';

          position: absolute;
          z-index: 0;
          left: 0;
          top: -200%;
        }
        &::after {
          content: 'Zeker en vast';
          position: absolute;

          z-index: 0;
          right: 0;
          top: -200%;
        }
      }

      #slider_2 {
        &::before {
          content: 'Ingewikkeld';

          position: absolute;
          z-index: 0;
          left: 0;
          top: -200%;
        }
        &::after {
          content: 'Eenvoudig';
          position: absolute;

          z-index: 0;
          right: 0;
          top: -200%;
        }
      }

      #slider_3 {
        &::before {
          content: 'Stroef';

          position: absolute;
          z-index: 0;
          left: 0;
          top: -200%;
        }
        &::after {
          content: 'Vloeiend';
          position: absolute;

          z-index: 0;
          right: 0;
          top: -200%;
        }
      }

      #slider_4 {
        &::before {
          content: 'Onduidelijk';

          position: absolute;
          z-index: 0;
          left: 0;
          top: -200%;
        }
        &::after {
          content: 'Helder';
          position: absolute;

          z-index: 0;
          right: 0;
          top: -200%;
        }
      }
    }
  }

  .btn_redirect_back {
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
}
</style>
