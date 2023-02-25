<template>
  <div @touchend="touchMove($event)" @touchstart="startMove($event)" @mousemove="move($event)" class="promo">
    <div class="container">
      <div class="info">
        <div :class="{'active-title':isStyleClass}" class="title">
          <h1> Разработка
            web-решений
          </h1>
        </div>
        <div class="subtitle"> <h2>Выводим ваш бизнес на новый уровнь</h2></div>
        <UiButton
            @mouseenter.native="addStyleClass"
            @mouseleave.native="removeStyleClass"
            theme="light"
        />
      </div>
      </div>
    <div class="promo-circles">
      <div :style="{
        transform: `translate(${-x/30}px, ${-y/30}px)`,

      }"
      class="circle"></div>
      <div :style="{
        transform: `translate(${x/30}px, ${y/30}px)`,

      }" class="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "@vue/reactivity";
import {useRouter} from "vue-router";
import UiButton from "~/ui/UiButton.vue";

const x = ref(0)
const y = ref(0)


const isStyleClass = ref(false)

const degrees = ref(0)
const router = useRouter()

function rotateDegree() {
  setInterval(()=>{
    if(degrees.value >= 360) {
      degrees.value = 0
    }
    degrees.value++
  },40)
}

onMounted(() => rotateDegree())

function move(event) {
  x.value = event.x
  y.value = event.y
}

function addStyleClass() {
  isStyleClass.value = true
}

function removeStyleClass() {
  isStyleClass.value = false
}

function startMove(event) {
  x.value = event.touches[0].clientX
  console.log(x.value)
}

function touchMove(event) {
  if(event.changedTouches[0].clientX < x.value) {
    router.push('/about')
  }
}
</script>

<style lang="scss" scoped>
  .promo {
   height: 100%;
    position: relative;
    &-circles {
      position: absolute;
      width: 50%;
      height: 100%;
      right: 0;
      top: 0;
      @media screen and (max-width: 768px) {
        position: absolute;
        height: 80%;
        width: 100%;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 30px;
    width: 50%;
    @media screen and (max-width: 767px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
  .title {
    position: relative;
    animation-name: show;
    h1 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 96px;
      @media screen and (max-width: 768px) {
        font-size: 62px;
      }
    }
    &:after {
      width: 0%;
      display: block;
      content: '';
      height: 3px;
      background: #232323;
      position: absolute;
      transition: 1s;
    }
  }

  .subtitle {
    h2 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
      @media screen and (max-width: 768px) {
        font-size: 35px;
      }
    }
  }

  .circle {
    position: absolute;
    transition: 0.5s;
    &:first-child {
      top: 0;
      width: calc(30vmax + 100px);
      height: calc(30vmax + 100px);
      border-radius: 50%;
      @media screen and (max-width: 1920px) {
        width: calc(15vmax + 350px);
        height: calc(15vmax + 350px);
      }
    }
    &:last-child {
      bottom: 0;
      right: 0;
      width: calc(20vmax + 100px);
      height: calc(20vmax + 100px);
      border-radius: 50%;
      @media screen and (max-width: 1920px) {
        width: calc(15vmax + 250px);
        height: calc(15vmax + 250px);
      }
      @media screen and (max-width: 585px) {
        right: -30%;
      }
    }
  }
  @keyframes rotateColor {
    0%{
      background: linear-gradient(0deg, rgba(243, 175, 0, 0.55) 0%, rgba(173, 173, 173, 0) 100%);
    }
    100%{
      background: linear-gradient(360deg, rgba(243, 175, 0, 0.55) 0%, rgba(173, 173, 173, 0) 100%);
    }
  }
  .active-title {

    &:after {
      width: 100%;
    }
  }
  @keyframes show {
    0% {
    opacity: 0;
    transform: translateX(-10%);
  }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
}
</style>