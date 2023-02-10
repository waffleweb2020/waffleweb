<template>
  <button :class="className" class="button">{{title}}</button>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const props = defineProps({
  title: {
    type: String,
    default: 'Связаться'
  },
  theme: {
    type: String,
    default: () => 'light'
  }
})

const className = ref('button-light')
const themes = ref([
  {title: 'light', className: 'button-light'},
  {title: 'dark', className: 'button-dark'},
])
onMounted(() => {
  const theme = themes.value.find(theme => theme.title === props.theme)
  if(theme) {
    className.value = theme.className
  }
})
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 30px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: 1s;
  font-size: 18px;
  font-family: 'Ubuntu';
}
</style>