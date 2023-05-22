<template>
  <div class="main">
    <div class="main_heading">
      <h1>Transporteer jezelf naar een echte les</h1>
    </div>

    <div class="categories">
      <h2>Kies een departement</h2>
      <div class="categories_container">
        <div @click="redirect" class="category_item">
          <IconBusiness size="24" color="#d1ff31" />
          <div class="category_name"><p>Business</p></div>
        </div>
        <div @click="redirect" class="category_item">
          <IconDigital size="24" color="#d1ff31" />
          <div class="category_name"><p>Digital</p></div>
        </div>
        <div @click="redirect" class="category_item">
          <IconHealthcare size="24" color="#d1ff31" />
          <div class="category_name"><p>Healthcare</p></div>
        </div>
        <div @click="redirect" class="category_item">
          <IconMusic size="24" color="#d1ff31" />
          <div class="category_name"><p>Music</p></div>
        </div>
        <div @click="redirect" class="category_item">
          <IconSearch size="24" color="#d1ff31" />
          <div class="category_name"><p>Sports</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconBusiness from '../components/icons/IconBusiness.vue'
import IconDigital from '../components/icons/IconDigital.vue'
import IconHealthcare from '../components/icons/IconHealthcare.vue'
import IconMusic from '../components/icons/IconMusic.vue'
import IconSearch from '../components/icons/IconSearch.vue'

export default {
  components: {
    IconBusiness,
    IconDigital,
    IconHealthcare,
    IconMusic,
    IconSearch
  },
  data() {
    return {
      name: 'Peter'
    }
  },
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push('/main/ar-nav')
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
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 160px;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
}
.main_heading {
  width: 100%;
  padding-left: 24px;
}
.main_heading h1 {
  font-size: 40px;
  line-height: 49px;
  font-weight: 500;
}

.categories_container {
  padding: 0px 24px 0px 24px;
  display: flex;
  overflow: scroll;
  flex-wrap: wrap;
  min-width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

.categories {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h2 {
    font-weight: 400;
    padding: 0px 24px 0px 24px;
  }

  .category_item {
    background: #353535;
    padding-top: 24px;
    border-radius: 6px;
    /* max-width: 100px; */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    min-width: 92px;
    min-height: 100px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transition: 0.3s ease-out;
      opacity: 0.32;
    }
  }

  .category_name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #ffffff;
    border-radius: 0px 0px 6px 6px;
  }
}

.categories_container::-webkit-scrollbar {
  display: none;
}
.categories_container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.categories .category_name p {
  margin: 0;
  width: 100%;
  padding: 0;
  text-align: center;
  background: transparent;
  color: #232323;
  font-weight: 500;
  line-height: 24px;
  font-size: 15px;
}

.categories .category_item svg {
  transition: 0.3s ease
}

.categories .category_item:hover svg {
  transform: scale(1.3);
}
</style>
