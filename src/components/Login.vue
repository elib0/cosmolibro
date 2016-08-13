<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 login">
  <div v-if="!logged">
    <h4 class="text-center">Iniciar Sesión:</h4>
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
    <ul>
      <li><a href="#">Mis compras</a></li>
      <li><a href="#" @click.prevent="logout">Salir</a></li>
    </ul>
  </div>
</div>
</template>

<script>
var defaulUser = {
  nick: '',
  password: null
}

export default {

  name: 'login',

  data () {
    return {
      user: defaulUser,
      logged: false
    }
  },
  methods: {
    login: function () {
      if (this.user.nick !== '' && this.user.password) {
        this.logged = true
      }
    },
    logout: function () {
      this.logged = false
      this.user = defaulUser
    }
  }
}
</script>

<style lang="sass" scoped>
  .login
    color: #333

  h4.text-center
    font-weight: bold
</style>
