<template>
  <div class="city">
    <div class="content">
      <div class="city-icon">
        <div class="info icon iconsfont icons-dingwei"></div>
        <p>请选择您所在的城市</p>
      </div>
      <ul class="lists">
        <li class="on"><span>上海</span><b>Shanghai</b> <i class="icon iconsfont icons-gengduo"></i></li>
        <li><span>杭州</span><b>Hangzhou</b> <i class="icon iconsfont icons-gengduo"></i></li>
        <li><span>苏州</span><b>Suzhou</b> <i class="icon iconsfont icons-gengduo"></i></li>
        <li><span>北京</span><b>Beijing</b> <i class="icon iconsfont icons-gengduo"></i></li>
      </ul>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      msg: '首页',
      popShow: false,
      show: false
    }
  },
  mounted(){
    this.init();
  },
  methods: {
    greet: function (event) {

    },
    alert: function (event) {

    },
    pop: function (event) {

    },
    init: function (event) {
      $(".lists li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
      });
    }
  }
}
</script>



<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }





</style>
