<template>
  <section class="footer">
      <div class="footer--box">
          <div class="footer--socials">
              <div class="footer--socials--text">
                  <h2>Let’s work together</h2>
              </div>
              <div class="footer--socials--links">
                  <div class="footer--socials--links--text">
                      <h5>
                          Instagram
                      </h5>
                      <div class="line"></div>
                  </div>
                  <div class="footer--socials--links--text">
                      <h5>
                          Twitter
                      </h5>
                      <div class="line"></div>
                  </div>
                  <div class="footer--socials--links--text">
                      <h5>
                          Facebook
                      </h5>
                      <div class="line"></div>
                  </div>
                  <div class="footer--socials--links--text">
                      <h5>
                          Tiktok
                      </h5>
                      <div class="line"></div>
                  </div>
              </div>
          </div>
          <div class="social--mail">
              <div class="social--mail--text">
                  <h3>Jemimaosunde@gmail.com</h3>
                  <div class="line"></div>
              </div>
              <div class="social--mail--rounded">
                  <h5>Credits</h5>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';
@import '@/styles/typography';
.footer {
    padding: 4rem 3%;
}
.footer--socials {
    @include flex(space-between,);
    .footer--socials--text {
        h2 {
            width: 412px;
            height: 158px;
            @include awards {
                color: #000000
            }
        }
    }
    .footer--socials--links {
        align-items: flex-end;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        .footer--socials--links--text {
            transition: all 600ms ease-in-out;
            &:hover {
                .line {
                    width: 50px;
                }
            }
            h5 {
                pointer-events: none;
                @include socials {
                    color: #000000;
                }
            }
            .line {
                width: 24px;
                border: 0.8px solid #000000;
            }
        }
    }
}
.social--mail {
    @include flex(space-between, flex-start);
    margin-top: 2rem;
    .social--mail--text {
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
                width: 24px;
                border: 0.8px solid #000000;
                transition: all 0.6 ease-in-out;
            }
    }
    .social--mail--rounded {
        width: 112px;
        height: 112px;
        border: 1.5px solid #000000;
        border-radius: 100px;
        @include flex(center, center);
        margin-right: 2rem;
        h5 {
            @include socials {
                color: #000000
            }
        }
    }
}
</style>