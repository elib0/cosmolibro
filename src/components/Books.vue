<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 books-component">
    <products-list></products-list>
  </div>
</template>

<script>
import products  from "./Products";

export default {
  data () {
    return {
    }
  },
  components: {
  	'products-list': products
  }
}
</script>

<style lang="sass" scoped>
.books-component
  background-color: #FFF
</style>
