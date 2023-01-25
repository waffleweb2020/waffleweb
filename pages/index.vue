<template>
    <div @wheel="test($event)" class="page">
      <transition name="slide-fade">
        <Animation v-if="!isLoaded" :index="index"/>
      </transition>
      <div style="color: #2BB3C0; width: 370px; height: 50px"></div>
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

  //.page-enter-active,
  //.page-leave-active {
  //  transition-property: opacity;
  //  transition-timing-function: ease-in-out;
  //  transition-duration: 2000ms;
  //}
  //
  //.page-enter,
  //.page-leave-to {
  //  opacity: 0;
  //}
</style>