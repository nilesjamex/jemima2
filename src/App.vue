<template>
<div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="in-out">
      <div>
      <component :is="Component" />
      </div>
    </transition>
 </router-view> 
</div>
</template>
<script>
export default {
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style scoped>

/* .route-enter-from {
  opacity: 0;
  transform: translateX(100px)
}
.route-enter-active {
  transition: all 0.1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.1s ease-in;
}  */
</style>