<template>
  <nav>
      <div class="block">
          <div class="line"></div>
          <div class="line"></div>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin';
nav {
    height: 6vh;
    background-color: #2c2c2c;
    padding: 0.1rem 3%;
    @include flex(flex-end, center)
}
.block {
    display: block;
    cursor: pointer;
    .line {
        width: 39px;
        height: 2px;
        background-color: white;
        margin: 0.2rem 0;
    }
}
</style>