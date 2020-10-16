<template>
  <div id="app">
      <div class="column is-half is-offset-one-quarter">
        <div v-for="(poke,index) in pokemons" :key="index">
              <Pokemon :name="poke.name" :url="poke.url" :num="index+1"/>
        </div>
      </div>
    
  </div>
</template>

<script>
import Pokemon from './Pokemon'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      pokemons:[]
    }
  },
  created:function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(res => {
      console.log(res.data.results);
      this.pokemons = res.data.results;
    })
  },
  components: {
    Pokemon
  }
}
</script>

<style>
</style>