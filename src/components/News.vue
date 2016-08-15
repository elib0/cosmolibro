<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <h4 class="text-uppercase text-center title">
    Novedades
    <small>(Desarrollo cosmo libro)</small>
  </h4>
    <table class="news">
      <tbody>
        <tr v-for="n in news">
          <td><img width="50px" src="{{ n.author.avatar_url }}" class="profile-photo"></td>
          <td><strong>{{ n.commit.message }}</strong></td>
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
      console.log(this.news)
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
