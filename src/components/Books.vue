<template>
  <div class="component-books">
    <products></products>
  </div>
</template>

<script>
import products  from "./Products";
export default {
  replace: false,
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
.component-books
  background-color: #FFF
</style>
