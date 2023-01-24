<template>
  <div class="app">
    <TheHeader/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader/TheHeader.vue";

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