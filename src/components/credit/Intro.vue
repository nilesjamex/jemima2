<template>
<section class="intro">
    <div class="intro--box">
        <div class="intro--intro">
              <h5>Credits</h5>
              <div class="line"></div>
          </div>
        <div class="intro--credit--container">
            <div class="intro--credit">
                <h4>WHO MADE THIS SITE?</h4>
                <ul>
                    <li>
                        <h5>
                            <span>Olacodes</span> - UI Design and Art Direction
                            </h5>
                    </li>
                    <li>
                        <h5>
                            <span>Niles</span> - Development and Art Direction
                            </h5>
                    </li>
                    <li>
                        <h5>
                             <span>Olacodes</span> - Motion & Interaction Design
                        </h5>
                    </li>
                </ul>
            </div>
            <div class="intro--credit">
                <h4>TYPESETTING</h4>
                <h5>
                    Type for this website was set in Commisioner and Cabinet Grotesk
                </h5>
            </div>
             <div class="intro--credit">
                <h3>Our redesign of <span>Jemima Osunde’s</span> portfolio. </h3>
                <h5>
                    © 2022
                </h5>
            </div>
            <div class="intro--credit">
                <h4>Assets credits:</h4>
                <h5>
                    Lionheart, Shuga, Rumor has it, Quam’s money, Jemima Osunde
                </h5>
            </div>
        </div>
        <div class="dmca">
            <div class="dmca--text">
                  <h3>Request for content removal</h3>
                  <div class="line"></div>
              </div>
        </div>
        <div class="link">
            <div class="link--rounded">
                  <h5>
                      <router-link to="/about">About</router-link>
                      </h5>
              </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';
@import '@/styles/typography';
.intro {
    padding: 1rem 7%;
}
.intro--intro {
    h5 {
        @include film {
            color: #000000
        }
    }
    .line {
        width: 100%;
        border: 1px solid #000000;
        margin: 2rem 0;
    }
}
.intro--credit--container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: auto;
    width: 80%;
}
.intro--credit {
    margin-top: 1.3rem;
        width: 419px;
    h4 {
        margin-bottom: 2rem;
        font-weight: 700;
        @include credits {
            color: #000000;
        }
    }
    ul {
        li {
            margin-top: 1.3rem;
            h5 {
        @include credits2 {
            font-family: 'Commissioner', sans-serif;
            color: #000000;
        }
    }
        }
    }
    h5 {
        @include credits2 {
            font-family: 'Commissioner', sans-serif;
            color: #000000;
        }
    }
    h3 {
        margin-bottom: 2rem;
        @include credits2 {
            font-family: 'Commissioner', sans-serif;
            color: #000000;
        }
        span {
            font-weight: bold;
        }
    }
}
.dmca {
    margin-top: 1.5rem;
     .dmca--text {
        transition: all 0.6 ease-in-out;
        pointer-events: none;
        &:hover {
                .line {
                    width: 50px;
                }
            }
        h3 {
             @include socials {
                color: #000000
            }
        }
        .line {
                width: 44px;
                border: 0.8px solid #000000;
                transition: all 0.6 ease-in-out;
            }
    }
}
.link {
    @include flex(flex-end,);
    margin-top: -0.4rem;
    .link--rounded {
        width: 112px;
        height: 112px;
        border: 1.5px solid #000000;
        border-radius: 100px;
        @include flex(center, center);
        margin-right: 2rem;
        transition: all 0.6s ease-in-out;
        h5 {
            @include socials {
                color: #000000
            }
        }
        &:hover {
            border: 1.5px solid #ffffff;
            background-color: #2c2c2c;
            h5 {
            @include socials {
                color: #ffffff
            }
        }
        }
    }
}
</style>