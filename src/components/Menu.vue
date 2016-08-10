<template>
  <div>
    <h1 class="text-center"><strong>Logo de la empresa</strong></h1>
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
          <search></search>
        </div>
    </div>
  </div>
  <navbar placement="static" class="block-center">
    <li><a v-link="{ path:'/#' }">Inicio</a></li>
    <li><a v-link="{ path:'/books' }">Libros</a></li>
    <li><a v-link="{ path:'/ebooks' }">E-Books</a></li>
    <li><a v-link="{ path:'/hello' }">Promociones</a></li>
    <li><a v-link="{ path:'/contact' }">Contacto</a></li>
    <li><a v-link="{ path:'/buys' }">Mis Compras</a></li>
    <li>
      <a v-link="{ path:'/car' }" class="cart"><span class="badge animated" transition="bounce">{{ cart.length }}</span><i class="glyphicon glyphicon-shopping-cart"></i>
      </a>
    </li>
  </navbar>
</template>

<script>
import { navbar } from 'vue-strap'
import search from './Search.vue'

var animate = {
  enterClass: 'pulse',
  leaveClass: 'shake'
}

console.log(animate)

export default {

  name: 'menu',

  data () {
    return {
      cart: []
    }
  },
  components: {
    navbar,
    search
  },
  ready: function () {
    this.cart = this.$root.cart
  }
}
</script>

<style lang="sass" scoped>
.navbar-nav > li > a
  font-size: 1.5em;
  font-weight: bold;
  height: 50px;
.cart .badge
  position: absolute
  top: 8px;
  z-index: 2;
  right: 3px;
</style>