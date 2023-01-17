<template>
  <div @click="isOpened = true" class="card">
    <div class="title">{{item.title}}</div>
    <p class="subtitle">{{item.subtitle}}</p>
  </div>
  <div v-if="isOpened" class="modal">
    <div class="modal-window">
      <div class="detail">
        <div v-for="detail of details" :key="detail.id" :class="{'detail-item-pro': detail.plan !== 'Классический'}" class="detail-item">
          <span class="detail-item-plan">
            {{detail.plan}}
            <span v-if="detail.plan === 'Классический'" class="detail-classic">
              <img src="/img/star.svg" alt="star">
            </span>

            <span v-else class="detail-classic">
              <img src="/img/star2.svg" alt="star">
              <img src="/img/star2.svg" alt="star">
            </span>
          </span>

          <span class="detail-item-result">Результат:</span>

          <ul class="detail-list">
            <li v-for="detail_item of detail.items" :key="detail_item" :class="{'detail-list-item-pro': detail.plan !== 'Классический'}" class="detail-list-item">{{detail_item}}</li>
          </ul>

          <span class="detail-item-price">{{detail.price}}</span>

          <button class="button">
            Связаться
          </button>
        </div>
      </div>
    </div>
    <div @click="isOpened = false" class="modal-bg"></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const props = defineProps<{item: {id: number, title: string, subtitle: string}}>()

const isOpened = ref(false)

const detailsDB = ref([
  {id: 1, productId: 1, plan: 'Классический', price: 'От 39000 рублей',
    items:[
        "Создание товаров", "Создание поиска", "Создание фильтрации", "Создание дизайна", "Создание CMS"
    ]
  },
  {id: 2, productId: 1, plan: 'Продвинутый',price: 'Средняя цена - 65000 рублей',
    items:[
      "Создание личного кабинета", "Создание расширенной фильтрации", "Создание избранных товаров", "Создание дополнительного функционала"
    ]
  },
  {id: 3, productId: 2, plan: 'Классический', price: 'От 35999 рублей',
    items:[
      "Создание кабинета администратора", "Создание до 8 вкладок", "Базовая статистика", "Фирменная стилизация", "Создание до двух ролей прав"
    ]
  },
  {id: 4, productId: 2, plan: 'Продвинутый', price: 'Средняя цена - 55999 рублей',
    items:[
     "Создание более 8 вкладок", "Расширенная статистика", "Создание более двух ролей прав", "Создание дополнительного функционала"
    ]
  },

  {id: 5, productId: 3, plan: 'Классический', price: 'От 25999 рублей',
    items:[
      "Создание до 8 блоков", "Создание блока обратной связи с пользователем", "Классический вид страницы", "Наличие визуальных эффектов","Версии под разрешения монитора, планшета, телефона"
    ]
  },
  {id: 6, productId: 3, plan: 'Продвинутый', price: 'Средняя цена - 39999 рублей',
    items:[
      "Создание более 8 блоков",  "Дизайнерский вид страницы", "Наличие сложных визуальных эффектов", "Полная проверка изображения на всех разрешениях экрана", "Создание дополнительного функционала"
    ]
  },
  {id: 7, productId: 4, plan: 'Классический', price: 'От 15999 рублей',
    items:[
      "Простой функционал бота", "Создание до 4 дней", "Создание до 8 функций", "Создание административной панели"
    ]
  },
  {id: 8, productId: 4, plan: 'Продвинутый', price: 'От 25999 рублей',
    items:[
      "Сложный функционал бота", "Создание до 7 дней", "Создание более 8 функций", "Создание возможности открытия сторонних страниц в боте", " Создание дополнительного функционала"
    ]
  },
  {id: 9, productId: 5, plan: 'Классический',  price: 'От 22999 рублей',
    items:[
      "Создание дизайнов для различных устройств", "Создание до 7 страниц", "Учёт всех особенностей вашего бизнеса", "Создание дизайна по вашему эскизу"
    ]
  },
])

const details = computed<{id: number, productId: number, plan: string, items: string[]}[]>(() => detailsDB.value.filter(detail => detail.productId === props.item.id))
</script>

<style lang="scss" scoped>
  .card {
    background: url("/img/bg-product.svg") no-repeat center/cover;
    border: 2px solid #4D0049;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
    transition: 1s;
    &:hover {
      transform: scale(1.2);
      z-index: 2;
    }
    &:after {
      display: flex;
      content: 'Рассмотреть детали';
      color: transparent;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      transition: 1s;
      font-size: 25px;
      font-family: "Ubuntu";
    }
    &:nth-child(1) {
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-row: 1;
      grid-column: 2/4;
    }
    &:nth-child(3) {
      grid-column: 1/3;
    }
    &:nth-child(5) {
      grid-row: 1/3;
    }
  }
  .title {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
  }

  .subtitle {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
  }

  .card:hover::after{
    background: rgba(16, 14, 14, 0.78);
    color: #fff;
  }

  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    &-window {
      z-index: 2;
      position: relative;
      width: 60%;
    }
    &-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(16, 14, 14, 0.99);
    }
  }

  .detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    position: relative;
    &-classic {
      position: absolute;
      display: block;
      height: 20px;
      width: max-content;
      right: 15px;
      top: 10px;
      display: flex;
      gap: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-item {
      border: double 10px transparent;
      border-radius: 30px;
      background-image: linear-gradient( #141414,  #141414), linear-gradient(180deg, #F7B100 0%, #6b3516 100%);
      background-origin: border-box;
      background-clip: content-box, border-box;
      overflow: hidden;
      display: grid;
      grid-template-rows: 14% 6% 53% 8% 8%;
      gap: 15px;
      box-sizing: border-box;
      position: relative;
      &-pro {
        background-image: linear-gradient( #141414,  #141414), linear-gradient(180deg, #9E0674 0%, #007D85 100%);
      }
      &-plan {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("/img/detail_item_bg.svg") no-repeat center/cover;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
      }
      &-result {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        text-decoration-line: underline;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-price {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        background-image: linear-gradient(45deg, #e88400, #af4261);
        background-size: 100%;
        background-repeat: repeat;

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      &-item {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #0F0E0E;
        height: 70px;
        gap: 20px;
        padding: 0 10px;
        &:before {
          content: '';
          display: block;
          background: url("/img/star.svg") no-repeat center/cover;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        &-pro {
          &:before {
            content: '';
            display: block;
            background: url("/img/star2.svg") no-repeat center/cover;
            width: 20px;
            height: 20px;
          }
        }
      }
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
    justify-self: center;
    align-self: center;
    font-family: "Ubuntu";
    &:hover {
      background: #fff;
      border: 1px solid #100e0e;
      color: #100e0e;
    }
  }

</style>