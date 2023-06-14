<template>
  <h1 @click="handleHeadingClick">My name is {{name}}, I am {{age}} years old</h1>
  <MyButton @button-clicked="showAlert" text="my button text"></MyButton>
  <directives></directives>
</template>


<script setup>

import {ref} from "vue";
import MyButton from "@/components/MyButton.vue";
import Directives from "@/components/directives.vue";
    const name=ref('jubayer');
    const age=ref(27);

const handleHeadingClick=()=>
{
  name.value='sakib'
  age.value=30
}

const showAlert=(newAge)=>
{
  alert('Child button was clicked');

  age.value=40;
}

// export default {
//   setup()
//    {
//     const name=ref('jubayer');
//     const age=ref(27);
//
//     const handleHeadingClick=()=>
//     {
//       name.value='sakib'
//       age.value=30
//     }
//     return {name,age,handleHeadingClick};
//   }
// }
</script>



