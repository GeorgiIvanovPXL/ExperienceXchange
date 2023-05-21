<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4148 24.9426L12.5334 23.0573L19.5854 16L12.5334 8.94264L14.4201 7.05731L21.4668 14.1146C21.9667 14.6147 22.2475 15.2929 22.2475 16C22.2475 16.7071 21.9667 17.3852 21.4668 17.8853L14.4148 24.9426Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: [Number, String], // Accepts a number or a string value
      default: 18 // Default size if not provided
    },
    color: {
      type: String, // Accepts a string value
      default: '#000000' // Default color if not provided
    }
  }
}
// Props declaration
</script>
