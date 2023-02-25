<template>
  <client-only>
    <div @click="isExpand" ref="wrap" class="ui-kit-drop">
      <span class="title" ref="title">{{titleText}}</span>
        <div ref="list" class="ui-kit-drop-list">
          {{props.text}}
        </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const props = defineProps({
  text: String
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
      wrap.value.style.height = `${wrap.value.offsetHeight + list.value.offsetHeight}px`
    }
    console.log(1)
  }
  else {
    if(wrap.value) {
      wrap.value.style.height = `28px`
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
.ui-kit-drop {
  overflow: hidden;
  height: 28px;
  transition: 1s;
  border: 1px solid;
  cursor: pointer;
}

.title {
  display: block;
  padding: 5px;
}

.ui-kit-drop-list {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
</style>