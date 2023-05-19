<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 102 194"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M91.97 36.6557H77.4294V51.2001H91.97V36.6557Z"
      fill="white"
      stroke="white"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M57.3291 70.2899H42.7887V84.8342H57.3291V70.2899Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M57.3291 100.087H42.7887V114.632H57.3291V100.087Z"
      fill="white"
      stroke="white"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M57.3291 129.884H42.7887V144.429H57.3291V129.884Z"
      fill="#D1FF31"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M91.97 10.6953H77.4294V25.2397H91.97V10.6953Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M91.97 100.087H77.4294V114.632H91.97V100.087Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M91.97 129.884H77.4294V144.429H91.97V129.884Z"
      stroke="white"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M89.9987 159.682H79.401V170.282H89.9987V159.682Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M89.9987 181.399H79.401V192H89.9987V181.399Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M12.5977 9.95113H2V20.5517H12.5977V9.95113Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M12.5977 31.6687H2V42.2693H12.5977V31.6687Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path
      d="M12.5977 53.3864H2V63.9871H12.5977V53.3864Z"
      stroke="#D1FF31"
      stroke-width="3.0871"
      stroke-miterlimit="10"
    />
    <path d="M102 0H95.0657V6.93595H102V0Z" fill="#D1FF31" />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: [Number, String], // Accepts a number or a string value
      default: 100 // Default size if not provided
    },
    height: {
      type: [Number, String], // Accepts a number or a string value
      default: 192 // Default size if not provided
    }
  },

  data() {
    return {}
  },
  methods: {
    handleSubmit(event: Event) {
      event.preventDefault() // Prevent default form submission
      setTimeout(() => {
        this.$router.push('/main/navigator') // Navigate to the Dashboard route
      }, 300)
    }
  }
}

// Props declaration
</script>
