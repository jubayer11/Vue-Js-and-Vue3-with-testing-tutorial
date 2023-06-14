<template>
  <div>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>

    <slot></slot>
  </div>
</template>

<script>
import {computed,inject,onBeforeMount,onMounted,onUnmounted} from 'vue';

export default {
  props: ['firstName','lastName'],
  setup(props,context){
    const uName=computed(function(){
      return props.firstName+' '+props.lastName;
    })
    console.log(context);
    onBeforeMount(function(){
      console.log('on before mount')
    });
    onMounted(function(){
      console.log('on mounted');
    })

    onUnmounted(function(){
      console.log('on unmount')
    });


    context.emit('username',uName);

    const age=inject('userAge');
    //this.$emit('username',1)
    return {userName:uName,age}
  }
};
</script>