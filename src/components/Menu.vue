<template>
  <div class="component-menu">
    <div>
      <h1 class="text-center"><strong>Logo de la empresa</strong></h1>
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
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

      <!-- //Derecha -->
      <li slot="right" class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mi cuenta<span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-login">
          <li><login></login></li>
        </ul>
      </li>
      <li  slot="right">
        <a v-link="{ path:'/cart' }" class="cart"><span class="badge animated" :class="{'pulse':newItem}">{{ cart.length }}</span><i class="glyphicon glyphicon-shopping-cart"></i>
        </a>
      </li>
    </navbar>
  </div>
</template>

<script>
import { navbar } from 'vue-strap'
import search from './Search.vue'
import login from './Login'

export default {

  data () {
    return {
      cart: [],
      newItem: false
    }
  },
  components: {
    login,
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
.dropdown
  .dropdown-login
    width: 500px
</style>
