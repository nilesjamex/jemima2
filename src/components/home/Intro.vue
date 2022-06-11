<template>
    <section class="intro">
        <div class="intro--box">
            <div class="height"></div>
            <div class="intro--text">
                <h3>
                    About Me
                </h3>
                <img src="@/assets/arrow.svg" alt="arrow">
            </div>
            <div class="main--sliderContainer">
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
                            Physiotherapist
                        </h3>
                        <img src="@/assets/dot.svg" alt="arrow">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
export default {
    mounted() {
        console.log('comming')
        // gsap.to('.intro', {
        //     duration: 1.5,
        //         css: {
        //             scaleX: 1.1
        //         }
            
        // })
    },
    data() {
        return {
            description: [
                {
                    id: 1,
                    name: 'Jemima Osunde',
                    img: 'dot.svg'
                },
                {
                    id: 2,
                    name: 'Actor',
                    img: 'dot.svg'
                },
                {
                    id: 3,
                    name: 'Model',
                    img: 'dot.svg'
                },
                {
                    id: 4,
                    name: 'Presenter',
                    img: 'dot.svg'
                },
                {
                    id: 5,
                    name: 'Physiotherapist',
                    img: 'dot.svg'
                }
            ]
        }
    }
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
    padding: 3rem 0;
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

    .slider--container {
        flex-shrink: 0;
        gap: 1.2rem;
        animation: infinityScroll 20s linear infinite;
        transition: animation 10s ease-in-out;
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
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-165%, 0, 0);
    }
}
</style>