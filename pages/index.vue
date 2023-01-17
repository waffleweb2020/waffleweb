<template>
  <div @wheel="test($event)" class="page">
    <transition name="slide-fade">
      <Animation v-if="!isLoaded" :index="index"/>
    </transition>

      <transition name="slide-fade">
        <Promo v-if="block <= 1"/>
      </transition>

      <transition name="slide-fade">
        <ProductItems v-if="block === 2"/>
      </transition>

  </div>
</template>


<script setup lang="ts">
import Promo from "~/components/promo/Promo.vue";
import {ref} from "@vue/reactivity";
import Animation from "~/components/animation/Animation.vue";
import ProductItems from "~/components/products/ProductItems.vue";
const block = ref(1)

function test(event) {
  if(isWheel.value) {
    isWheel.value = false
    event.deltaY > 0? ++block.value : --block.value
  }
  if(block.value < 1 || block.value > 2) {
    block.value = 1
  }
  setTimeout(() => {
    isWheel.value = true
  },1000)
}

const index = ref(0)
const isLoaded = ref(false)
const isWheel = ref(true)

const create = ref(false)

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
    transition: all 0.3s ease-out;
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
</style>