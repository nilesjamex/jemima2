<template>
  <div class="cover"></div>
  <Nav />
  <Intro slide="slide()" />
</template>

<script>
import Intro from "./Intro.vue";
import Nav from "./Nav.vue";
import { gsap } from "gsap";
export default {
  components: {
    Intro,
    Nav,
  },
  mounted() {
    gsap.to(".cover", {
      duration: 0.4,
      opacity: 1,
      y: "-100%",
      delay: 0.7,
    });
  },
};
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #000000;
  overflow: hidden;
}
</style>
