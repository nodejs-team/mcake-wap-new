<template>
  <div class="detail">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import footer from '../components/footer'
export default {
  name: 'detail',
  components: {
    myFooter: footer
  },
  data () {
    return {
      msg: '产品详情页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
