<template>
  <div class="page-home">
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div class="row">
        <div v-for="book in books" class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="well">
            <strong>{{ book.volumeInfo.title }}</strong>
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
    let api = 'https://www.googleapis.com/books/v1/volumes?q=harry&maxResults=3'
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
</style>
