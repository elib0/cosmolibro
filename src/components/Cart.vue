<template>
  <div class="component-cart">
    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 cart" v-show="cart.length > 0">
      <h3><strong>Carro de Compras</strong></h3>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Precio</th>
            <th class="text-right">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cart" track-by="id"  class="animated" transition="bounce">
            <td>
              <div class="col-xs-6 col-sm-6 col-md-3 col-lg-2">
                <img height="150" :src="product.volumeInfo.imageLinks.smallThumbnail" alt="">
              </div>
              <div class="col-xs-6 col-sm-6 col-md-9 col-lg-10">
                <h4><strong>{{ product.volumeInfo.title }}</strong></h4>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-danger btn-xs" @click="cart.$remove(product)">Borrar</button>
                  <button type="button" class="btn btn-warning btn-xs">Obsequiar</button>
                  <button type="button" class="btn btn-primary btn-xs">Guardar para después</button>
                </div>
              </div>

            </td>
            <td><strong class="text-warning">{{ product.price | currency }}</strong></td>
            <td class="text-right form-inline">
              <input class="form-control product-quantity" min="0" type="number" v-model="product.quantity" number>
            </td>
          </tr>
          <tr>
            <td></td>
            <td colspan="2">
              <h4><strong>Sub Total ({{ cart.length }}): {{ subTotal | currency }}</strong></h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 cart" v-show="cart.length > 0">
    Checkout
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cart" v-else>
    <h1 class="text-center">No tienes artículos en el carrito. <a v-link="{ path:'/#' }" title="Ir de compras">Ir de compras</a></h1>
    </div>
  </div>
</template>

<script>
export default {

  name: 'cart',

  data () {
    return {
      cart: []
    }
  },
  computed: {
    subTotal: function () {
      let subtotal = 0
      for (var i = 0; i < this.cart.length; i++) {
        subtotal += this.cart[i].price * this.cart[i].quantity
      }
      return subtotal
    },
    totalItems: function () {
      let count = 0
      for (var i = 0; i < this.cart.length; i++) {
        count += this.cart[i].quantity
      }
      return count
    }
  },
  compiled () {
    this.cart = this.$root.cart
  }
}
</script>

<style lang="sass" scoped>
.cart
  background-color: #FFF
  .product-quantity
    width: 7em;
</style>
