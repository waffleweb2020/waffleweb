<template>
  <div  @click="setIndex" class="about">
    <div class="container">
<!--      <span class="number">{{index + 1}}.</span>-->
<!--      <div v-for="(card, i) of about" :key="card.title" v-show="index === i" class="about-card">-->
<!--        <h2 class="title">{{card.title}}</h2>-->

<!--        <ul class="list">-->
<!--          <li v-for="title of card.subtitles" :key="title" class="list-item">{{title}}</li>-->
<!--        </ul>-->

<!--        <div class="button">-->
<!--          Связаться-->
<!--          <div class="arrow"></div>-->
<!--        </div>-->

<!--        <Monitor>-->

<!--        </Monitor>-->
<!--      </div>-->
      <Monitor>

      </Monitor>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "@vue/reactivity";
import Monitor from '~/ui/Monitor.vue'
const about = ref([
  {title:'Мы создаем весь цикл разработки:', subtitles: [
      'Обсуждая с Вами, мы разрабатываем дизайн Вашего проекта ',
      'Бонусом, вы получаете разработанную под ваши интересы админную панель, включающую создание контента и аналитики',
      'Вы получаете проект, адекватно отображающийся на всех основных видах экранах - мониторах, планшетах и мобильных телефонов ',
      'Если Вы нуждаетесь в небольшом функционале, хорошим аналогом на сегодняшний день являются телеграм-боты, создаваемые нами под ваши нужды'
    ], gif: '/img/web-development.gif', component: Monitor},
  {title:'Мы создаём SPA-приложения:', subtitles: [
      'навигация по сайту осуществляется без перезагрузки страницы',
      'происходит экономия трафика до 78%*',
      'повышается качество пользовательского опыта',
      'работа с сайтом становится в 2.3 раза быстрее'
    ], gif: '/img/giphy.gif',component: null},
  {title:'Вы экономите ваше время и деньги:', subtitles: [
      'Оплата происходит после сдачи проектов, указанных в договоре',
      'Весь процесс разработки с первого дня располагается на сервере, где Вы сможете контролировать работу',
      'Среднее время выполнения заказа - 27 дней',
      'Любые правки и корректировки документируются, что исключает навязывание дополнительных услуг пост-фактум'
    ],gif: '/img/giphy2.gif', component: null},
])

const index = ref(0)

function setIndex() {
  if(index.value >= 2) {
    index.value = 0
    return
  }
  index.value ++
}
</script>

<style lang="scss" scoped>
  .about {
    position: relative;
    height: 100%;
    &-card {
      z-index: 1;
      position: relative;
      height: 100%;
      display: grid;
      padding: 0 25px;
      cursor: pointer;
      grid-template-areas:
        "t z"
        "l g"
        "b g";
      height: 65%;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      animation-name: showInfo;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      row-gap: 35px;
    }
    &:before {
      content: 'Что вы получаете?';
      display: block;
      position: absolute;
      border-top: 2px solid #4D0049;
      border-bottom: 2px solid #4D0049;
      width: 100%;
      height: 40px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Ubuntu';
      font-size: 30px;
    }
    &-mask {
      position: absolute;
      width: 660px;
      height: 400px;
      background: url("/img/mask.png") no-repeat center/cover;
      right: 38%;
      bottom: 10%;
      transform: translateX(50%);
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-mask-image:url("/img/mask.png");
      -webkit-mask-position:center center;
      -webkit-mask-repeat:no-repeat;
      -webkit-mask-size:cover;

      mask-image:url("/img/mask.png");
      mask-position:center center;
      mask-repeat:no-repeat;
      mask-size:cover;
    }
  }

    .container {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      //&:before {
      //  content: "";
      //  display: block;
      //  position: absolute;
      //  border-right: 2px solid #4D0049;
      //  border-left: 2px solid #4D0049;
      //  width: 1%;
      //  top: 0;
      //  height: 100%;
      //  right: 0;
      //}
      //&:after {
      //  display: block;
      //  content: "";
      //  position: absolute;
      //  width: 900px;
      //  height: 900px;
      //  background: url("/img/pattern.svg");
      //  border-radius: 50%;
      //  border: 2px solid #4D0049;
      //  left: -20%;
      //  top: 44px;
      //  animation-name: rotateCircle;
      //  animation-timing-function: ease;
      //  animation-duration: 60s;
      //  animation-iteration-count: infinite;
      //}
  }
    .title {
      grid-area: t;
      font-family: "Ubuntu";
      align-self: center;
      font-size: 35px;
      max-width: 70%;
    }

    .list {
      display: flex;
      flex-direction: column;
      grid-area: l;
      gap: 30px;
      align-self: flex-start;
      max-width: 80%;
      &-item {
        font-family: "Ubuntu";
      }
    }

    .button {
      grid-area: b;
      height: 30px;
      width: 180px;
      border: 2px solid #fff;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Ubuntu";
      position: relative;
      align-self: flex-end;
      &:hover {
        .arrow {
          width: 120%;
        }
      }
    }
    .arrow {
      display: block;
      position: absolute;
      right: -10%;
      width: 30%;
      background: #fff;
      height: 5px;
      transform: translateX(100%);
      transition: 1s;
    }

  .gif {
    background: url("/img/web-development.gif") center/cover;
    grid-area: g;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .number {
    position: absolute;
    right: 5%;
    font-size: 64px;
    top: 10%;
    font-family: Ubuntu;
  }

  @keyframes rotateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes showInfo {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>