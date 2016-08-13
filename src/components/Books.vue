<template>
  <div class="book-list">
    <products maxresults="12"></products>
  </div>
</template>

<script>
import products  from "./Products";
export default {
  data () {
    return {
      perPage: 12
    };
  }
};
</script>

<style lang="sass" scoped>

.book-list
  background-color: #FFF

</style>
