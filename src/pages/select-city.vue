<template>
  <div class="city">
    <div class="content" :style='{height:height}'>
      <div class="city-icon">
        <div class="info icon iconsfont icons-dingwei"></div>
        <p>请选择您所在的城市</p>
      </div>
      <ul class="lists">
        <li class="on" @click='select_city("上海")'><span>上海</span><b>Shanghai</b> <i class="icon iconsfont icons-gengduo"></i></li>
        <li @click='select_city("杭州")'><span>杭州</span><b>Hangzhou</b> <i class="icon iconsfont icons-gengduo"></i></li>
        <li @click='select_city("苏州")'><span>苏州</span><b>Suzhou</b> <i class="icon iconsfont icons-gengduo"></i></li>
        <li @click='select_city("北京")'><span>北京</span><b>Beijing</b> <i class="icon iconsfont icons-gengduo"></i></li>
      </ul>
      <div class="city_more">
        <p>更多城市敬请期待</p>
        <img src="/static/images/address_more.png">

      </div>
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
      show: false,
      height:''
    }
  },
  mounted(){
    this.init();
    this.height=document.documentElement.clientHeight-200+'px'
  },
  methods: {
    select_city(data){
      this.$emit('selectCity',data)
    },
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



<style scoped>

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
  .city .content{
    padding: .8rem .3rem 0;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
  }
  .city{
    
    position: fixed;
    width: 100%;
    height: 100%;
    
    z-index: 3001;
    top: 1.6rem;
    box-sizing: border-box;
  }
  .city_more{
    margin-top: .2rem;
  }
  .city_more img{
    width: .2rem;
    margin-top: .2rem;
  }



</style>
