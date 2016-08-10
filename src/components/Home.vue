<template>
  <div class="page-home">
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div class="row">
        <div v-for="book in books" class="col-xs-4 col-sm-4 col-md-4 col-lg-4 book">
          <div class="well">
            <h5 class="text-center">
              <strong>{{ book.volumeInfo.title }}</strong>
            </h5>
            <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="{{ book.volumeInfo.title }}">
            <span class="label label-info">paginas:{{ book.volumeInfo.pageCount }}</span>
            <p class="text-center book-description">{{ book.volumeInfo.description || 'Sin Desciprcion' }}</p>
            <button type="button" class="btn btn-success btn-block">Agregar al carrito</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          Libro del mes
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          Novedades
        </div>
      </div>
    </div>
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <login></login>
    </div>
  </div>
</template>

<script>
import Login from './Login'

export default {
  data () {
    return {
      books: []
    }
  },
  components: {
    Login
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
  }
}
</script>

<style lang="sass" scoped>
  .page-home > div > *
    background-color: white

  .book
    .well
      min-height: 450px
    .book-description
      width: 100%;
      height: 10em;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      overflow: hidden;
</style>
