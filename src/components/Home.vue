<template>
  <div class="page-home">
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div class="row">Arriba</div>
      <div class="row">Abajo</div>
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
    }
  },
  components: {
    Login
  },
  ready: function () {
    console.log(this)
  }
}
</script>

<style lang="sass" scoped>
  .page-home > div > *
    background-color: white
</style>
