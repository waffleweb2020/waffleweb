<template>
  <div :class="computedClassName" class="app">
    <transition name="slide-fade">
      <Animation v-if="!isLoaded" :index="index"/>
    </transition>
    <TheHeader :toggle="() => setClassName()"/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader/TheHeader.vue";
import Animation from "~/components/animation/Animation.vue";
import {computed, ref} from "@vue/reactivity";
const index = ref(0)
const isLoaded = ref(false)
const isTransition = ref(false)

const className = ref('light-theme')

function setClassName() {
  if(className.value === 'light-theme') {
    className.value = 'moon-theme'
    return
  }
  className.value = 'light-theme'
}

const computedClassName = computed(() => className.value)
onMounted(() => {
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
  },3000)
})
</script>

<style lang="scss">
  .app {
    height: 100vh;
    overflow: hidden;
    transition: 1s;
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

  .light-theme {
    background: radial-gradient(101.93% 101.93% at 49.36% 44.22%, #FFFFFF 15.92%, #AEAEAE 100%);
    color: #232323;
    transition: 1s;

    .circle {
      &:first-child {
        background: linear-gradient(180deg, #E90DE0 0%, #BE2A2A 100%)
      }

      &:last-child {
        background: linear-gradient(360deg, #30F1DA 0%, #2A4ABE 100%)
      }
    }

    .logo {
      img {
        filter: invert(0.7);
      }
      span {
        &:before {
          filter: invert(0.7);
        }
      }
    }

    .button {
      border: 1px solid #fff;
      background: #232323;
      color: #fff;
      &:hover {
        background: #fff;
        border: 1px solid #100e0e;
        color: #100e0e;
      }
    }

    .monitor {
      border: 25px solid #232323;
    }

    .monitor .header, .aside {
      background: url('/img/monitor-bg.svg') center/cover;
    }

    .monitor .panel {
      background: #232323;
      &:before {
        background: #fff;
      }
    }

    .monitor .root {
      border-left: 5px solid #232323;
      border-right: 5px solid #232323;
      &:before {
        background: #232323;
      }
    }

    .card {
      background: url("/img/monitor-bg.svg") no-repeat center/cover;
    }

    .toggle-button {
      width: 50px;
      height: 100%;
      background: transparent;
      border-radius: 30px;
      border: 1px solid #232323;
      position: relative;
      padding: 2px;
      box-sizing: border-box;
      cursor: pointer;
      &:before {
        content: '';
        display: block;
        height: 80%;
        width: 27%;
        border-radius: 50%;
        background: linear-gradient(360deg, #30F1DA 0%, #2A4ABE 100%);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10%;
        transition: 1s;
      }
    }
  }

  .moon-theme {
    background: #232323;
    color: #fff;
    transition: 1s;
    .circle {
      &:first-child {
        background: linear-gradient(180deg, rgba(243, 175, 0, 0.85) 0%, rgba(173, 173, 173, 0) 100%)
      }

      &:last-child {
        background: linear-gradient(55deg, rgb(52, 209, 243) 0%, rgba(217, 217, 217, 0) 100%)
      }
    }

    .button {
      background: #fff;
      border: 1px solid #100e0e;
      color: #100e0e;
      &:hover {
        background: #232323;
        border: 1px solid #fff;
        color: #fff;
      }
    }

    .monitor {
      border: 25px solid #ffffff;
    }

    .monitor .header, .aside {
      background: url('/img/pattern.svg') center/cover;
    }

    .monitor .panel {
      background: #FFFFFF;
      &:before {
        background: #232323;
      }
    }

    .monitor .root {
      border-left: 5px solid #FFFFFF;
      border-right: 5px solid #FFFFFF;
      &:before {
        background: #FFFFFF;
      }
    }

    .card {
      background: url("/img/bg-product.svg") no-repeat center/cover;
    }
  }
  .toggle-button {
    width: 50px;
    height: 100%;
    background: transparent;
    border-radius: 30px;
    border: 1px solid #FFFFFF;
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      display: block;
      height: 80%;
      width: 27%;
      border-radius: 50%;
      background: linear-gradient(180deg, rgba(243, 175, 0, 0.85) 0%, rgba(173, 173, 173, 0) 100%);
      position: absolute;
      top: 50%;
      transform: translate(-90%, -50%);
      left: 90%;
      transition: 1s;
    }
  }
</style>