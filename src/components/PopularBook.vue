<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <h4 class="text-uppercase text-center">El libro del mes</h4>
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="">
  </div>
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    <p class="book-description">{{ book.volumeInfo.description || 'Sin Desciprcion' }}</p>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      book: {}
    }
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=php&maxResults=1&orderBy=relevance'
    this.$root.$http.get(api).then(res => {
      let book = res.json()
      this.book = book.items[0]
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="sass" scoped>
  .book-description
    height: 10em;
    text-align: justify;
    text-justify: inter-word;
    overflow: hidden
</style>
