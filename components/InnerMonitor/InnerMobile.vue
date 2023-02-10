<template>
  <div class="display">
    <div class="header">Что вы получаете?</div>

    <div class="aside" >
      <h2 >Преимущества</h2>
      <ul>
        <li >Наличие веб-сайта поднимает ваш бизнес на <span>новый уровень</span></li>
        <li ><span>38%</span> людей перестанут изучать сайт, если контент покажется им непривлекательным</li>
        <li >Качественное представление вас в интернете <span>повышает приверженность</span> будущих клиентов к вашему бизнесу</li>
        <li ><span>48%</span> пользователей считают, что если сайт компании не адаптирован к просмотру на мобильных гаджетах,
          это можно расценивать как отсутствие заботы о покупателях, что негативно отражается на потребительском
          доверии
        </li>
        <li ><span>90%</span> людей последовательно используют экраны разного разрешения
        </li>
      </ul>
    </div>

    <div class="main" data-aos="fade-left" data-aos-duration="1500">
      <p class="subtitle">Вы экономите ваше время и деньги:</p>
      <ul>
        <li>Оплата происходит <span>после сдачи проектов</span>, указанных в договоре</li>

        <li>Весь процесс разработки с первого дня располагается на сервере,
          где <span>Вы сможете контролировать работу</span>
        </li>

        <li>Среднее время выполнения заказа - <span>27 дней</span></li>

        <li>Любые правки и корректировки документируются, что <span>исключает навязывание</span> дополнительных услуг пост-фактум</li>
      </ul>
    </div>
    <div class="footer">
      <nuxt-link to="/create"> <UiButton title="Наши услуги"/> </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from '~/ui/UiButton.vue'
</script>

<style lang="scss" scoped>
.display {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px max-content max-content 50px;
  padding: 10px 20px 50px 20px;
  row-gap: 20px;
  @media screen and (max-width: 585px) {
    grid-template-rows: 50px max-content max-content 90px;
  }
  .header {
    grid-column: 1/3;
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
    font-size: 3rem;
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
.footer {
  grid-row: 4;
  justify-self: center;
}
</style>