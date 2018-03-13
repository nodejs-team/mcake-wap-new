<template>
  <div class="container-wrap">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'users',
  props: [],
  components: {
  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false
    }
  },
  mounted(){

  },
  methods:{

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';
</style>
