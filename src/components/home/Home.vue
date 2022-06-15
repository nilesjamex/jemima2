<template>
  <div ref="cover" v-if="$store.state.showCover" class="cover1">
    <h4>{{ counter }}%</h4>
    <div class="cover1--text">
      <h3>I'm More Than You See</h3>
      <p>- Jemima Osunde</p>
    </div>
  </div>
  <div v-if="$store.state.showCover" class="cover"></div>
  <div class="container">
    <Intro />
    <Video />
    <Works />
    <Awards />
    <Slider />
    <Footer />
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import Intro from "./Intro.vue";
import Video from "./Video.vue";
import Works from "./Works.vue";
import Awards from "./Awards.vue";
import Slider from "./ImgSlider.vue";
import Footer from "./Footer.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
const store = useStore();

 if(window.sessionStorage.getItem("loaded") === null){
    window.sessionStorage.setItem("loaded", true)
  }
  else{
     store.state.showCover = false
  }

const counter = ref(0);
const slider = () => {
  gsap
    .timeline()
    .to(".cover1", {
      duration: 0.3,
      opacity: 1,
      y: "-100%",
      delay: 0.7,
    })
    .to(".cover", {
      duration: 0.3,
      opacity: 1,
      y: "-100%",
      delay: 0.7,
    });
};

onMounted(() => {
   window.scrollTo(0, 0);
  const loaderTimer = setInterval(() => {
    counter.value++;
    if (counter.value === 100) {
      clearInterval(loaderTimer);
      slider();
    }
  }, 55);
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
@import "@/styles/typography";

.cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  overflow: hidden;
}
.cover1 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 2;
  margin: 0 auto;
  h4 {
    margin: 0.3rem 1rem;
    @include year {
      color: #000000;
    }
  }
  .cover1--text {
    width: 70%;
    height: 80%;
    @include flex(center, center);
    flex-direction: column;
    text-align: center;
    margin: auto auto;
    h3 {
      margin-bottom: 1.2rem;
      @include year {
        font-family: "Commissioner", sans-serif;
        color: #000000;
        font-weight: 400;
      }
    }
    p {
      @include socials {
        color: #000000;
      }
    }
  }
}
</style>
