<template>
  <div class="page-home">
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <section class="row">
          <div v-for="book in books" class="col-xs-4 col-sm-4 col-md-4 col-lg-4 book" @click="showDetails($index)">
            <div class="text-center">
              <h5 class="book-title">
                <strong>{{ book.volumeInfo.title }}</strong>
              </h5>
              <img class="book-image" height="180" :src="book.volumeInfo.imageLinks.smallThumbnail" alt="{{ book.volumeInfo.title }}">
              <!-- <span class="label label-info">paginas:{{ book.volumeInfo.pageCount }}</span> -->
              <p class="book-description">{{ book.volumeInfo.description || 'Sin Desciprcion' }}</p>
              <button type="button" class="btn btn-success btn-xs btn-block" @click="addToCart(book.id)">Agregar al carrito</button>
            </div>
          </div>
        </section>
        <section class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <popular></popular>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h4>NOVEDADES</h4>
          </div>
        </section>
    </div>
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <login></login>
    </div>
  </div>
</template>

<script>
import popular from './PopularBook'
import Login from './Login'
import modal from 'vue-strap'

export default {
  data () {
    return {
      books: [],
      zoomModal: true
    }
  },
  components: {
    Login,
    modal,
    popular
  },
  compiled: function () {
    this.$root.$refs.spinner.show()
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=harry&maxResults=3&orderBy=relevance'
    this.$root.$http.get(api).then(res => {
      let books = res.json()
      this.books = books.items
      this.$root.$refs.spinner.hide()
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    addToCart: function (id) {
      this.$root.cart.push(id)
    },
    showDetails: function (id) {
      this.zoomModal = true
    }
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
