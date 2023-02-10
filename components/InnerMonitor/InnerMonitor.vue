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
    <div class="main">
      <p class="subtitle">Мы создаем весь цикл разработки:</p>
      <ul>
        <li>Обсуждая с Вами, мы разрабатываем <span>дизайн Вашего проекта</span> </li>
        <li>Бонусом, вы получаете <span>разработанную</span> под ваши интересы <br> <span>админную панель</span>, включающую создание контента и аналитики </li>
        <li>Вы получаете проект, адекватно <span>отображающийся</span> на всех основных видах экранах - <span>мониторах, планшетах и мобильных телефонов</span> </li>
        <li>Если Вы нуждаетесь в небольшом функционале, <span>хорошим аналогом</span> на сегодняшний день являются <span>телеграм-боты</span>, создаваемые нами под ваши нужды</li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "InnerMonitor"
}
</script>

<style lang="scss">
  .display {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px max-content max-content 50px;
    padding: 20px;
    row-gap: 50px;
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
        &:before {
          content: '';
          display: block;
          width: 100%;
          background: #2BB3C0;
          height: 2px;
          position: absolute;
          top: 105%;
          left: 0;
        }
      }
    }

    .subtitle {
      font-family: "Ubuntu";
      font-size: 4rem;
    }
    .img {
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>