<template>
  <div class="page-home">
    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <section class="row">
          <books></books>
        </section>
        <section class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <popular></popular>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h4>NOVEDADES</h4>
          </div>
        </section>
    </div>
    <div class="hidden-xs hidde-sm col-md-3 col-lg-3">
      <login></login>
    </div>
  </div>
</template>

<script>
import popular from './PopularBook'
import books from './Books'
import Login from './Login'
import modal from 'vue-strap'

export default {
  data () {
    return {
      zoomModal: true
    }
  },
  components: {
    Login,
    books,
    modal,
    popular
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
