<template>
  <div class="home">
    <!-- <h1>{{ msg }}</h1>
    <h2>欢迎进入首页</h2>
    <router-link :to="{ name: 'demo'}" tag="li"><mt-button type="default">Demo</mt-button></router-link>
    <mt-button type="default" @click="greet">操作提示</mt-button>
    <mt-button type="primary" @click="alert">弹窗</mt-button>
    <mt-button type="danger" v-on:click="popShow = !popShow">danger</mt-button> -->


    <div class="home-main">
      <img src="../style/images/home-banner.png" alt="">
    </div>

   <my-footer></my-footer>
  </div>
</template>

<script>
import $ from 'jquery'
import footer from '../components/footer'
import Vue from 'vue'
import { Toast, MessageBox, Popup } from 'mint-ui'
Vue.component(Popup.name, Popup)
export default {
  name: 'home',
  components: {
    myFooter: footer
  },
  data () {
    return {
      msg: '首页',
      popShow: false,
      show: false
    }
  },
  methods: {
    greet: function (event) {
      Toast({
        message: '提示',
        position: 'middle',
        duration: 1000
      })
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
