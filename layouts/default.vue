<template>
  <div class="app">
    <TheHeader/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader/TheHeader.vue";

</script>

<style>
  .app {
    height: 100vh;
    overflow: hidden;
  }
</style>