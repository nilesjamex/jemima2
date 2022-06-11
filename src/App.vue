<template>
<Nav />
<div>
  <router-view v-slot="{ Component }">
    <transition name="route">
      <component :is="Component" />
    </transition>
 </router-view> 
</div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
  transition: all 0.7s ease-in-out;
}
.route-leave-active {
  transition: all 0.7s ease-in-out;
}  
</style>