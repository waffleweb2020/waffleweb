<template>
  <div @mousemove="move($event)" class="promo">
    <div class="container">
      <div class="info">
        <div :class="{'active-title':isStyleClass}" class="title">
          <h1> Разработка
            web-решений
          </h1>
        </div>
        <div class="subtitle"> <h2>Выводим ваш бизнес на новый уровнь</h2></div>
        <button
            @mouseenter="addStyleClass"
            @mouseleave="removeStyleClass"
            class="button"
        >Связаться</button>
      </div>
      </div>
    <div class="promo-circles">
      <div :style="{
        transform: `translate(${-x/30}px, ${-y/30}px)`,
        background: `linear-gradient(${degrees}deg, rgba(243, 175, 0, 0.55) 0%, rgba(173, 173, 173, 0) 100%)`
      }"
      class="circle"></div>
      <div :style="{
        transform: `translate(${x/30}px, ${y/30}px)`,
        background: `linear-gradient(${360 - degrees}deg, #34D1F3 0%, rgba(217, 217, 217, 0) 100%)`
      }" class="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "@vue/reactivity";

const x = ref(0)
const y = ref(0)

const isStyleClass = ref(false)

const degrees = ref(0)

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
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 30px;
    width: 50%;
  }
  .title {
    position: relative;
    h1 {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 96px;
    }
    &:after {
      width: 0%;
      display: block;
      content: '';
      height: 3px;
      background: #fff;
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
    }
  }

  .button {
    border: 1px solid #fff;
    width: 170px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 30px;
    transition: 1s;
    &:hover {
      background: #fff;
      border: 1px solid #100e0e;
      color: #100e0e;
    }
  }

  .circle {
    position: absolute;
    transition: 0.5s;
    &:first-child {
      top: 0;
      width: 544px;
      height: 544px;
      border-radius: 50%;
    }
    &:last-child {
      bottom: 0;
      right: 0;
      width: 444px;
      height: 444px;
      border-radius: 50%;
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
</style>