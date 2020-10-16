<template>
  
  
  <div id="app">
    
    <AppNavigation/>
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png">
  
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
