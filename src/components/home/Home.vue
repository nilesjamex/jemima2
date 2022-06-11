<template>
  <Intro />
  <Works />
  <Awards />
  <Slider />
  <Footer />
</template>

<script>
import Intro from './Intro.vue'
import Works from './Works.vue'
import Awards from './Awards.vue'
import Slider from './ImgSlider.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Intro,
        Works,
        Awards,
        Slider,
        Footer
    }
}
</script>

<style>

</style>