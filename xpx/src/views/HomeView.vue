<template>
  <div>
    <div class="main">
      <h1>{{ name }} is in Home.</h1>
    </div>
    <div class="nav">
      <nav>
        <div>
          <RouterLink to="/navigator">Navigatie</RouterLink>
        </div>
        <div>
          <RouterLink to="/speeddating">Speeddating</RouterLink>
        </div>
        <div>
          <RouterLink to="/ar">A-Reality</RouterLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'Peter'
    }
  }
}
</script>

<style scoped></style>
