<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="/public/img/logo.png" alt="logo">
        <span>Creation web-technology</span>
      </div>
      <div class="nav">
        <ul class="nav-list">
          <li class="nav-item">Главная</li>
          <li class="nav-item">О нас</li>
          <li class="nav-item">Создаём</li>
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
    }
    &-item {
      font-family: 'Sofia Sans', sans-serif;
    }
  }
</style>