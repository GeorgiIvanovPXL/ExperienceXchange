<template>
  <div class="main">
    <div class="heading">
      <p>Hoera, je bent er!</p>
      <h3>Kies een ervaring</h3>
    </div>
    <div class="main_content">
      <div class="categories">
        <div class="category_item">
          <IconBusiness size="24" color="#d1ff31" />
          <div class="category_name"><p>Interaction Design</p></div>
        </div>
        <div class="category_item">
          <IconDigital size="24" color="#d1ff31" />
          <div class="category_name"><p>Werkplekleren</p></div>
        </div>
        <div class="category_item">
          <IconHealthcare size="24" color="#d1ff31" />
          <div class="category_name"><p>Graphic skills</p></div>
        </div>
        <div class="category_item">
          <IconMusic size="24" color="#d1ff31" />
          <div class="category_name"><p>...</p></div>
        </div>
      </div>

      <div @click="redirect" class="btn_yellow">Start demo</div>
    </div>
  </div>
</template>

<script lang="ts">
import IconBusiness from '../components/icons/IconBusiness.vue'
import IconHealthcare from '../components/icons/IconHealthcare.vue'
import IconMusic from '../components/icons/IconMusic.vue'
import IconDigital from '../components/icons/IconDigital.vue'
export default {
  components: {
    IconBusiness,
    IconHealthcare,
    IconMusic,
    IconDigital
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push('/main/pre-demo')
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
.categories {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.categories .category_item {
  background: #353535;
  padding-top: 32px;
  border-radius: 6px;
  opacity: 0.5;
  min-width: 92px;
  min-height: 120px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.categories .category_name {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  background: #ffffff;
  border-radius: 0px 0px 6px 6px;
}

.categories .category_name p {
  width: 100%;
  padding: 4px;
  text-align: center;
  color: #232323;
  font-weight: 500;
  line-height: 24px;
  font-size: 15px;
}

.btn_yellow {
  width: 100%;
  background: #d1ff31;
  border-radius: 8px;
  display: flex;
  font-weight: 600;
  transition: 0.3s ease-out;
  font-size: 24px;
  color: #232323;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  align-items: center;
  justify-content: center;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transition: 0.3s ease-out;
    transform: scale(0.8);
  }
}
</style>
