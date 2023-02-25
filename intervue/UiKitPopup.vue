<template>
  <div v-if="isOpened" class="ui-kit-popup">
    <div @click="isOpened = false" class="bg"></div>
    <div class="window">
      <div @click="isOpened = false" class="close">
      </div>
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const isOpened = ref(false)

function changeModal() {
  isOpened.value = !isOpened.value
}

defineExpose({
  changeModal
})
</script>

<style>
  @keyframes show {
    0% {
      opacity: 0;
      display: block;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes close {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
  .ui-kit-popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: show;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(35, 35, 35, 0.9);
  }
  .window {
    background: #fff;
    width: 70%;
    height: 70%;
    z-index: 1;
    border-radius: 20px;
    position: relative;
  }

  .close {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 3%;
    right: 3%;
    cursor: pointer;
  }

  .close:before, .close:after {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    background: #232323;
    border-radius: 10px;
    transition: 1s;
  }
  .close:before {
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
  }
  .close:after {
    transform: rotate(315deg);
    position: absolute;
    top: 50%;
  }
</style>