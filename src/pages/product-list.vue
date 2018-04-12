<template>
  <div>
    <pro-list :id='id'></pro-list>
  </div>
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
      id:'',
      prolist:[

      ]
    }
  },
  watch:{
    '$route':function(to,from){
      if(to.params.listid){
        this.id=to.params.listid
      }
      
      // alert(this.id)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
