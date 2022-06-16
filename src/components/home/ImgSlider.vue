<template>
  <section class="slider">
    <div class="container">
      <div class="main--sliderContainer1">
        <div class="slider--container1">
          <div class="test">
            <img src="@/assets/movielist/lionheart.svg" alt="arrow" />
          </div>
          <div class="test">
            <img src="@/assets/movielist/mwi.svg" alt="arrow" />
          </div>
          <div class="test">
            <img src="@/assets/movielist/feelgood.svg" alt="arrow" />
          </div>
          <div class="test">
            <img src="@/assets/movielist/nm.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <div class="main--sliderContainer2">
        <div class="slider--container2">
          <div class="test">
            <img src="@/assets/movielist/rhi.svg" alt="arrow" />
          </div>
          <div class="test">
            <img src="@/assets/movielist/nm.svg" alt="arrow" />
          </div>
          <div class="test">
            <img src="@/assets/movielist/feelgood.svg" alt="arrow" />
          </div>
          <div class="test">
            <img src="@/assets/movielist/mwi.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
  gsap.timeline({ scrollTrigger: {
        trigger: '.main--sliderContainer1',
        x: 200,
        end: '+=900',
        scrub: 'true'
      }
    })
    .to('.slider--container1', {
      x: -480,
      delay: 1
    })

    gsap.timeline({ scrollTrigger: {
        trigger: '.main--sliderContainer2',
        x: 200,
        end: '+=900',
        scrub: 'true'
      }
    })
    .to('.slider--container2', {
      x: 480,
      delay: 1
    })
   
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin";
@import "@/styles/typography";

.main--sliderContainer1 {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  overflow: hidden;
  flex-shrink: 0;

  .slider--container1 {
    flex-shrink: 0;
    gap: 1.2rem;
    // animation: infinityScroll 20s linear infinite;
    // transition: animation 4s ease-in-out;
    @include flex();
  }

  .test {
    flex-shrink: 0;
    @include flex(flex-start);
    gap: 1.5rem;

    h3 {
      @include intro {
        color: #3fd7ed;
      }
    }
  }
}

// @keyframes infinityScroll {
//   0% {
//     transform: translate3d(0, 0, 0);
//   }

//   100% {
//     transform: translate3d(-30%, 0, 0);
//   }
// }
.main--sliderContainer2 {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: 2.5rem;
  .slider--container2 {
    flex-shrink: 0;
    gap: 1.2rem;
    // animation: infinityScroll2 20s linear infinite;
    // transition: animation 4s ease-in-out;
    @include flex(flex-end);
  }

  .test {
    flex-shrink: 0;
    @include flex(flex-end);
    gap: 1.5rem;

    h3 {
      @include intro {
        color: #3fd7ed;
      }
    }
  }
}

// @keyframes infinityScroll2 {
//   0% {
//     transform: translate3d(0, 0, 0);
//   }

//   100% {
//     transform: translate3d(30%, 0, 0);
//   }
// }
</style>
