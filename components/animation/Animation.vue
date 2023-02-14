<template>
  <div class="page">
    <span v-for="(item,i) of returnLetters" :class="{'color-letter':i >=12 && i<23}" :key="item">{{item}}</span>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const props = defineProps({
  index: {
    type: Number
  }
})
const letters = ref(['c','o','n','s','o','l','e','.','l','o','g','(','H','e','l','l','o','  ','W','o','r','l','d',')'])

const returnLetters = computed(() => letters.value.slice(0, props.index))
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: #100e0e;
    z-index: 20;
    span {
      font-size: 48px;
      font-family: "Ubuntu";
      color: #fff;
      @media screen and (max-width: 585px) {
        font-size: 27px;
      }
    }
  }
  .color-letter {
    color: #a4015d !important;
  }
</style>