<template>
  <div class="intro-container">
    <div class="video-wrapper">
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

      <button class="enter-btn" @click="goToPageF1">Розпочати тур</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  data() {
    return {
      introVideoSrc: null,
      loopVideoSrc: null,
    };
  },
  mounted() {
    // 🔹 Вибір відео залежно від ширини екрана
    if (window.innerWidth >= 1024 && window.innerHeight >= 600) {
      this.introVideoSrc = require("@/assets/video/intro1.mp4");
      this.loopVideoSrc = require("@/assets/video/intro2.mp4");
    } else {
      this.introVideoSrc = require("@/assets/video/intro1xx.mp4");
      this.loopVideoSrc = require("@/assets/video/intro2xx.mp4");
    }

    // 🔹 Блокування скролу
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", this.preventScroll, { passive: false });
    window.addEventListener("touchmove", this.preventScroll, { passive: false });

    // 🔹 Коли відео готове — запускаємо луп
    this.$nextTick(() => {
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
    });
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
    goToPageF1() {
      this.$router.push({ name: "PageF1" });
    },
  },
};
</script>

<style scoped>
.intro-container {
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(1.057) scaleY(1.075);
}

.intro {
  z-index: 2;
}

.loop {
  z-index: 1;
}

.enter-btn {
  position: absolute;
  right: 8%;
  bottom: 18%;
  z-index: 3;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #ffffff52;
  color: white;
  padding: 12px 36px;
  border-radius: 30px;
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 3s forwards 0.5s;
}

.enter-btn:hover {
  background: #ffffff8f;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .enter-btn {
    right: 15%;
    transform: translateX(50%);
    bottom: 22%;
  }
}
@media (min-height: 700px) {
  .video{
  transform: scaleY(1.2);
  }
}
@media (max-height: 600px && max-width: 1024px) {
  .video{
  transform: scaleY(1.0);
  }
}
</style>

















