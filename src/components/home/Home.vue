<template>
<div ref="cover" v-if="true" class="cover1">
  <h4>
    {{counter}}%
  </h4>
  <div class="cover1--text">
    <h3>
    I'm More Than You See
  </h3>
  <p>
   - Jemima Osunde
  </p>
  </div>
</div>
<div v-if="true" class="cover"></div>
<div class="container">
  <Intro />
  <Video />
  <Works />
  <Awards />
  <Slider />
  <Footer />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import Intro from './Intro.vue'
import Video from './Video.vue'
import Works from './Works.vue'
import Awards from './Awards.vue'
import Slider from './ImgSlider.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Intro,
        Video,
        Works,
        Awards,
        Slider,
        Footer
    },
    data() {
      return {
        /*eslint no-octal: 2*/
        counter: 0,
        true: this.$store.state.true,
        show: true
      }
    },
    methods: {
      slider() {
        gsap.timeline()
        .to('.cover1', {
            duration: 0.3,
            opacity: 1,
            y: "-100%",
            delay: 0.7
        }).to('.cover', {
            duration: 0.3,
            opacity: 1,
            y: "-100%",
            delay: 0.7
        })
      },
      changeState() {
        this.true = this.$store.state.replaceState({state: {
         true: false
       }})
      }
    },
    computed: {
       count() {
         return this.$store.state.true
       }
    },
    mounted() {
    window.scrollTo(0,0)
  //   window.sessionStorage.setItem('doNotShow', 'true')
   console.log(this.true)
    const loaderTimer = setInterval(() => {
      this.counter++;
      if(this.counter === 100) {
        clearInterval(loaderTimer);
        window.sessionStorage.setItem('doNotShow', 'false')
        const meh = window.sessionStorage.getItem('doNotShow')
        this.changeState()
       console.log(this.true)
        this.slider()
      }
    }, 55)
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';
@import '@/styles/typography';

.cover {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #000000;
    overflow: hidden;
}
.cover1 {
    position: absolute;
    height: 100vh;
    width: 100%;
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
      @include flex(center,center);
      flex-direction: column;
      text-align: center;
      margin: auto auto;
      h3 {
        margin-bottom: 1.2rem;
        @include year {
            font-family: 'Commissioner', sans-serif;
            color: #000000;
            font-weight: 400;
        }
      }
      p {
        @include socials {
                color: #000000
            }
      }
    }
}
</style>