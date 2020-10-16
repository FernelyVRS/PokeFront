<template>
    <div id="pokemon">

        <div class="card">
        <div class="card-image">
            <figure>
            <img :src="pokemon.front" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">           
           <div class="media">
            <div class="media-content">
                <p class="title is-4">{{name | upper}}</p>
                <p class="subtitle is-6">{{ pokemon.type }}</p>
            </div>
            </div>
            <div class="content">
                <button class="button is-small is-fullwidth" @click="saveFile">Descargar datos</button>
            </div>
        </div>
        </div>


    </div>
</template>

<script>
//import DescargaData from './DescargaData';

//import jspdf from 'jspdf'
//importando datos de api 
import axios from 'axios';
export default {
    
    created: function(){
        axios.get(this.url).then(res=>{
            this.pokemon.type = res.data.types[0].type.name;
            this.pokemon.name= res.data.name;
            this.pokemon.ability = res.data.abilities[0].ability.name;
            this.pokemon.front = res.data.sprites.front_default;
            
        })
    },
    data(){
        return {
            pokemon: {
                ability:'',
                type: '',
                front:''
            }
        }
    },
    props:{
        num:Number,
        name: String,
        url: String
    },
    filters:{
        upper: function(value){
            var newName = value[0].toUpperCase() + value.slice(1);
            return newName;
        }
    },
    components: {
        //DescargaData
  },
  methods:{
      
      
         saveFile() {
            
            const data = ["Nombre: "+this.pokemon.name, " Tipo: "+this.pokemon.type, " Habilidad: "+this.pokemon.ability,]
            const blob = new Blob([data], {type: 'text/plain'})
            const e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
            a.download = "test.txt";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        }
  
  }
}
</script>

<style scope>
    #pokemon{
        margin-top: 2%;
        
    }
</style>