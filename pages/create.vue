<template>
  <div class="create" @wheel="transition($event)">
    <ProductItems/>
  </div>
</template>

<script setup lang="ts">
import ProductItems from "~/components/products/ProductItems.vue";
import {useRouter} from "vue-router";
import {ref} from "@vue/reactivity";

const router = useRouter()
const isTransition = ref(false)

function transition(event) {
  if(event.deltaY > 0 && isTransition.value){
    router.push('/contacts')
  }
  else if(event.deltaY < 0 && isTransition.value) {
    router.push('/about')
  }
  else {
    return
  }
}
onMounted(() => {
  setTimeout(() => {
    isTransition.value = true
  },1000)
})
</script>

<style lang="scss">
.create {
  height: 100%;
  position: relative;
  z-index: 1;
}
</style>