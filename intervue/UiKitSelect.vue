<template>
  <client-only>
    <div @click="isExpand" class="ui-kit-select">
      <span class="title" ref="title">{{titleText}}</span>
      <div ref="wrap" class="list-wrap">
        <ul ref="list" class="ui-kit-select-list">
          <li v-for="item of props.list" :key="item.id" @click="setTitle({title: item.title, emitType: item[props.emitType]})">{{item.title}}</li>
        </ul>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const props = defineProps({
  list: {
    type: Array
  },
  emitType: String
})

const emit = defineEmits(['update:modelValue'])
const list = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const wrap = ref<HTMLElement | null>(null)

const titleText = ref('Выберите')

const isExpanded = ref(false)

function isExpand() {
  isExpanded.value = !isExpanded.value
  if(isExpanded.value) {
    if(wrap.value && list.value) {
      wrap.value.style.height = `${list.value.offsetHeight}px`
    }
    console.log(1)
  }
  else {
    if(wrap.value) {
      wrap.value.style.height = `0px`
    }
    console.log(2)
  }
}

function setTitle(obj:{title: string, emitType: any}) {
  emit('update:modelValue',obj.emitType)
  titleText.value = obj.title
}

</script>

<style scoped>
  .ui-kit-select {
    border: 1px solid;
    position: relative;
  }

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid;
    position: absolute;
  }

  .list-wrap {
    position: relative;
    height: 0;
    overflow: hidden;
  }

  .title {
    display: block;
    padding: 5px;
  }
</style>