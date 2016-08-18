<template>
  <section>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product-component" v-if="product">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
        <img class="product-image" :src="product.volumeInfo.imageLinks.small" alt="{{ product.volumeInfo.title }}">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <h2>{{ product.volumeInfo.title }}<small v-if="product.volumeInfo.subtitle"> - {{ product.volumeInfo.subtitle }}</small></h2>
          <h4 class="text-success">Disponible</h4>
          <p>{{ product.volumeInfo.description || 'Sin Descripción' }}</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 product-options text-center">
          <bs-input
            :value.sync="product.quantity"
            type="number"
            label="Cantidad"
            pattern="^[1-9]+$"
          ></bs-input>
          <button class="btn btn-warning" type="button"><i class="glyphicon glyphicon-shopping-cart"></i> <span class="hidde-md">Agregar al carrito</span></button>
          <hr>
          <checkbox type="primary" :checked.sync="product.gift" value="one">Es un regalo ?</checkbox>
          <hr>
          Agregar a lista de deseos
        </div>
      </div>
      <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
        <h3>Detalles</h3>
        <table class="table">
          <tbody>
            <tr v-for="detail in ['authors','language','pageCount','printType','publishedDate','publisher']">
              <td class="info" style="width: 100px">{{ detail }}</td>
              <td>{{ product.volumeInfo[detail] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { input, checkbox } from 'vue-strap'

export default {

  name: 'product',

  data () {
    return {
      cart: [],
      cartIds: [],
      product: null
    }
  },
  components: {
    'bs-input': input,
    checkbox
  },
  compiled: function () {
    this.$root.$refs.spinner.show() // Mostramos cargador
  },
  methods: {
    addToCart: function () {
      if (this.cartIds[this.product.id]) {
        this.cartIds[this.product.id].quantity += 1
      } else {
        this.product.price = (Math.random() * 40000) + 1
        this.cartIds[this.product.id] = true
        this.cart.push(this.product)
      }
    }
  },
  route: {
    data: function (transition) {
      let api = 'https://www.googleapis.com/books/v1/volumes/' + this.$router._currentRoute.params.productId
      return this.$http.get(api).then(res => {
        this.product = res.json()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  events: {
    'route-data-loaded': function () {
      this.$root.$refs.spinner.hide()
    }
  }
}
</script>

<style lang="sass" scoped>
.product-component
  background-color: #fff
  .product-options
    margin: 2em 0
    border: 1px solid #CCC
    border-radius: 5px
    min-height: 400px
    background: hsla(0,0%,95%,1);
    box-shadow: -1px 1px 6px;
  .product-image
    min-height: 400px
    max-height: 500px
</style>