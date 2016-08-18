<template>
  <div class="products-component">
    <bs-alert :show.sync="alert.show" :duration="5000" type="success" dismissable>
      <strong>"{{ alert.productAdded.volumeInfo.title }}"</strong>
      <br><small class="text-danger">¡Agregado al carrito de compras!</small>
      <div class="pull-right">
        <a v-link="{ path:'/cart' }" class="btn btn-default">Ir al Carrito</a>
        <button type="button" class="btn btn-warning">Proceder con la compra: ({{ cart.length }} Producto(s))</button>
      </div>
    </bs-alert>
    <!-- Modal Detalles -->
    <modal :title="modal.product.volumeInfo.title" :show.sync="modal.show" :effect="modal.effect" :width="modal.width">
      <div slot="modal-body" class="modal-body">
        <img class="book-image" height="180" :src="modal.product.volumeInfo.imageLinks.smallThumbnail" alt="{{ modal.product.volumeInfo.title }}">
        {{ modal.product.volumeInfo.description || 'Sin descripción' }}<br>
        <span class="label label-info">N° paginas:{{ modal.product.volumeInfo.pageCount }}</span>
        <span class="label label-primary">Año de publicación:{{ modal.product.volumeInfo.publishedDate }}</span>
        <span class="label label-warning">
          Autor(es):
          <span v-for="author in modal.product.volumeInfo.authors">{{ author }}, </span>
        </span>
      </div>
      <div slot="modal-footer" class="modal-footer">
        <div class="btn-group">
          <button type="button" class="btn btn-success" @click="addToCart(null)"><i class="glyphicon glyphicon-shopping-cart"></i></button>
          <a class="btn btn-primary" v-link="{ path: '/book/' + modal.product.id }">Ver mas detalles</a>
          <button type="button" class="btn btn-danger" @click="modal.show = false">Cerrar Ventana</button>
          <button type="button" class="btn btn-success"><i class="glyphicon glyphicon-gift"></i></button>
        </div>
      </div>
    </modal>

    <div v-for="product in products" track-by="id" class="col-xs-6 col-sm-6 col-md-4 col-lg-4 product">
      <!-- <tooltip
        trigger="hover"
        effect="scale"
        placement="top"
        content="{{ product.volumeInfo.title }}">
      </tooltip> -->
      <div class="text-center">
        <div @click="showDetails($index)">
          <img class="product-image" height="180" :src="product.volumeInfo.imageLinks.smallThumbnail" alt="{{ product.volumeInfo.title }}">
          <p class="product-description">{{ product.volumeInfo.description || 'Sin descripción' }}</p>
        </div>
        <button type="button" class="btn btn-success btn-xs btn-block" @click="addToCart(product)">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>
<script>
import { tooltip, modal, alert } from 'vue-strap'

var defaultProduct = {
  volumeInfo: {
    title: null,
    imageLinks: {
      smallThumbnail: null
    },
    description: null
  }
}

export default {
  props: {
    modalView: {
      type: Boolean,
      default: false
    },
    maxResults: {
      type: Number,
      default: 12
    }
  },
  data () {
    return {
      cart: [],
      cartIds: {},
      products: [],
      api: {
        query: null,
        maxResults: 12,
        order: 'relevance'
      },
      modal: {
        show: false,
        effect: 'zoom',
        width: '80%',
        product: defaultProduct
      },
      alert: {
        show: false,
        productAdded: defaultProduct
      }
    }
  },
  components: {
    tooltip,
    modal,
    'bs-alert': alert
  },
  compiled: function () {
    this.$root.$refs.spinner.show() // Mostramos cargador

    this.cart = this.$root.cart
    this.cartIds = this.$root.cartIds
    this.api.maxResults = this.maxResults
  },
  ready: function () {
    this.fetchProducts()
  },
  route: {
    data: function (transition) {
      this.fetchProducts()
    }
  },
  methods: {
    addToCart: function (product) {
      let pro = product || this.modal.product
      if (this.cartIds[pro.id]) {
        this.cartIds[pro.id].quantity += 1
      } else {
        pro.quantity = 1
        pro.price = (Math.random() * 40000) + 1
        this.cartIds[pro.id] = true
        this.cart.push(pro)
      }
      if (this.modal.show) {
        this.modal.show = false
      }
      this.alert.show = true
      this.alert.productAdded = pro
    },
    showDetails: function (id) {
      if (this.modalView) {
        this.modal.product = this.products[id]
        this.modal.show = true
      } else {
        this.$router.go({ path: '/book/' + this.products[id].id })
      }
    },
    fetchProducts: function () {
      var terms = ['comida', 'flores', 'tecnologia', 'autos', 'paisajes', 'paises', 'dibujo', 'aviones', 'computacion', 'casas', 'china', 'castellano', 'historia', 'deportes']
      var term = terms[Math.floor((Math.random() * (terms.length - 1)) + 1)]
      this.api.query = term

      let api = 'https://www.googleapis.com/books/v1/volumes?q=' + this.api.query + '&maxResults=' + this.maxResults + '&orderBy=' + this.api.order
      return this.$http.get(api).then(res => {
        this.$root.$refs.spinner.hide()
        let products = res.json()
        this.products = products.items
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.product
  cursor: pointer
  margin: 5px 0
  .product-description
    height: 6rem;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
</style>
