<template>
  <div class="header">
    <div class="container">

      <div class="logo">
        <img src="/img/logo.svg" alt="logo">
        <span>Creation web-technology</span>
      </div>

      <div :class="{'nav-active': isBurgerActive}" class="nav">
        <ul @click="isBurgerActive = !isBurgerActive" class="nav-list">
          <li class="nav-item"><nuxt-link to="/">Главная</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">О нас</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/create">Создаём</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/contacts">Контакты</nuxt-link></li>
          <li class="nav-item"><div @click="toggle" class="toggle-button"></div></li>
        </ul>
      </div>

      <div @click="isBurgerActive = !isBurgerActive" :class="{'burger-active':isBurgerActive}" class="burger">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";
const props = defineProps({
  toggle: {
    type: Function
  }
})
const isBurgerActive = ref(false)
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 2;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    display: block;
    position: relative;
    font-family: 'Sofia Sans', sans-serif;
    font-size: 1.6rem;
    &:before {
      display: block;
      content: "";
      width: 2px;
      height: 140%;
      background: #fff;
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
  .nav {
    &-list {
      display: flex;
      gap: 30px;
      font-size: 1.6rem;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        font-size: 2.6rem;
      }
    }
    &-item {
      font-family: 'Sofia Sans', sans-serif;
      color: inherit;
    }
    @media screen and (max-width: 1024px) {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      background: #000;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: 1s;
    }
    &-active {
      @media screen and (max-width: 1024px) {
        left: 0%;
      }
    }
  }
  .burger {
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    display: none;
    @media screen and (max-width: 1024px) {
      display: flex;
    }
    span,&:after,&:before {
      display: block;
      height: 5px;
      background: #232323;
      border-radius: 2px;
      transition: 1s;
    }
    &:after,&:before {
      content: '';
      position: absolute;
      width: 100%;
      transform-origin: center;
    }
    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }
    &-active {
      span {
        opacity: 0;
      }
      &:before, &:after {
        background: #fff;
      }
      &:before {
        top: 50%;
        transform: translate(-50%, -50%) rotate(135deg);
        left: 50%;
      }
      &:after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  .toggle-button {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
</style>