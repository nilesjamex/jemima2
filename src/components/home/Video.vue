<template>
  <section class="video">
    <div class="video--box">
      <div class="video--text">
        <h3>Video Intro</h3>
      </div>
      <div class="video--video">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/413645109?h=e2c2f6fde7&autoplay=1&color=ffffff"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
      <div class="video--about">
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
export default {};
</script>

<style scoped lang="scss">
@import "@/styles/mixin";
@import "@/styles/typography";
.video {
  padding: 3rem 5%;
  height: 800px;
}
.video--box {
  width: min(90%, 1210px);
  margin: 0 auto;
  position: relative;
  height: 790px;
}
.video--text {
  h3 {
    @include socials {
      color: #000000;
    }
  }
}
.video--video {
  position: absolute;
  z-index: 2;
  top: 2%;
  width: 100%;
  height: 760px;
  margin: 0 auto;
}
.video--about {
  @include flex(flex-end, flex-start);
  height: 760px;
  .link--rounded {
    width: 112px;
    height: 112px;
    border: 1.5px solid #1c1b22;
    background-color: #1c1b22;
    border-radius: 100px;
    @include flex(center, center);
    margin-right: 2rem;
    position: absolute;
    z-index: 3;
    top: 70%;
    h5 {
      @include socials {
        color: #ffffff;
      }
    }
  }
}
</style>
