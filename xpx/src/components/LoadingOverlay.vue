<template>
  <div class="loading-overlay">
    <!-- Add your loading spinner or animation here -->
    <div class="loader"></div>
  </div>
</template>

<script></script>

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
  border: 16px solid #f1f1f1;
  border-top: 16px solid #d1ff31;
  border-radius: 50%;

  /* Add styles for your loading spinner or animation */
}
</style>
