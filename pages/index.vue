<template>
  <transition name="home">
    <div @wheel="test($event)" class="page">
      <transition name="slide-fade">
        <Animation v-if="!isLoaded" :index="index"/>
      </transition>

      <Promo/>
    </div>
  </transition>
</template>


<script setup lang="ts">
import Promo from "~/components/promo/Promo.vue";
import {ref} from "@vue/reactivity";
import Animation from "~/components/animation/Animation.vue";
import ProductItems from "~/components/products/ProductItems.vue";
import About from "~/components/about/About.vue";
import {useRouter} from "vue-router";

const router = useRouter()

function test(event) {
  event.deltaY > 0? router.push('/about') : null
}

const index = ref(0)
const isLoaded = ref(false)
const isWheel = ref(true)

const create = ref(false)
const transition = 'fade'
onMounted(() => {
  create.value = true
  const id = setInterval(() => {
    if(index.value>=25) {
      clearInterval(id)
      isLoaded.value = true
      return
    }
    index.value++
  },100)
})
</script>

<style lang="scss" scoped>
  .page {
    height: 100vh;
  }

  .slide-fade-enter-active {
    transition: all 0.8s;
  }

  .slide-fade-leave-active {
    transition: all 0.8s
  }

  .slide-fade-enter-to,
  .slide-fade-leave-from {
    opacity: 1;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
  }

  .page-enter-active,
  .page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 5000ms;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
</style>