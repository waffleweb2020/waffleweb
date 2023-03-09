<template>
  <div :class="{'contact-active': isMounted}" class="contact">
    <div class="container">
      <form @submit.prevent="sendData" class="form">
        <div class="info">
          <h1>Сообщите нам Ваши пожелания и мы обязательно свяжемся с Вами</h1>
        </div>

        <div class="inputs-block">
          <div class="inputs">
            <div class="input-wrap">
              <UiInput v-model="name" name="name" placeholder="Ваше имя?*"/>
            </div>

            <div class="input-wrap">
              <div class="toggle">
                <span :class="{'active': inputData.title === 'Email'}" @click="toggleInput('Email')">Email</span> /
                <span :class="{'active': inputData.title === 'Телефон'}" @click="toggleInput('Телефон')">Телефон</span>
              </div>
              <client-only v-if="inputData.title === 'Телефон'">
                <UiInput v-model="phone" type="phone" name="phone" :placeholder="inputData.placeholder"/>
              </client-only>

              <UiInput v-else v-model="phone" type="text" name="email" :placeholder="inputData.placeholder"/>
            </div>

            <textarea v-model="comment" placeholder="Введите ваш комментарий"></textarea>

            <div v-if="errors.length > 0" class="errors">
              <span v-for="error of errors" :key="error">{{error}}</span>
            </div>
            <div v-if="success">{{success}}</div>

            <UiButton v-if="isLoading" theme="dark" title="Загрузка..." :style="{justifySelf: 'flex-end'}"/>
            <UiButton v-else theme="dark" title="Начать разработку" :style="{justifySelf: 'flex-end'}"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "@vue/reactivity";
import UiInput from "~/ui/UiInput.vue";
import UiButton from "~/ui/UiButton.vue";
import axios from "axios";
const phone = ref('')

const name = ref('')

const email = ref('')

const comment = ref('')

const success = ref('')

const errors = ref<string[]>([])

const isLoading = ref(false)

const inputsData = ref([
  {title: 'Email', placeholder: 'Ваш email'},
  {title: 'Телефон', placeholder: 'Ваш телефон'},
])

const inputData = reactive({
  title: 'Email', placeholder: 'Ваш email'
})

function toggleInput(title: string) {
  const input = inputsData.value.find(data => data.title === title)
  if(input) {
    inputData.title = input.title
    inputData.placeholder = input.placeholder
  }
}

async function sendData() {
    await axios.post('/api/user', {
      name: name.value,
      number: phone.value || '',
      comment: comment.value
    }).then(resp => {
      name.value = ''
      phone.value = ''
      email.value = ''
      comment.value = ''
      errors.value = []
      success.value = 'Мы с Вами свяжемся в ближайшее время'
    }).then(() => {
          setTimeout(()=>{
            success.value = ''
          }, 2000)
        }).catch(e => {
      errors.value = [...e.response.data]
    }).finally(() => isLoading.value = false)
}

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
function test(event) {
  console.log(event)
}
</script>

<style lang="scss" scoped>
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(25%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .contact-active {
    animation-name: show;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .contact {
    position: relative;
    height: 100%;
    padding: 80px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(-50%);
    @media screen and (max-width: 1024px){
      padding: 80px 10px;
    }
    & .button {
      @media screen and (max-width: 585px) {
        justify-self: center !important;
      }
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: calc(300px + 30vmax);
      height: calc(300px + 30vmax);
      background: linear-gradient(313deg, rgba(243, 175, 0, 0.55) 0%, rgba(173, 173, 173, 0) 100%);
      border-radius: 50%;
      bottom: -30%;
      left: -10%;
    }
  }
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 2px 10px #000;
    @media screen and (max-width: 1024px) {
      overflow: scroll;
      grid-template-rows: 400px 400px;
      grid-template-columns: 1fr;
    }
    &:before {
      content: "КОНТАКТЫ";
      display: block;
      position: absolute;
      color: #232323;
      -webkit-text-fill-color: #232323;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgb(255 255 255 / 18%);
      font-size: 248px;
      font-family: "Ubuntu";
      bottom: -15%;
      line-height: 85%;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }
  .info {
    background: #232323;
    padding: 20px;
    display: flex;
    align-items: center;
    h1 {
      font-family: Ubuntu;
      font-size: 40px;
      font-weight: 300;
      text-align: center;
      color: #fff;
    }
  }
  .inputs-block {
    background: #fff;
    display: flex;
    align-items: center;
  }

  .inputs {
    padding: 20px;
    display: grid;
    grid-template-areas: 'f l' 't t' 't t' '. b';
    gap: 20px;
    height: 40%;
    width: 100%;
    font-size: 24px;
    color: #232323;
    @media screen and (max-width: 1024px) {
      grid-template-areas:
        "f"
        "l"
        "t"
        "t"
        "t"
        "t"
        "b";
      gap: 25px;
    }
  }
  .input-wrap {
    position: relative;
    &:first-child {
      grid-area: f;
    }
    &:last-child {
      grid-area: l;
    }
  }
  .toggle {
    position: absolute;
    color: #232323;
    top: -50%;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 5px;
    align-items: center;
    & span {
      color: rgba(35, 35, 35, 0.47);
      font-family: 'Ubuntu';
      font-size: 15px;
      cursor: pointer;
    }
    & .active {
      font-weight: 900;
    }
  }
  input {
    color: #232323;
    padding: 10px;
    box-sizing: border-box;
  }
  textarea {
    grid-area: t;
    color: #232323;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #232323;
  }
  button {
    grid-area: b;
  }
  .errors {
    span {
      color: darkred;
      font-family: 'Ubuntu';
      font-size: 16px;
    }
  }
</style>