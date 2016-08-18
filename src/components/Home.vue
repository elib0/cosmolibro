<template>
  <section class="home-component">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <section class="row">
          <home-products :max-results="6" modal-view></home-products>
        </section>
        <section class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <popular></popular>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <news></news>
          </div>
        </section>
    </div>
  </section>
</template>

<script>
import popular from './PopularBook'
import news from './News'
import products from './Products'

export default {
  data () {
    return {
      zoomModal: true
    }
  },
  components: {
    'home-products': products,
    popular,
    news
  }
}
</script>

<style lang="sass" scoped>
  .home-component > div > *
    background-color: white
    min-height: 300px
    section
      margin-bottom: 2em

  .book
    cursor: pointer
    .book-description
      height: 6rem;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      overflow: hidden;
</style>
