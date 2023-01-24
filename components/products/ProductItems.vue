<template>
  <div @mousemove="move($event)" class="items page">
    <div class="container">
      <div class="grid">
        <ProductItem v-for="item of products" :key="item.title" :item="item"/>
      </div>
    </div>
    <div :style="{
        transform: `translateX(${x/10}px`,
        background: `linear-gradient(${degrees}deg, rgba(243, 175, 0, 0.55) 0%, rgba(173, 173, 173, 0) 100%)`
      }" class="circle"></div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from "~/components/products/ProductItem.vue";
import {ref} from "@vue/reactivity";

const products = ref([
  {id: 1, title: 'Интернет-магазин', subtitle:'Расширьте границы вашего бизнеса, реализовав классический функционал интернет-магазина'},
  {id: 2, title: 'CMS (система управления контентом)', subtitle:'Замена типовых CMS на собственную, спроектированную под ваши интересы и потребности'},
  {id: 3, title: 'Сайт-визитка', subtitle:'Пусть ваша компания создаст приятное первое впечатление с ваши будущими партнёрами'},
  {id: 4, title: 'Телеграм-боты', subtitle:'Современный аналог веб-сайтом, совмещающий функционал интернет-магазина'},
  {id: 5, title: 'Создание дизайна', subtitle:'Создаём визуальный интерфейс для демострации сильных сторон вашего бизнеса'},
])

const degrees = ref(0)
const x = ref(0)

function move(event) {
  x.value = event.x
}
</script>

<style lang="scss" scoped>
  .items {
    height: 100%;
    position: relative;
  }
  .container {
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;
  }
  .grid {
    display: grid;
    grid-template-columns: 300px 1fr 1fr 300px;
    grid-auto-rows: 1fr 1fr 1fr;
    gap: 20px;
    height: 75%;
  }

  .circle {
    position: absolute;
    transition: 0.5s;
    bottom: 0;
    width: 682px;
    height: 683px;
    border-radius: 50%;
    left: -10%;
  }
</style>