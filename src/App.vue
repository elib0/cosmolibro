<template>
  <!-- Cargador -->
  <spinner text="Cargando Libros" id="spinner-box" :fixed="true" v-ref:spinner></spinner>

  <div class="container-fluid">
    <!-- Mensajes de alerta -->
    <alert :show.sync="alert.show" :duration="alert.duration" placement="top" :type="alert.type" dismissable v-ref:alert>
      <strong>{{ alert.response.title }}</strong> {{ alert.response.message }}
    </alert>
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <menu></menu>
        </div>
      </div>
      <div class="row wrapper">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view class="view" transition="route" transition-mode="out-in" keep-alive></router-view>
        </div>
      </div>
    </div>
  </div>
  <footer class="text-center">
    Todos los derechos 2016 - 2017 reservados, Cosmo Libro C.A.
  </footer>
</template>

<script>
// import StoreProduct from './utiles/store.js'
import Menu from './components/Menu.vue'
import { alert, spinner } from 'vue-strap'

export default {
  replace: false,
  data () {
    return {
      alert: {
        show: false,
        type: 'danger',
        duration: 3000,
        response: {
          title: null,
          message: null
        }
      },
      user: null,
      cart: [],
      cartIds: {}
    }
  },
  watch: {
    cart: {
      handler: function (cart) {
        // StoreProduct.save('cosmolibro', cart)
      },
      deep: true
    }
  },
  components: {
    Menu,
    alert,
    spinner
  }
}
</script>

<style lang="less">
@import "../node_modules/animate.css/animate.min.css";
@import "./bootstrap.less";
</style>

<style lang="sass">
@import "./app.sass"

.view
  transition: all .5s ease

.route-enter, .route-leave
  opacity: 0
  transform: translate3d(10px, 0, 0)
</style>

<style lang="sass" scoped>
.modal.zoom.in
  color: #333
</style>
