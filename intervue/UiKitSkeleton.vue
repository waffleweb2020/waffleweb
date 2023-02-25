<template>
  <div :style="{
    height: `${props.height}px`,
    borderRadius: `${props.radius}px`,
    width: `${props.width}px`}" class="ui-kit-skeleton">

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  height: Number,
  width: Number,
  radius: Number
})

</script>

<style scoped>
  @keyframes flicker {
    0% {
      background: #757575;
    }
    50% {
      background: #c3c3c7;
    }
    100% {
      background: #757575;
    }
  }
  .ui-kit-skeleton {
    background: #757575;
    animation-name: flicker;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
</style>