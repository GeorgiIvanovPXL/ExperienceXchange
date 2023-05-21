<template>
  <div class="loading-overlay">
    <!-- Add your loading spinner or animation here -->
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  }
}
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  height: calc(100vh - 72px);
  min-height: calc(100dvh - 72px);
  min-height: calc(100vh - 72px);
  background-color: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 3px solid #232323;
  border-top: 3px solid #d1ff31;
  border-left: 3px solid #d1ff31;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1.6s linear infinite;

  /* Add styles for your loading spinner or animation */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
