import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './route-config'
import app from './App'

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

// Instalamos Plugin Vue
Vue.use(VueRouter)
Vue.use(VueResource)

// Transiciones
Vue.transition('bounce', {
  enterClass: 'bounceInLeft',
  leaveClass: 'bounceOutRight'
})

// Creamos rutas
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// Mapeo de Rutas
configRouter(router)

// boostrap the app
const App = Vue.extend(app)
router.start(App, 'body')

// just for debugging
window.router = router
