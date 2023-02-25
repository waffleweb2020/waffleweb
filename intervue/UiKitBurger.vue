<template>
  <div @click="clickBurger" :class="{'ui-kit-burger-active': props.modelValue}" class="ui-kit-burger">
    <span></span>
  </div>
</template>

<script setup lang="ts">

import {ref} from "@vue/reactivity";

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits( ['update:modelValue'],)
const isActive = ref(false)

function clickBurger() {
  isActive.value = !isActive.value
  emit('update:modelValue', isActive.value)
}
</script>

<style scoped>
  .ui-kit-burger {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .ui-kit-burger span {
    height: 5px;
    width: 100%;
    background: #232323;
    border-radius: 10px;
    transition: 1s;
  }
  .ui-kit-burger:before, .ui-kit-burger:after {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    background: #232323;
    border-radius: 10px;
    transition: 1s;
  }
  .ui-kit-burger-active span {
    opacity: 0;
  }
  .ui-kit-burger-active:before {
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
   }
  .ui-kit-burger-active:after {
    transform: rotate(315deg);
    position: absolute;
    top: 50%;
  }
</style>