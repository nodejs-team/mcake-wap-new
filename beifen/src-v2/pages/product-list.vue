<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <my-footer></my-footer>
  </div>
</template>

<script>
import footer from '../components/footer'
export default {
  name: 'list',
  components: {
    myFooter: footer
  },
  data () {
    return {
      msg: '产品列表'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
