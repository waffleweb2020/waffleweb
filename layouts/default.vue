<template>
  <div class="app">
<!--    <transition name="slide-fade">-->
<!--      <Animation v-if="!isLoaded" :index="index"/>-->
<!--    </transition>-->
    <TheHeader/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader/TheHeader.vue";
import Animation from "~/components/animation/Animation.vue";
import {ref} from "@vue/reactivity";
const index = ref(0)
const isLoaded = ref(false)
const isTransition = ref(false)
onMounted(() => {
  const id = setInterval(() => {
    if(index.value>=25) {
      clearInterval(id)
      isLoaded.value = true
      return
    }
    index.value++
  },100)

  setTimeout(() => {
    isTransition.value = true
  },3000)
})
</script>

<style lang="scss">
  .app {
    height: 100vh;
    overflow: hidden;
  }

  .layout-enter-active,
  .layout-leave-active {
    transition: all 1.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    //opacity: 0;
    //filter: blur(1rem);
    transform: translate(-1000px);
  }

  .layout-enter-to,
  .layout-leave-from {
    opacity: 1;
    filter: blur(0rem);
  }
</style>