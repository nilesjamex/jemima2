<template>
  <section class="works">
      <div class="works--box">
          <div class="works--title">
              <h3>
                  My Filmography
              </h3>
              <button @click="handleMouses()" class="works--work--button">
                  More Works <img src="@/assets/arrow-sm.svg" alt="arrow" />
              </button>
          </div>
          <div class="works--list">
              <div class="line1"></div>
              <div ref="container" class="works--list--container">
              <div  v-for="details in movieDetails" :key="details.id" class="works--list--items--container">
              <div @mouseenter="handleEnter(details.id, $event)" @mouseover="handleOver" @mouseleave="handleLeave()" class="works--list--items">
                  <h2>
                      {{details.name}}
                  </h2>
                  <div class="works--list--items--year">
                      <p>{{details.type}}</p>
                      <h5>{{details.year}}</h5>
                  </div>
              </div>
              <div class="line1"></div>
              </div>
              <div v-for="images in movieDetails" :key="images.id" class="works--list--image--container images">
              <div 
              v-if="steps === images.id">
              <img :class="{imghide: showImg}" 
              :style="{right: mousePosition.y + '%', top: mousePosition.x + '%'}" 
              id="image" class="movie--image" :src="require(`@/assets/${images.img}`)" alt=""></div>
              </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
export default {
    data() {
        return {
            steps: 1,
            showImg: true,
            mousePosition: {
                x: 70,
                y: 30
            },
            movieDetails: [
            {
                id: 1,
                name: 'Quam’s Money',
                year: 2020,
                type: 'Movie',
                img: 'quam.svg'
            },
            {
                id: 2,
                name: 'Lionheart',
                year: 2019,
                type: 'Movie',
                img: 'lionheart.svg'
            },
            {
                id: 3,
                name: 'Rumor Has It',
                year: '2016 - 2018',
                type: 'TV Show',
                img: 'rhi.svg'
            },
            {
                id: 4,
                name: 'Shuga',
                year: '2015 - 2020',
                type: 'TV Show',
                img: 'shuga.svg'
            }
          ]
        }
    },
    methods: {
        slideUp() {
            gsap.from('.images', {
                duration: 1,
                y: 0,
                opacity: 1
            })
        },
        mounted(event) {
            console.log(event)
        },
        handleEnter(number, event) {
            this.movieDetails.map((movie) => {
                if(movie.id === number) {
                    this.steps = number
                }
            })
            this.showImg = !this.showImg
            // this.slideUp()
        },
         handleLeave() {
            this.showImg = !this.showImg
            this.steps = null
                
        },
        handleOver(event) {
            console.log(event);
                // this.mousePosition.x = event.clientY
                // this.mousePosition.y = event.clientX
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';
@import '@/styles/typography';
.works {
    padding: 4rem 3%;
}
.works--title {
    @include flex(space-between);
    margin-bottom: 1.5rem;
    h3 {
        @include film {
            color: #292D32;
        }
    }
}
.works--work--button {
    background: #FFFFFF;
    border: 1.5px solid #020202;
    border-radius: 38px;
    width: 166px;
    height: 56px;
    @include flex(center, center);
    padding: 16px;
    gap: 8px;
     @include film {
            color: #292D32;
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
        @include flex(center,flex-end);
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
</style>>