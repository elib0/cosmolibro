<template>
  <!-- Cargador -->
  <spinner text="Cargando Libros" id="spinner-box" :fixed="true" v-ref:spinner></spinner>

  <!-- Modal General -->
  <modal :show.sync="modal.show" :effect="modal.effect" :width="modal.width" v-ref:modal>
    <div slot="modal-title" class="modal-title">{{ modal.book.volumeInfo.title }}</div>
    <div slot="modal-body" class="modal-body">
      <img class="book-image" height="180" :src="modal.book.volumeInfo.imageLinks.smallThumbnail" alt="{{ modal.book.volumeInfo.title }}">
      {{ modal.book.volumeInfo.description }}
      <span class="label label-info">N° paginas:{{ modal.book.volumeInfo.pageCount }}</span>
      <span class="label label-primary">Año de publicacion:{{ modal.book.volumeInfo.publishedDate }}</span>
      <span class="label label-warning">
        Autor(es):
        <span v-for="author in modal.book.volumeInfo.authors">{{ author }}, </span>
      </span>
    </div>
    <div slot="modal-footer" class="modal-footer">
      <div class="btn-group">
        <button type="button" class="btn btn-success" @click="addToCart"><i class="glyphicon glyphicon-shopping-cart"></i></button>
        <button type="button" class="btn btn-danger" @click="modal.show = false">Cerrar Ventana</button>
        <button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-gift"></i></button>
      </div>
    </div>
  </modal>

  <div class="container-fluid">
    <!-- Mensajes de alerta -->
    <alert :show.sync="alert.show" :duration="alert.duration" placement="top" :type="alert.type" dismissable v-ref:alert>
      <strong>{{ alert.title }}</strong> {{ alert.message }}
    </alert>
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <menu></menu>
        </div>
      </div>
      <div class="row wrapper">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <router-view class="animated" transition-mode="out-in" keep-alive></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import { alert, spinner, modal } from 'vue-strap'

export default {
  replace: false,
  data () {
    return {
      alert: {
        show: false,
        type: 'alert',
        duration: 3000
      },
      modal: {
        show: false,
        effect: 'zoom',
        width: '50%',
        book: null
      },
      reponse: null,
      cart: []
    }
  },
  methods: {
    addToCart: function () {
      this.cart.push(this.modal.book.id)
    }
  },
  components: {
    Menu,
    alert,
    spinner,
    modal
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

<style lang="sass" scoped>
.modal.zoom.in
  color: #333
</style>
