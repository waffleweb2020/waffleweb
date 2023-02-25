<template>
  <div>
    <div v-if="props.modelValue < 6">
      <button v-for="item in computedLength" :key="item" :class="{'active': props.modelValue === item}" @click="setPage(item)">{{item}}</button>
    </div>

    <div v-else-if="props.modelValue >= 6 && props.modelValue <= props.length - 4 ">
      <button  @click="setPage(1)">1</button>
      <button>...</button>
      <button  @click="setPage(props.modelValue -1)">{{props.modelValue -1}}</button>
      <button class="active" @click="setPage(props.modelValue)">{{props.modelValue }}</button>
      <button  @click="setPage(props.modelValue + 1)">{{props.modelValue + 1 }}</button>
      <button >...</button>
      <button @click="setPage(props.length)">{{props.length}}</button>
    </div>

    <div v-else>
      <button  @click="setPage(1)">1</button>
      <button >...</button>
      <button :class="{'active': props.modelValue === props.length -4}" @click="setPage(props.length -4)">{{props.length -4}}</button>
      <button :class="{'active': props.modelValue === props.length -3}" @click="setPage(props.length - 3)">{{props.length -3 }}</button>
      <button :class="{'active': props.modelValue === props.length -2}" @click="setPage(props.length - 2)">{{props.length -2}}</button>
      <button :class="{'active': props.modelValue === props.length -1}" @click="setPage(props.length - 1)">{{props.length -1}}</button>
      <button :class="{'active': props.modelValue === props.length }" @click="setPage(props.length)">{{props.length}}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "@vue/reactivity";

const props = defineProps({
  modelValue: Number,
  length: Number
})
const emit = defineEmits(['update:modelValue'])

function setPage(pageIndex: number) {
  emit('update:modelValue', pageIndex)
}

const computedLength = computed(() => {
  if (props.length! <= 5) {
    return props.length!
  }
  return 6
})
</script>

<style scoped>
  .active {
    background: #3a3ae3;
  }
</style>