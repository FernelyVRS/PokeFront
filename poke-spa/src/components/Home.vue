<template>
  <div id="home">

      <div class="column is-half is-offset-one-quarter">

        <h4 class="is-size-3">Pokebusqueda</h4>
        <input class="input is-rounded" type="text" placeholder="Buscar por nombre (Ej: pikachu)" v-model="buscar">
        <!--<button id="btnBuscar" class="button is-fullwidth is-danger">Buscar</button>-->
        <div v-for="(poke,index) in resultadoBusqueda" :key="index">
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
      pokemons:[],
      buscar: ''
    }
  },
  //consumiendo api 
  created:function(){
    axios.get("https://localhost:44379/api/pokemon").then(res => {
      this.pokemons = res.data.results;
    })
  },
  components: {
    Pokemon
  },
  computed:{
      resultadoBusqueda: function(){
          if(this.buscar =='' || this.buscar== ' '){
              return this.pokemons;
          }else{
              return this.pokemons.filter(pokemon => pokemon.name == this.buscar)
          }
      }
  }
}
</script>
    
<style scoped>
    #home{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #btnBuscar{
       margin-top: 2%; 
    }
    
</style>