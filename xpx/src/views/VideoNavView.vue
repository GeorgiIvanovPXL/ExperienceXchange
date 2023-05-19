<template>
  <div class="main">
    <div class="header">
      <p>Navigating to Digital Village</p>
      <div id="nav_circle"></div>
    </div>
    <div class="video-container">
      <video id="video" ref="video" :src="videoSource" @ended="videoEnded" type="video/mp4"></video>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      videoSource: '/src/assets/videos/demo_9x16.mp4',
      isPlaying: false
    }
  },
  mounted() {
    this.loadVideo()
    // const video = document.getElementById('video')
    // video?.addEventListener('ended', this.videoEnded)
  },
  methods: {
    loadVideo() {
      const video = document.getElementById('video')
      video?.play()
    },
    videoEnded() {
      alert('Hoera, je bent er!')
      this.$router.push('/main/arrived')
    }
  }
}
</script>

<style scoped>
.main {
  color: white;
  position: relative;
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 48px;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px;
  background: #232323;
  display: flex;
  width: 100%;

  align-items: center;
  gap: 16px;
  justify-content: center;
}

.header #nav_circle {
  width: 17.5px;
  position: relative;
  height: 17.5px;
  background: #d1ff31;
  border-radius: 50%;
}

.header #nav_circle::before {
  content: '';
  position: absolute;
  background: #d1ff31;
  opacity: 0.5;
  width: 30px;
  animation: pulsing_anim 3s ease infinite;
  height: 30px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#video {
  width: 100%;
  height: 100%;
}

@keyframes pulsing_anim {
  0% {
    width: 30px;
    height: 30px;
  }
  50% {
    width: 10px;
    height: 10px;
  }
  100% {
    width: 30px;
    height: 30px;
  }
}
</style>
