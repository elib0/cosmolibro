<template>
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <h4 class="text-center">Mi cuenta:</h4>
  <form class="form">
    <div class="form-group">
      <label >Usuario:</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Contraseña:</label>
      <input type="password" class="form-control">
    </div>
    <button type="button" class="btn btn-info btn-sm">Entrar</button>
    <p class="text-center">
      <small>
        <a href="#">¿Olvido su contraseña?</a>
        <br>
        <a href="#">Registrarse</a>
      </small>
    </p>
  </form>
</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
  h4.text-center
    font-weight: bold
</style>
