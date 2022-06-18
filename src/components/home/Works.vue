<template>
  <section class="works">
    <div class="works--box">
      <div class="works--title">
        <h3>My Filmography</h3>
        <button @click="handleMouses()" class="works--work--button">
          More Works <img src="@/assets/arrow-sm.svg" alt="arrow" />
        </button>
      </div>
      <div class="works--list">
        <div class="line1"></div>
        <div ref="container" @mouseover="showCont" class="works--list--container">
          <div class="img_cont">

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
import gsap from "gsap";

const showImg =(data)=>{
   console.log(data)
}

const showCont = ()=>{
window.addEventListener("mouseover", (e)=>{
  gsap.to(".img_cont", {
    css:{
      left: e.pageX,
      top: e.pageY,
      duration: 10
    },
    duration:5
   })
})
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
@import "@/styles/typography";
.img_cont{
    position: absolute;
    width: 30rem;
    z-index: 90;
    height: 25rem;
    background: grey;
}
.works {
  padding: 4rem 3%;
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
  height: 400px;
}
.works--list--items {
  position: relative;
}
.imghide {
  display: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 10%;
}
.imgshow {
  opacity: 1;
  display: block;
  z-index: 3;
  position: absolute;
  top: 50%;
  right: 10%;
}
.movie--image {
  position: absolute;

  width: 400px;
  height: 450px;
}
</style>
>
