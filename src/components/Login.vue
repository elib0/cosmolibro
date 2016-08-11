<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <div v-if="!logged">
    <h4 class="text-center">Mi cuenta:</h4>
    <form class="form" action="#" @submit.prevent="login">
      <div class="form-group">
        <label >Usuario:</label>
        <input type="text" class="form-control" v-model="user.nick">
      </div>
      <div class="form-group">
        <label>Contraseña:</label>
        <input type="password" class="form-control" v-model="user.password">
      </div>
      <button type="submit" class="btn btn-info btn-sm">Entrar</button>
      <p class="text-center">
        <small>
          <a href="#">¿Olvido su contraseña?</a>
          <br>
          <a href="#">Registrarse</a>
        </small>
      </p>
    </form>
  </div>
  <div class="text-center" v-else>
    <h4>Bienvenido:</h4>
    <p>{{ user.nick }}</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        nick: '',
        password: null
      },
      logged: false
    }
  },
  methods: {
    login: function () {
      this.logged = true
    }
  }
}
</script>

<style lang="sass" scoped>
  h4.text-center
    font-weight: bold
</style>
