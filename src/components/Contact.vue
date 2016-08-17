<template>
<div class="well col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
    <h4 class="text-center">Contactanos</h4>
    <form @submit.prevent="submitForm">
        <bs-input
          :value.sync="nombre"
          label="Nombre"
          help="Solo Letras y espacios son permitidos"
          minlength="3"
          required
        ></bs-input>

        <bs-input
          :value.sync="email"
          label="E-Mail"
          type="email"
          help="Solo formato de correo electronico es permitido"
          minlength="3"
          required
        ></bs-input>

        <bs-input
          :value.sync="telefono"
          type="number"
          label="Telefono"
          help="Solo numeros son permitidos"
          pattern="^[0-9]+$"
          minlength="10"
        ></bs-input>

        <bs-input
          :value.sync="message"
          type="textarea"
          label="Mensaje"
        ></bs-input>        <button type="button" class="btn btn-danger">Enviar</button>
    </form>
</div>
</template>

<script>
import { input } from 'vue-strap'

export default {

  data () {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    submitForm: function () {

    }
  },
  components: {
    'bs-input': input
  }
}
</script>

<style lang="sass" scoped>
</style>
