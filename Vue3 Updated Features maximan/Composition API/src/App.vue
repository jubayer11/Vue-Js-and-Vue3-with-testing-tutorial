<template>
  <section class="container">
    <user-data :first-name='firstName' :last-name='lastName'  class='container'></user-data>
    <p>{{uAge}}</p>
    <button @click='setAge'> chnage</button>
<h1>{{user.name}}</h1>
    <div>
      <input type='text' placeholder='first name' @input='setFirstName'>
      <input type='text' placeholder='Last Name' ref='lastNameInput'>
      <input type='text' placeholder='age' v-model='age'>
      <button @click='setLastName'> Set Last Name</button>
    </div>
  </section>
</template>

<script>

import { reactive,ref,isRef,isReactive,toRefs,computed,watch,provide } from 'vue';
import userData from '@/components/userData.vue';

export default {
  components:{
    userData
  },
  // data() {
  //   return {
  //     userName: 'jubayer',
  //   };
  // },

  setup()
  {
    // const uname=ref('jubayer');

    const uAge =ref(31);
    const firstName=ref('');
    const lastName=ref('');
    const lastNameInput=ref(null);
    const user=reactive({
      name:'jubayer',
      age:'Ahmed'
    })
    console.log(isRef(uAge),isReactive(user));



    setTimeout(function(){
      // user.value='Ahmed'

      user.name='shohan'
      user.age='reza'

    },2000);
    const userRefs=toRefs(user);
    function setNewAge()
    {
      uAge.value=32;
    }

    function setFirstName(event)
    {
      firstName.value=event.target.value;
    }

    function setLastName( )
    {

      //with options API lastName.value=this.$refs.lastNameInput.value;
      //composition API
      lastName.value=lastNameInput.value.value;

      console.log(lastNameInput);


    }
    const userName=computed(function(){
      return firstName.value+' '+lastName.value;
    });

    watch([uAge,userName],function(newValues,oldValues){
      console.log('old Age'+ oldValues[0])
      console.log('new Age'+newValues[0]);
      console.log('old Name'+ oldValues[1])
      console.log('New Name'+newValues[1]);
    })

    provide('userAge',uAge);
    return {user:user,firstName,lastName,userName,age:userRefs.age,setAge:setNewAge,setFirstName:setFirstName,setLastName,uAge,lastNameInput}
  } };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>