<template>
<form>
  <div class="input-group">
    <typeahead
      placeholder="Buscar un libro"
      key="results"
      src="https://maps.googleapis.com/maps/api/geocode/json?address="
      :on-hit="googleCallback">
    </typeahead>
    <span class="input-group-btn">
      <button class="btn btn-default" type="button"><i class="glyphicon glyphicon-search"></i></button>
    </span>
  </div>
</form>
</template>

<script>
import { typeahead } from 'vue-strap'

export default {
  data () {
    return {
      term: ''
    }
  },
  components: {
    typeahead
  },
  methods: {
    googleCallback (items, targetVM) {
      const that = targetVM
      that.reset()
      that.query = items.formatted_address
    }
  }
}
</script>

<style lang="sass" scoped>
form
  margin-bottom: 5px
</style>
