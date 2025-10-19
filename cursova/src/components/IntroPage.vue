<template>
  <div class="intro-container">
    <video
      ref="loopVideo"
      class="video loop"
      :src="loopVideoSrc"
      muted
      playsinline
      autoplay
    ></video>

    <video
      ref="introVideo"
      class="video intro"
      :src="introVideoSrc"
      autoplay
      muted
      playsinline
      @ended="handleIntroEnd"
    ></video>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  data() {
    return {
      introVideoSrc: require("@/assets/video/1intro.mp4"),
      loopVideoSrc: require("@/assets/video/2intro.mp4"),
    };
  },
  mounted() {
    const loop = this.$refs.loopVideo;
    // Починаємо фонове відео із затримкою 2с
    setTimeout(() => {
      loop.currentTime = 0.01;
      loop.play();

      // Коли відео майже закінчується — перемотуємо на початок
      loop.addEventListener("timeupdate", () => {
        if (loop.duration - loop.currentTime < 0.15) {
          loop.currentTime = 0.01;
          loop.play();
        }
      });
    }, 2000);
  },
  methods: {
    handleIntroEnd() {
      const intro = this.$refs.introVideo;
      intro.style.transition = "opacity 0.2s linear";
      intro.style.opacity = "0";
      setTimeout(() => {
        intro.pause();
        intro.remove();
      }, 200);
    },
  },
};
</script>

<style scoped>
.intro-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black;
  position: relative;
}

.video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  background-color: black;
}

.intro {
  z-index: 2;
  opacity: 1;
}

.loop {
  z-index: 1;
  opacity: 1;
}
</style>










