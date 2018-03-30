<template>

<div>
  <div class="marginBottom"></div>
  <mt-popup v-model="isNavShow" position="left">

    <div class="navBar">
      <div class="marginTop"></div>
      <mt-cell title="全部商品" icon="navIcon icon iconsfont icons-navall" is-link></mt-cell>
      <mt-cell title="拿破仑" icon="navIcon icon iconsfont icons-nav-napolun" is-link></mt-cell>
      <mt-cell title="鲜奶" icon="navIcon icon iconsfont icons-nav-nai" is-link></mt-cell>
      <mt-cell title="慕斯" icon="navIcon icon iconsfont icons-nav-ms" is-link></mt-cell>
      <mt-cell title="芝士" icon="navIcon icon iconsfont icons-nav-zs" is-link></mt-cell>
      <mt-cell title="咖啡" icon="navIcon icon iconsfont icons-nav-kafa" is-link></mt-cell>
      <mt-cell title="坚果" icon="navIcon icon iconsfont icons-nav-jiaguo" is-link></mt-cell>
      <mt-cell title="水果" icon="navIcon icon iconsfont icons-nav-food" is-link></mt-cell>
      <mt-cell title="冰激凌" icon="navIcon icon iconsfont icons-nav-bjl" is-link></mt-cell>
    </div>
  </mt-popup>

  <div class="footer">
    <ul>
      <li @click="isNavShow = !isNavShow"><span>精选</span></li><em></em>
      <li @click="isNavShow = false"><router-link :to="{ name: 'list'}" tag="span">蛋糕</router-link></li><em></em>
      <li @click="isNavShow = false"><router-link :to="{ name: 'list'}" tag="span">小食</router-link></li><em></em>
      <li @click="isNavShow = false"><router-link :to="{ name: 'cart'}" tag="span">购物车<i class="icon-badge"><b>50</b></i></router-link></li>

     <!-- <li @click="isNavShow = false">
        <router-link :to="{ name: 'usersIndex'}" tag="span">我<i class="icon-badge"><b>332</b></i></router-link>
     </li> -->
      <!--<li @click="isNavShow = false"><router-link :to="{ name: 'demo'}" tag="span">demo</router-link></li>-->

    </ul>

  </div>
</div>

</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      msg: '尾部导航',
      isNavShow: false
    }
  },
  props:['msgFather'],
  methods: {
    navToggle: function (event) {
      console.log(2222);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
