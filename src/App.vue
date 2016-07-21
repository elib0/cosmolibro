<template>
  <div class="container">
    <alert :show.sync="showModal" :duration="3000" placement="top" type="warning" dismissable>
      <strong>Titulo</strong> Mensaje
    </alert>
    <div class="row" id="app">
      <img class="logo" src="./assets/logo.png">
      <nav>
        .logo
      </nav>
      <navbar>
        <li><a v-link="{ path:'/hello' }">Inicio</a></li>
        <li><a v-link="{ path:'/books' }">Libros</a></li>
        <li><a v-link="{ path:'/ebooks' }">E-Books</a></li>
        <li><a v-link="{ path:'/hello' }">Promociones</a></li>
        <li><a v-link="{ path:'/contact' }">Contacto</a></li>
        <li><a v-link="{ path:'/buys' }">Mis Compras</a></li>
        <li><a v-link="{ path:'/car' }"><i class="glyphicon glyphicon-shopping-cart"></i></a></li>
      </navbar>
      <router-view transition-mode="out-in" keep-alive></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import { alert, navbar } from 'vue-strap'

export default {
  replace: false,
  data () {
    return {
      showModal: false,
      reponse: null
    }
  },
  components: {
    Hello,
    alert,
    navbar
  }
}
</script>

<style lang="sass">
  .logo
    height: 2em
</style>
