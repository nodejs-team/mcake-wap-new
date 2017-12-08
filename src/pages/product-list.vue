<template>
  <pro-list></pro-list>
</template>

<script>
import footer from '../components/footer'
import proList from '../components/pro-list'
export default {
  name: 'list',
  components: {
    myFooter: footer,
    proList
  },
  data () {
    return {
      prolist:[

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
