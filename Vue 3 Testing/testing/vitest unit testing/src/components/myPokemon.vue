<script setup lang="ts">
import {ref} from "vue";
const pokemons=ref([]);
async function getPokemon(){
  const data=await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemon=await data.json();
  pokemons.value=pokemon.results;

  console.log(pokemon);
}
</script>

<template>
  <div>
    <button @click="getPokemon">
      Get Pokemon
    </button>
    <div v-for="(pokemon,idx) in pokemons" :key="idx">
      <h4 :key="idx">{{pokemon.name}}</h4>
    </div>
  </div>

</template>