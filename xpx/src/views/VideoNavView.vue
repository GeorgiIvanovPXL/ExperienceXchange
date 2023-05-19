<template>
  <div class="main">
    <div class="header">
      <p>Navigating to Digital Village</p>
      <div id="nav_circle"></div>
    </div>
    <LoadingOverlay v-if="loaded" />
    <video id="video" ref="video" :src="videoSource" @ended="videoEnded" type="video/mp4"></video>
  </div>
</template>

<script lang="ts">
import LoadingOverlay from '@/components/LoadingOverlay.vue'

export default {
  data() {
    return {
      videoSource: '/src/assets/videos/demo_9x16.mp4',
      loaded: false,
      loadingVideo: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadVideo()
    }, 2000)

    // const video = document.getElementById('video')
    // video?.addEventListener('ended', this.videoEnded)
  },
  methods: {
    loadVideo() {
      this.loaded = true
      setTimeout(() => {
        const video = document.getElementById('video')
        video?.play()
      }, 200)
    },
    videoEnded() {
      alert('Hoera, je bent er!')
      this.$router.push('/main/arrived')
    }
  },

  components: { LoadingOverlay }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  color: white;
  background: #232323;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  // position: fixed;
  // top: 0;
  // left: 0;
  padding: 24px;
  min-height: 72px;
  background: #232323;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  justify-content: center;
}

.header #nav_circle {
  width: 16px;
  position: relative;
  height: 16px;
  background: #d1ff31;
  border-radius: 50%;
}

.header #nav_circle::before {
  content: '';
  position: absolute;
  background: #d1ff31;
  opacity: 0.5;
  width: 30px;
  animation: pulsing_anim 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
  height: 30px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#video {
  background-color: #232323;
  width: auto;
  height: calc(100vh - 72px);
  min-height: calc(100dvh - 72px);
  min-height: calc(100vh - 72px);
}

@keyframes pulsing_anim {
  0% {
    opacity: 0;
    width: 32px;
    height: 32px;
  }
  25% {
    opacity: 0;
    width: 8px;
    height: 8px;
  }
  50% {
    opacity: 0.64;
  }
  100% {
    opacity: 0;
    width: 32px;
    height: 32px;
  }
}
</style>
