<template>
  <spinner text="Cargando Libros" id="spinner-box" :fixed="true" v-ref:spinner></spinner>
  <div class="container-fluid">
    <alert :show.sync="showModal" :duration="3000" placement="top" type="warning" dismissable>
      <strong>Titulo</strong> Mensaje
    </alert>
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <menu></menu>
        </div>
      </div>
      <div class="row wrapper">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view class="animated" transition-mode="bounce" keep-alive></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import { alert, spinner } from 'vue-strap'

export default {
  replace: false,
  data () {
    return {
      showModal: false,
      reponse: null,
      books: null
    }
  },
  components: {
    Menu,
    alert,
    spinner
  },
  compiled: function () {
    this.$refs.spinner.show()
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=all'
    this.$http.get(api).then(res => {
      let books = res.json().items
      this.books = books.items
      this.$refs.spinner.hide()
      console.log(this.books)
    }).catch(err => {
      console.log(err)
    })
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
