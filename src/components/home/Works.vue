<template>
  <section class="works">
    <div class="works--box">
      <div class="works--title">
        <h3>My Filmography</h3>
        <button @click="handleMouses()" class="works--work--button">
          More Works <img src="@/assets/arrow-sm.svg" alt="arrow" />
        </button>
      </div>
      <div @mouseleave="handleleave" class="works--list">
        <div class="line1"></div>
        <div
          ref="container"
          @mouseover="showCont"
          class="works--list--container"
        >
          <div v-if="showImage" class="img_cont">
            <img :src="require(`@/assets/${step}.svg`)" alt="" />
          </div>
          <div
            v-for="details in movieDetails"
            :key="details.id"
            class="works--list--items--container"
          >
            <div @mouseenter="showImg(details)" class="works--list--items">
              <h2>
                {{ details.name }}
              </h2>
              <div class="works--list--items--year">
                <p>{{ details.type }}</p>
                <h5>{{ details.year }}</h5>
              </div>
            </div>
            <div class="line1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import movieDetails from "@/db/works.json";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { gsap, Circ } from "gsap";
const showImage = ref(null);

const step = ref("lionheart");
const showImg = (data) => {
  step.value = data.img;
  gsap.from(".img_cont img", {
    opacity: 0,
    duration: 0.1,
  });
};
const handleleave = () => {
  showImage.value = false;
};

// Adjust the values of the condition statement to set the limits of the motion of the image

const showCont = (e) => {
  showImage.value = true;
  window.addEventListener("mousemove", (e) => {
    if (
      e.clientX < window.innerWidth / 2 &&
      e.clientX > window.innerWidth / 2.5
    ) {
      gsap.to(".img_cont", {
        css: {
          left: 100 + e.offsetX,
          top: -50 + e.offsetY,
        },
        ease: Circ.easeOut,
        duration: 2,
      });
    }
  });
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
@import "@/styles/typography";
.img_cont {
  position: absolute;
  overflow: hidden;
  width: 30rem;
  background: rgb(74, 75, 74);
  z-index: 90;
  right: 15%;
  img {
    width: 100%;
  }
}
.works {
  padding: 4rem 3%;
  height: auto;
}
.works--title {
  @include flex(space-between);
  margin-bottom: 1.5rem;
  h3 {
    @include film {
      color: #292d32;
    }
  }
}
.works--work--button {
  background: #ffffff;
  border: 1.5px solid #020202;
  border-radius: 38px;
  width: 166px;
  height: 56px;
  @include flex(center, center);
  padding: 16px;
  gap: 8px;
  @include film {
    color: #292d32;
  }
  transition: all 0.6s ease-in-out;
  &:hover {
    background-color: #020202;
    @include film {
      color: #fff;
    }
  }
}
.line1 {
  width: 100%;
  border: 1px solid #000000;
  margin: 0rem 0;
  position: relative;
}
.works--list--items {
  @include flex(space-between);
  cursor: pointer;
  h2 {
    @include title {
      color: #000000;
    }
  }
  .works--list--items--year {
    @include flex(center, flex-end);
    flex-direction: column;
    text-align: right;
    p {
      @include movie {
        color: #000000;
      }
    }
    h5 {
      @include year {
        color: #000000;
      }
    }
  }
}
.works--list--container {
  position: relative;
}
.works--list--items {
  position: relative;
}
@media screen and (max-width: 1024px) {
  .works--list--items {
  h2 {
    @include title {
      font-size: 4rem;
    }
  }
  .works--list--items--year {
    p {
      @include movie {
        color: #000000;
      }
    }
    h5 {
      @include year {
        color: #000000;
      }
    }
  }
}
}
@media screen and (max-width: 824px) {
  .works {
    padding: 2rem 3%;
  }
  .works--list--items {
    flex-direction: column;
    align-items: flex-start;
  h2 {
    @include title {
      font-size: 4rem;
    }
  }
  .works--list--items--year {
    align-items: flex-start;
    p {
      @include movie {
        color: #000000;
      }
    }
    h5 {
      @include year {
        color: #000000;
      }
    }
  }
}
}
@media screen and (max-width: 454px) {
  .works--list--items {
    flex-direction: column;
    align-items: flex-start;
  h2 {
    @include title {
      font-size: 2rem;
    }
  }
  .works--list--items--year {
    align-items: flex-start;
    p {
      @include movie {
        color: #000000;
      }
    }
    h5 {
      @include year {
        color: #000000;
      }
    }
  }
}
}
</style>

