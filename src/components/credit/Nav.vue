<template>
  <nav>
    <ul :class="{active: showNav}">
      <li @click="handleNav"><router-link to="/">Home</router-link></li>
      <li @click="handleNav"><router-link to="/about">About Me</router-link></li>
      <li @click="handleNav">Filmography</li>
      <li @click="handleNav">Awards</li>
      <li @click="handleNav">Blog</li>
      <li @click="handleNav">Contact Me</li>
      <div class="link">
      <div >
        <h5 @click="handleNav">
          <router-link to="/credit">Credits</router-link>
        </h5>
      </div>
      </div>
    </ul>
    <div :class="{active: showNav}" @click="handleNav" class="block">
      <div class="line1"></div>
      <div class="line2"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    handleNav() {
      this.showNav = !this.showNav
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
@import "@/styles/typography";
ul {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  order: 1;
  transition: all 0.2s ease-out;
  overflow: hidden;
  z-index: 4;
  padding: 5% 0 0 3%;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  transform: translateY(-100%);
  li {
    margin: 0 0 0rem 0;
    transform: translateX(10vh);
    opacity: 0;
    cursor: pointer;
    width: auto;
    @include navtext;
    &:nth-child(2), &:nth-child(5) {
      transform: translateX(12vh);
    };
    &:nth-child(3), &:nth-child(4) {
      transform: translateX(14vh);
    }
  }
  .link {
    align-self: flex-end;
    margin-top: -5rem;
     div {
    width: 112px;
    height: 112px;
    transform: translateX(10vh);
    opacity: 0;
    border: 1.5px solid #000000;
    border-radius: 100px;
    @include flex(center, center);
    margin-right: 2rem;
    h5 {
      @include socials {
        color: #000000;
      }
    }
  }
  }
}
ul.active {
  transform: translateY(0);
  li {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.5s ease-out;
     &:nth-child(2), &:nth-child(5) {
      transform: translateX(0);
    transition: all 0.8s ease-out;
    }
     &:nth-child(3), &:nth-child(4) {
      transform: translateX(0);
    transition: all 1.1s ease-out;
    }
  }
  .link {
    div {
    transform: translateX(0);
    opacity: 1;
    transition: all 1.2s ease-out;
  }
  }
}
.active {
  .line1{
    transform: rotate(45deg);
  }
  .line2 {
    transform: rotate(-45deg);
  }
}
nav {
  height: 6vh;
  background-color: transparent;
  padding: 0.1rem 3%;
  @include flex(flex-end, center);
}
.block {
  display: block;
  z-index: 5;
  order: 5;
  cursor: pointer;
  .line1 {
    width: 39px;
    height: 3px;
    background-color: #000000;
    margin: 0.2rem 0;
  }
  .line2 {
    width: 39px;
    height: 3px;
    background-color: #000000;
    margin: 0.2rem 0;
  }
}
@media screen and (max-width: 600px) {
  ul {
  li {
    @include navtext{
      font-size: 2rem;
    }
  }
}
}
</style>
