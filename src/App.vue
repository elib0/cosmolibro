<template>
  <div class="container-fluid">
    <alert :show.sync="showModal" :duration="3000" placement="top" type="warning" dismissable>
      <strong>Titulo</strong> Mensaje
    </alert>
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div>
            <h1 class="text-center"><strong>Logo de la empresa</strong></h1>
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
                  <search></search>
                </div>
            </div>
          </div>
          <navbar placement="static" class="block-center">
            <li><a v-link="{ path:'/home' }">Inicio</a></li>
            <li><a v-link="{ path:'/books' }">Libros</a></li>
            <li><a v-link="{ path:'/ebooks' }">E-Books</a></li>
            <li><a v-link="{ path:'/hello' }">Promociones</a></li>
            <li><a v-link="{ path:'/contact' }">Contacto</a></li>
            <li><a v-link="{ path:'/buys' }">Mis Compras</a></li>
            <li>
              <a v-link="{ path:'/car' }"><span class="badge" v-text="0"></span><i class="glyphicon glyphicon-shopping-cart"></i>
              </a>
            </li>
          </navbar>
        </div>
      </div>
      <div class="row wrapper">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view transition-mode="out-in" keep-alive></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import search from './components/Search'
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
    navbar,
    search
  }
}
</script>

<style lang="less">
@import "../node_modules/animate.css/animate.min.css";
@import "./bootstrap.less";
</style>

<style lang="sass">
@import "./app.sass"
</style>
