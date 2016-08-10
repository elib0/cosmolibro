<template>
<div class="well">
    <h4 class="text-center">Contactanos</h4>
    <form>
        <div class="form-group">
            <label for="email">Correo Electronico</label>
            <input type="email" v-model="email" class="form-control">
        </div>
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