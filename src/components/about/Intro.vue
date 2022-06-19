<template>
  <section class="intro">
    <div class="intro--box">
      <div class="intro--intro">
        <h5>About Me</h5>
        <div class="line"></div>
      </div>
      <div class="intro--content">
        <div class="intro--content--text">
          <p>
            Jemima Osunde is an actor, model, presenter with a degree in
            Physiotherapy from the college of medicine, University of Lagos.
          </p>
          <p>
            Jemima was born in Lagos and has lived there all her life. She is
            the last child and only daughter of her parents and grew up with her
            mum dad and older brothers.
          </p>
          <p>
            She attended Air Force Primary School, went on to Holy Child college
            for her secondary school education and had her tertiary education at
            the college of Medicine, University of Lagos.
          </p>
          <p>
            Jemima has graced the screens with her talent and skills in major
            film productions.
          </p>
          <p>
            She is the brand ambassador for a multinational brand and is
            affiliated with a few other brands.
          </p>
          <p>
            She is all about girl power and lives everyday doing all the things
            she loves and wants to do hoping she can inspire other young women
            to do the same.
          </p>
        </div>
        <div class="intro--content--link">
          <div class="link--rounded">
            <h5>
              <router-link to="/">Home</router-link>
            </h5>
          </div>
        </div>
      </div>
      <div class="intro--content2">
        <div class="intro--content--text">
          <h3>Life Mission</h3>
          <p>
            I am Jemima and I am for every woman; young and not so young, light
            or dark skinned, tall or short.
          </p>
          <p>I am for EVERY woman labels aside.</p>
          <p>
            Walk with me on this journey to help every girl, every woman I meet,
            know that there’s more to them than what is on the outside.
          </p>
          <p>
            Let’s shed the identity we are conditioned to carry. We are more
            than just beautiful faces and tiny waists, a perfect figure or the
            lack thereof.
          </p>
          <p>
            We are many layers in one and we should be allowed to live with
            this.
          </p>
          <p>
            You can be all you want to be and more. Who said anything about
            limits?
          </p>
          <p>YOU are much more than we can see.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
@import "@/styles/typography";

.intro--box {
  padding: 1rem 7%;
}
.intro--intro {
  h5 {
    @include film {
      color: #000000;
    }
  }
  .line {
    width: 100%;
    border: 1px solid #000000;
    margin: 2rem 0;
  }
}
.intro--content {
  @include flex(space-between);
  .intro--content--text {
    width: min(853px, 100%);
    p {
      margin-bottom: 1.3rem;
      @include about {
        color: #000000;
      }
    }
  }
  .intro--content--link {
    align-self: flex-end;
    .link--rounded {
      position: absolute;
      z-index: 2;
      right: 6%;
      bottom: -40%;
      width: 112px;
      height: 112px;
      border: 1.5px solid #000000;
      border-radius: 100px;
      @include flex(center, center);
      margin-right: 2rem;
      transition: all 0.6s ease-in-out;
      h5 {
        @include socials {
          color: #000000;
        }
      }
      &:hover {
        border: 1.5px solid #ffffff;
        background-color: #2c2c2c;
        h5 {
          @include socials {
            color: #ffffff;
          }
        }
      }
    }
  }
}
.intro--content2 {
  width: 783px;
  .intro--content--text {
    h3 {
      margin-bottom: 2rem;
      @include credits {
        color: #000000;
      }
    }
    p {
      @include about {
        color: #000000;
      }
    }
  }
}
</style>
