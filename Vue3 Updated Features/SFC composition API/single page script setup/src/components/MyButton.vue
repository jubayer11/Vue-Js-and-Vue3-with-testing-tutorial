<template>
  <button @click="$emit('buttonClicked',29)">
    {{text}}
  </button>
</template>

<script setup>
const props=defineProps({
  text:{
    type:String,
    default:'no Text Specified',
  }
})

const emit=defineEmits(['buttonClicked'])

</script>