import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
import app from './App'

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

// Instalamos Plugin Vue
Vue.use(VueRouter)

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
