<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_141_195)">
      <path
        d="M12.0308 18L4.90055 10.86C4.40995 10.3671 4.13452 9.69995 4.13452 9.0045C4.13452 8.30905 4.40995 7.64191 4.90055 7.149L12.039 0L13.6275 1.59075L6.48905 8.739C6.41875 8.80932 6.37925 8.90469 6.37925 9.00412C6.37925 9.10356 6.41875 9.19893 6.48905 9.26925L13.6185 16.4093L12.0308 18Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_141_195">
        <rect width="18" height="18" fill="none" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
// Props declaration
defineProps({
  size: {
    type: [Number, String], // Accepts a number or a string value
    default: 18 // Default size if not provided
  },
  color: {
    type: String, // Accepts a string value
    default: '#000000' // Default color if not provided
  }
})
</script>
