<template>
  <div class="display">
    <div class="header">Что вы получаете?</div>
    <div class="aside" >
      <h2 >Преимущества</h2>
      <ul>
        <li>многие пользователи формируют своё мнение о веб-сайте по скорости загрузки страниц, на это им нужно всего <span>0.5 секунды</span></li>
        <li>47% людей ожидают, что веб-страница загрузится <span>за 2 секунды или меньше</span></li>
        <li>39% людей вообще перестанут взаимодействовать
          с сайтом, если изображения не будут загружаться или станут <span>загружаться более 8 секунд</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <p class="subtitle">Мы создаём SPA-приложения:</p>
      <ul>
        <li>навигация по сайту осуществляется <span>без перезагрузки страницы</span></li>
        <li>происходит экономия трафика <span>до 78%*</span></li>
        <li><span>повышается качество</span> пользовательского опыта</li>
        <li>работа с сайтом становится <span>в 2.5 раза</span> быстрее</li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  name: "InnerMonitor"
}
</script>

<style lang="scss" scoped>

.display {
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-rows: 50px 1fr 1fr 50px;
  padding: 20px;
  gap: 20px;
  .header {
    grid-column: 1/2;
    border-radius: 10px;
    font-family: "Ubuntu";
    font-size: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border: 2px solid #61234E;
    filter: drop-shadow(0px 4px 29px #61234E);
  }

  .aside {
    grid-row: 3/4;
    grid-column: 1/2;
    border: 2px solid #2BB3C0;
    filter: drop-shadow(0px 4px 13px #61234E);
    border-radius: 20px;
    padding: 5px;
    font-family: "Ubuntu";
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    h2 {
      font-size: 1.7rem;
    }
    & ul {
      display: flex;
      flex-direction: column;
      gap: 25px;
      font-size: 1.6rem;
    }
    & li {
      padding: 10px;
      span {
        font-size: 2.0rem;
        color: #2BB3C0;
        font-family: fantasy;
      }
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-column: 1/2;
    & ul {
      display: flex;
      flex-direction: column;
      gap: 35px;
      font-family: "Ubuntu";
    }
    & li {
      font-size: 1.8rem;
    }
    & span {
      color: #2BB3C0;
      position: relative;
    }
  }

  .subtitle {
    font-family: "Ubuntu";
    font-size: 4rem;
  }
  .img {
    border-radius: 20px;
    overflow: hidden;
    max-width: 85%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>