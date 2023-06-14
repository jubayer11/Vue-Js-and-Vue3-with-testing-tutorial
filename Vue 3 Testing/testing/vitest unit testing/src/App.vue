<script setup lang="ts">
import ViewTesting from "@/components/ViewTesting.vue";
import MyPokemon from "@/components/myPokemon.vue";


</script>

<template>
<div>
  Hello World
  <h1></h1>
  
  <ViewTesting element="div">
    Hello from View
  </ViewTesting>
  <br/>

  <my-pokemon>

  </my-pokemon>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
