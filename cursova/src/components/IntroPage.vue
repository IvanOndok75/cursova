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
      introVideoSrc: require("@/assets/video/intro1xx.mp4"),
      loopVideoSrc: require("@/assets/video/intro2xx.mp4"),
    };
  },

  mounted() {
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", this.preventScroll, { passive: false });
    window.addEventListener("touchmove", this.preventScroll, { passive: false });

    const loop = this.$refs.loopVideo;
    setTimeout(() => {
      loop.currentTime = 0.01;
      loop.play();

      loop.addEventListener("timeupdate", () => {
        if (loop.duration - loop.currentTime < 0.15) {
          loop.currentTime = 0.01;
          loop.play();
        }
      });
    }, 2000);
  },

  beforeUnmount() {
    document.body.style.overflow = "";
    window.removeEventListener("wheel", this.preventScroll);
    window.removeEventListener("touchmove", this.preventScroll);
  },

  methods: {
    preventScroll(e) {
      e.preventDefault();
    },

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
  background: blue;
  position: relative;
}

.video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) scale(1.04) scaleY(1.055);
  object-fit: contain;
  background-color: black;
  clip-path: inset(0 1% 0 1%);
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











