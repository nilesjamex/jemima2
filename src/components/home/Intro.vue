<template>
    <section class="intro">
        <Nav />
        <div class="intro--box">
            <div class="height"></div>
            <div class="intro--text">
                <h3>
                    About Me
                </h3>
                <img src="@/assets/arrow.svg" alt="arrow">
            </div>
            <div class="main--sliderContainer">
                <!-- <MarqueeText> -->
                    <div class="slider--container">
                    <div class="test">
                        <h3>
                            Jemima Osunde
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Actor
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Model
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Presenter
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Physiotherapist &nbsp;
                        </h3>
                    </div>
                    </div>
                <!-- </MarqueeText> -->
                 <!-- <div class="slider--container2">
                    <div class="test">
                        <h3>
                           &nbsp; Jemima Osunde
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Actor
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Model
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Presenter
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                    <div class="test">
                        <h3>
                            Physiotherapist
                        </h3>
                    </div>
                    </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import Nav from '@/components/Nav.vue'
import MarqueeText from 'vue-marquee-text-component';
export default {
    components: {
        MarqueeText,
        Nav
    },
    mounted() {
        console.log('comming')

    },
   
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin';
@import '@/styles/typography';

.height {
    height: 600px;
}
.intro {
    height: 1024px;
    background-image: url('@/assets/jemima-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1rem 0;
    overflow: hidden;
}

.intro--text {
    padding: 0 6%;
    @include flex(flex-start);
    gap: 0.8rem;
    margin-bottom: 4rem;
    h3 {
        @include about {
            color: #fff
        }
    }
}

.main--sliderContainer {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow: hidden;
    flex-shrink: 0;
    width: 100%;

    .slider--container {
        flex-shrink: 0;
        gap: 1.2rem;
        animation: infinityScroll 20s linear infinite;
        @include flex();
    }
    .slider--container2 {
        flex-shrink: 0;
        gap: 1.2rem;
        animation: infinityScroll2 19s linear infinite;
        @include flex();
    }

    .test {
        flex-shrink: 0;
        @include flex(flex-start);
        gap: 1.5rem;

        h3 {
            @include intro {
                color: #fff
            }
        }
    }
}

@keyframes infinityScroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-230%);
    }
}
@keyframes infinityScroll2 {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-230%);
    }
}
</style>