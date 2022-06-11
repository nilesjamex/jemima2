<template>
    <section class="slider">
        <div class="container">
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
            <div class="main--sliderContainer2">
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
export default {

}
</script>

<style scoped lang="scss">
@import '@/styles/mixin';
@import '@/styles/typography';

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
                color: #3fd7ed
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
.main--sliderContainer2 {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow: hidden;
    flex-shrink: 0;

    .slider--container {
        flex-shrink: 0;
        gap: 1.2rem;
        animation: infinityScroll2 20s linear infinite;
        transition: animation 10s ease-in-out;
        @include flex(flex-end,);
    }

    .test {
        flex-shrink: 0;
        @include flex(flex-end);
        gap: 1.5rem;

        h3 {
            @include intro {
                color: #3fd7ed
            }
        }
    }
}

@keyframes infinityScroll2 {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(165%, 0, 0);
    }
}
</style>