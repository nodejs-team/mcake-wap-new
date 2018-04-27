<template>
  <div class="home">
    <div class="home-banner">
      <img src="static/images/home-banner.png" alt="" >
    </div>
    <div class="home-prolist">
      <pro-list :id='-1' :ischchangeList='ischchangeList' :clear='clear'></pro-list>
    </div>

   <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
import $ from 'jquery'
import footer from '../components/footer'
import proList from '../components/pro-list'
export default {
  name: 'home',
  components: {
    proList,
    myFooter: footer
  },
  data () {
    return {
      msg: '首页',
      goodsList:[],
      popShow: false,
      show: false
    }
  },
  mounted(){
    
  },
  props:['ischchangeList','clear'],
  methods: {
    greet: function (event) {
      Toast({
        message: '提示信息',
        position: 'middle',
        duration: 1000
      });

    },
    alert: function (event) {
      MessageBox('提示', '操作成功')
    },
    pop: function (event) {
      console.log(this)
    },
    testA: function (event) {
      $('p').fadeOut();
      console.log(2222);
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
