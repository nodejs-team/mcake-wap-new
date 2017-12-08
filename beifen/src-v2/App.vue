<template>
  <div id="app">

    <div id="evt_loading" style="display:none;">0%</div>

    <div class="evt_content" style="display:none;">
      <div class="vue-header"><my-header></my-header></div>

      <div class="marginTop"></div>
      <div class="vue-container">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>
    <!--<img src="./assets/logo.png">-->

  </div>
</template>


<script>
import $ from 'jquery'
import header from './components/header'
import navBar from './components/navBar'
export default {
  components: {
    myHeader: header,
    navBar: navBar
  },
  data () {
    return {
      msg: '测试'
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    test: function (event) {
      $('p').fadeOut();
      console.log(2222);
    },
    init: function (event) {
      $('#evt_loading').fadeOut();
      $('.evt_content').fadeIn();
      console.log('页面加载完成执行');
    }
  }
}
</script>

<style>

</style>
