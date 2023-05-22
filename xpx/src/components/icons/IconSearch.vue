<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_69_1203)">
      <path
        d="M19.6345 17.8713L15.7636 13.9987C18.66 10.128 17.8702 4.64219 13.9996 1.74576C10.129 -1.15068 4.64312 -0.360912 1.74669 3.50973C-1.14974 7.38038 -0.359982 12.8662 3.51066 15.7626C6.61989 18.0893 10.8903 18.0893 13.9996 15.7626L17.8722 19.6352C18.3588 20.1219 19.1479 20.1219 19.6345 19.6352C20.1211 19.1486 20.1211 18.3596 19.6345 17.8729L19.6345 17.8713ZM8.7874 15.0152C5.34736 15.0152 2.55868 12.2265 2.55868 8.78647C2.55868 5.34643 5.34736 2.55775 8.7874 2.55775C12.2274 2.55775 15.0161 5.34643 15.0161 8.78647C15.0125 12.225 12.2259 15.0115 8.7874 15.0152Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_69_1203">
        <rect width="20" height="20" fill="none" />
      </clipPath>
    </defs>
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
  },
  data() {
    return {}
  }
}
</script>
