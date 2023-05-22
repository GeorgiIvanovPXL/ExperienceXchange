<template>
  <div class="main_review">
    <div class="header_review">
      <h2>Vertel ons wat je van de AR ervaring vond?</h2>
    </div>
    <div class="sliders_container">
      <div class="slider_wrapper">
        <input class="slider" type="range" id="slider_1" />
      </div>
      <div class="slider_wrapper">
        <input class="slider" type="range" id="slider_2" />
      </div>
      <div class="slider_wrapper">
        <input class="slider" type="range" id="slider_3" />
      </div>
      <div class="slider_wrapper">
        <input class="slider" type="range" id="slider_4" />
      </div>
    </div>
    <div @click="redirect_to_last" class="btn_next_review">Volgende</div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    redirect_to_last() {
      setTimeout(() => {
        this.$router.push('/main/review_last')
      }, 300)
    }
  }
}
</script>
<style lang="scss">
.main_review {
  padding: 24px 24px 160px 24px;
  color: #ffffff;
  min-height: 100dvh;
  min-height: 100%;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

      #slider_1,
      #slider_2,
      #slider_3,
      #slider_4 {
        position: relative;
        z-index: 1;
        color: #ffffff;
        font-size: 16px;
      }

      #slider_1 {
        &::before {
          content: 'Geen meerwaarde';

          position: absolute;
          z-index: 0;
          left: 0;
          top: -200%;
        }
        &::after {
          content: 'Interessant';
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

  .btn_next_review {
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
