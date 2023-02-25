<template>
  <div class="ui-kit-textarea">
    <textarea
        @input="emit('update:modelValue', $event.target.value)"
        id="text"></textarea>
    <label
        :class="{'label-focused': modelValue.length > 0}"
        for="text"
    >label</label>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  modelValue: String
})
const emit = defineEmits( ['update:modelValue'],)

</script>

<style scoped>
  .ui-kit-textarea {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    border-bottom: 1px solid #232323;
  }
  .label-focused {
    transform: translateY(-70%);
  }
  .ui-kit-textarea:hover {
    background: #ece9e9;
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
  }
  label {
    position: absolute;
    top: 15px;
    left: 10px;
    color: #939191;
    transition: 0.2s;
  }
  textarea:focus + label {
    transform: translateY(-70%);
  }
</style>