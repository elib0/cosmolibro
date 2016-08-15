<template>
  <div class="page-home">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <section class="row">
          <products :max-results="3"></products>
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
  </div>
</template>

<script>
import popular from './PopularBook'
import news from './News'
import products from './Products'
import modal from 'vue-strap'

export default {
  data () {
    return {
      zoomModal: true
    }
  },
  components: {
    products,
    modal,
    popular,
    news
  }
}
</script>

<style lang="sass" scoped>
  .page-home > div > *
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
