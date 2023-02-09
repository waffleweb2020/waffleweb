<template>
  <div  v-if="type === 'phone'" class="ui-input">
    <input
        v-mask="'+7(###)-###-##-##'"
        :id="name"
        :type='type'
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
    />
    <label :for="name" :class="{'label-active': modelValue.length > 0}">{{placeholder}}</label>
  </div>
  <div v-else class="ui-input">
    <input
        :id="name"
        :type='type'
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
    />
    <label :for="name" :class="{'label-active': modelValue.length > 0}">{{placeholder}}</label>
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/reactivity";

const props = defineProps({
  type: {
    type: String,
    default: () => 'text'
  },
  name: {
    type: String
  },
  placeholder: {
    type: String
  },
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const text = ref('')
</script>

<style lang="scss" scoped>
.ui-input {
  position: relative;
  width: 100%;
  height: 100%;
}
input {
  position: relative;
  z-index: 1;
  background: transparent;
  border: none;
  border-left: 1px solid #232323;
  border-bottom: 1px solid #232323;
  &:focus + label {
    transform: translateY(0);
    top: -40%;
    font-size: 18px;
  }
}
label {
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 0;
  transform: translateY(-50%);
  z-index: 0;
  transition: 1s;
}
.label-active {
  transform: translateY(0);
  top: -40%;
  font-size: 18px;
}
</style>