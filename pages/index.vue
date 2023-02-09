<template>
    <div @wheel="test($event)" class="page">
      <Promo/>
    </div>
</template>


<script setup lang="ts">
import Promo from "~/components/promo/Promo.vue";
import {ref} from "@vue/reactivity";
import Animation from "~/components/animation/Animation.vue";
import ProductItems from "~/components/products/ProductItems.vue";
import About from "~/components/about/About.vue";
import {useRouter} from "vue-router";
import VueKinesis from "vue-kinesis";

const router = useRouter()
const isTransition = ref(false)
function test(event) {
  event.deltaY > 0 && isTransition.value ? router.push('/about') : null
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

  setTimeout(() => {
    isTransition.value = true
  },2000)
})
</script>

<style lang="scss" scoped>
  .page {
    height: 100vh;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 1000ms;
  }

  .slide-fade-enter,
  .slide-fade-enter-to,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>