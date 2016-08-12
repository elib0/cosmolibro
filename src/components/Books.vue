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
        <button type="button" class="btn btn-success btn-xs btn-block" @click="addToCart(book.id)">Agregar al carrito</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      books: [],
      api: {
        q: 'harry',
        max: 3,
        order: 'relevance'
      }
    }
  },
  compiled: function () {
    this.$root.$refs.spinner.show()
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=' + this.api.q + '&maxResults=' + this.api.max + '&orderBy=' + this.api.order
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