<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" v-if="news.length > 0">
  <h4 class="text-uppercase text-center title">
    Novedades
    <small>(Desarrollo cosmo libro)</small>
  </h4>
    <table class="news">
      <tbody>
        <tr v-for="n in news">
          <td><img width="50px" :src="n.author.avatar_url" class="profile-photo"></td>
          <td><strong><a href="{{ n.html_url }}" target="_blank">{{ n.commit.message }}</a></strong> - <small>{{ n.commit.author.date | date '%d/%m/%Y %r' }}</small></td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {

  data () {
    return {
      news: []
    }
  },
  ready: function () {
    let api = 'https://api.github.com/repos/elib0/cosmolibro/commits'
    this.$root.$http.get(api).then(res => {
      this.news = res.json().slice(0, 4)
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

  .news td
    padding: 5px


  .profile-photo
    border-radius: 50%
</style>
