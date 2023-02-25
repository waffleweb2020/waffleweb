<template>
  <div class="ui-kit-input">
    <input @input="emit('update:modelValue', $event.target.value)" @blur="focusedInput" id="id" :type="type"/>
    <label :class="{'label-active': isFocused}" for="id">{{placeholder}}</label>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "@vue/reactivity";

  const props = defineProps({
    modelValue: String,
    placeholder: {
      type: String,
      default: () => 'Введите данные'
    },
    type: {
      type: String,
      default: () => 'text'
    }
  })

  const emit = defineEmits( ['update:modelValue'],)
  const isFocused = ref(false)
  const text = ref('')

  function focusedInput() {
    if(props.modelValue && props.modelValue.length > 0) {
      return isFocused.value = true
    }
    return isFocused.value = false
  }
</script>

<style>
  .ui-kit-input {
    width: 100%;
    position: relative;
    height: 100%;
    border: 1px solid #464646;
    background: #fff;
    padding: 0 10px;
  }

  .ui-kit-input:hover {
    border: 1px solid #3a3ae3;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0;
  }


  label {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    transition: 0.2s;
    color: #a19393;
    background: inherit;
    padding: 0 5px;
    z-index: 1;

  }

  input:focus + label {
    transform: translateY(-180%) scale(0.7);
    color: #3a3ae3;
  }
  .label-active {
    transform: translateY(-180%) scale(0.7);
  }
</style>