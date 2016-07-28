<template>
  <div class="container-fluid">
    <alert :show.sync="showModal" :duration="3000" placement="top" type="warning" dismissable>
      <strong>Titulo</strong> Mensaje
    </alert>
    <div>
      <menu></menu>
      <div class="row wrapper">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view transition-mode="out-in" keep-alive></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import search from './components/Search'
import { alert } from 'vue-strap'

export default {
  replace: false,
  data () {
    return {
      showModal: false,
      reponse: null
    }
  },
  components: {
    Menu,
    alert,
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
