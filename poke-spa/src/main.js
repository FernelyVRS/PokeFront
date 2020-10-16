import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "../node_modules/bulma/css/bulma.css"


// compo
import  AppNavigation from './components/AppNavigation';
import Hello from './components/HelloWorld'
import NotFound404 from './components/NotFound404'

Vue.component("AppNavigation", AppNavigation);
Vue.component('HW', Hello)
Vue.component('not', NotFound404)

// Rutas 

Vue.use(VueRouter);

const routes = [
  {path: '/', component:AppNavigation},
  {path: '/hw', component:Hello},
  {path: '*', component:NotFound404}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
