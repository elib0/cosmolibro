<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <h4 class="text-uppercase text-center title">El libro del mes</h4>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <img :src="book.volumeInfo.imageLinks.smallThumbnail" >
  </div>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <p class="book-description">
      {{ book.volumeInfo.description || 'Sin Desciprcion' }}
    </p>
    <div class="text-center">
      <a href="#">Leer Mas...</a>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      book: {
        volumeInfo: {
          description: null,
          imageLinks: {
            smallThumbnail: ''
          }
        }
      }
    }
  },
  ready: function () {
    let api = 'https://www.googleapis.com/books/v1/volumes?q=javascrip&maxResults=1&orderBy=relevance'
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
  .title
    background-color: #004b8c;
    padding: 0.4em;
    color: white;
    font-weight: bold;
    border-radius: 5px;

  .book-description
    height: 10em;
    text-align: center;
    overflow: hidden
</style>
