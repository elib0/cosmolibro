<template>
<div class="well col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
    <h4 class="text-center">Contactanos</h4>
    <form>
        <div class="form-group">
            <label for="email">Nombre:</label>
            <input type="text" v-model="name" class="form-control">
        </div>
        <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" v-model="email" class="form-control">
        </div>
        <div class="form-group">
            <label for="email">Teléfono</label>s
            <input type="number" v-model="phone" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Mensaje</label>
            <textarea v-model="message" class="form-control"></textarea>
        </div>
        <button type="button" class="btn btn-danger">Enviar</button>
    </form>
</div>
</template>

<script>
export default {

  data () {
    return {
      email: ''
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
