<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="/public/img/logo.svg" alt="logo">
        <span>Creation web-technology</span>
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/">Главная</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">О нас</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/create">Создаём</nuxt-link></li>
          <li class="nav-item">Портфолио</li>
          <li class="nav-item">Контакты</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
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
</style>