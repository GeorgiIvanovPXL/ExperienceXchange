<template>
  <div class="main">
    <div class="flex-c-heading">
      <h5>Huidige locatie</h5>
      <h2>Digital village.</h2>
    </div>
    <div class="absolute_icon"><IconProfile size="24" color="#d1ff31" /></div>
    <div class="nav_header">
      <h1>Navigatie</h1>
      <div class="search_input">
        <input type="text" placeholder="Zoek op opleiding..." />
        <IconSearch size="20" color="#232323" />
      </div>
    </div>
    <div class="categories">
      <h3>Categorieën</h3>
      <div class="categories_container">
        <div class="category_item">
          <IconBusiness size="24" color="#d1ff31" />
          <div class="category_name"><p>Business</p></div>
        </div>
        <div class="category_item">
          <IconDigital size="24" color="#d1ff31" />
          <div class="category_name"><p>Digital</p></div>
        </div>
        <div class="category_item">
          <IconHealthcare size="24" color="#d1ff31" />
          <div class="category_name"><p>Healthcare</p></div>
        </div>
        <div class="category_item">
          <IconMusic size="24" color="#d1ff31" />
          <div class="category_name"><p>Music</p></div>
        </div>
        <div class="category_item">
          <IconSearch size="24" color="#d1ff31" />
          <div class="category_name"><p>Sports</p></div>
        </div>
      </div>
    </div>
    <div class="new_and_popular">
      <h3>Nieuw en populair</h3>
      <div class="absolute_art">
        <BgArt />
      </div>

      <div class="new_and_popular_container">
        <div class="popular_item">
          <div class="pupular_item_card">
            <p>Toegepaste psychologie.</p>
          </div>
        </div>
        <div class="popular_item">
          <p>Digitale Vormgeving</p>
        </div>
        <div class="popular_item"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconSearch from '../components/icons/IconSearch.vue'
import IconProfile from '../components/icons/IconProfile.vue'
import IconBusiness from '../components/icons/IconBusiness.vue'
import BgArt from '../components/BgArt.vue'
import IconDigital from '../components/icons/IconDigital.vue'
import IconHealthcare from '../components/icons/IconHealthcare.vue'
import IconMusic from '../components/icons/IconMusic.vue'
export default {
  components: {
    IconSearch,
    IconProfile,
    IconBusiness,
    BgArt,
    IconDigital,
    IconHealthcare,
    IconMusic
  },
  data() {
    return {
      name: 'Peter'
    }
  },
  mounted() {
    console.log(this.$route) // Access the $route object in the mounted hook or other component methods
  }
}
</script>

<style scoped>
.main {
  color: white;
  position: relative;
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 160px;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
}
.absolute_icon {
  position: absolute;
  top: 16px;
  right: 16px;
}

.flex-c-heading {
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
}

.flex-c-heading h5 {
  font-weight: 300;
  letter-spacing: 1px;
}
.flex-c-heading h2 {
  font-weight: 400;
  font-size: 18px;
}

.nav_header {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 0px 24px 0px 24px;
}

.nav_header h1 {
  font-weight: 500;
}
.search_input {
  width: 100%;
  background: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search_input input {
  width: 90%;
  background: transparent;
  border: none;
  outline: none;
}

.categories {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.categories h3 {
  font-weight: 400;
  padding: 0px 24px 0px 24px;
}

.categories_container {
  padding: 0px 24px 0px 24px;
  display: flex;
  min-width: 100%;
  gap: 16px;
  overflow: scroll;
  width: 100%;
}

.categories .category_item {
  background: #353535;
  padding-top: 24px;
  border-radius: 6px;
  max-width: 100px;
  min-width: 92px;
  min-height: 90px;
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
  width: 100%;
  background: #ffffff;
  border-radius: 0px 0px 6px 6px;
}

.categories .category_name p {
  color: #232323;
  font-weight: 500;
  line-height: 24px;
  font-size: 14px;
}

.new_and_popular {
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.absolute_art {
  position: absolute;
  z-index: -1;
  top: calc(60%);
}
.new_and_popular h3 {
  font-weight: 400;
  padding: 0px 24px 0px 24px;
}

.new_and_popular_container {
  padding: 0px 24px 0px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 100%;
  gap: 16px;
  overflow: scroll;
  width: 100%;
}

.categories_container::-webkit-scrollbar,
.new_and_popular_container::-webkit-scrollbar {
  display: none;
}
.categories_container,
.new_and_popular_container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.new_and_popular .popular_item {
  width: 190px;
  min-width: 190px;
  display: flex;
  align-items: flex-end;
  background: #d1ff31;
  height: 215px;
  border-radius: 8px;
}

.pupular_item_card {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 40%;
  height: fit-content;
  background: #ffffff;
  margin: 8px;
  padding: 8px;
  border-radius: 4px;
}
.pupular_item_card p {
  color: #232323;
  line-height: 18px;
  font-size: 15px;
  font-weight: 500;
}
</style>
