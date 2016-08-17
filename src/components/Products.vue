<template>
  <div class="component-products">
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
          <button type="button" class="btn btn-danger" @click="modal.show = false">Cerrar Ventana</button>
          <button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-gift"></i></button>
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
import { tooltip, modal } from 'vue-strap'

var defaultProduct = {
  volumeInfo: {
    title: null,
    imageLinks: {
      smallThumbnail: null
    },
    description: null
  }
}

var terms = ['comida', 'flores', 'tecnologia', 'autos', 'paisajes', 'paises', 'cuentos', 'aviones', 'computacion']
var term = terms[Math.floor((Math.random() * (terms.length - 1)) + 1)]

export default {
  props: {
    'maxResults': {
      type: Number,
      default: 12
    },
    'query': {
      type: String,
      default: term
    },
    'order': {
      type: String,
      default: 'relevance'
    },
    modalView: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      cart: [],
      cartIds: {},
      products: [],
      modal: {
        show: false,
        effect: 'zoom',
        width: '90%',
        product: defaultProduct
      }
    }
  },
  components: {
    tooltip,
    modal
  },
  compiled: function () {
    this.cart = this.$root.cart
    this.cartIds = this.$root.cartIds
    this.$root.$refs.spinner.show()
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=' + this.maxResults + '&orderBy=' + this.order
    this.$http.get(api).then(res => {
      let products = res.json()
      this.products = products.items
      this.$root.$refs.spinner.hide()
    }).catch(err => {
      console.log(err)
    })
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
    },
    showDetails: function (id) {
      console.log(this.modalView)
      if (this.modalView) {
        this.modal.product = this.products[id]
        this.modal.show = true
      } else {
        console.log('redireccionando a detalle')
      }
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
