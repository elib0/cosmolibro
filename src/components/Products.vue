<template>
    <div v-for="book in books" class="col-xs-6 col-sm-6 col-md-4 col-lg-4 book">
      <div class="text-center">
        <div @click="showDetails($index)">
          <h5 class="book-title">
            <strong>{{ book.volumeInfo.title }}</strong>
          </h5>
          <img class="book-image" height="180" :src="book.volumeInfo.imageLinks.smallThumbnail" alt="{{ book.volumeInfo.title }}">
          <p class="book-description">{{ book.volumeInfo.description || 'Sin descripción' }}</p>
        </div>
        <button type="button" class="btn btn-success btn-xs btn-block" @click="addToCart(book)">Agregar al carrito</button>
      </div>
    </div>
</template>
<script>
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
    }
  },
  data () {
    return {
      books: [],
      book: {
        volumeInfo: {
          title: null,
          imageLinks: null,
          description: null
        }
      }
    }
  },
  compiled: function () {
    this.$root.$refs.spinner.show()
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=' + this.maxResults + '&orderBy=' + this.order
    this.$root.$http.get(api).then(res => {
      let books = res.json()
      this.books = books.items
      this.$root.$refs.spinner.hide()
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    addToCart: function (book) {
      this.$root.cart.push(book)
    },
    showDetails: function (id) {
      this.$root.modal.show = true
      this.$root.modal.book = this.books[id]
    }
  }
}
</script>

<style lang="sass" scoped>
.book
  cursor: pointer
  .book-description
    height: 6rem;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
</style>
