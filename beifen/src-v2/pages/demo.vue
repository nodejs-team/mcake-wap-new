<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>欢迎进入首页</h2>

    <mt-button type="default" @click="greet">操作提示</mt-button>
    <mt-button type="primary" @click="alert">弹窗</mt-button>
    <mt-button type="danger" v-on:click="popShow = !popShow">danger</mt-button>



    <mt-button type="primary" v-on:click="show = !show">过度动画</mt-button>
    <div>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <transition name="slide-fade">
      <p v-if="show">slide-fade</p>
    </transition>
    <my-footer></my-footer>

    <div class="box">
      <p>ssssssss <br>sssss</p>
    </div>

    <!--日期选择-->
    <mt-popup v-model="popShow" position="bottom">
      <div class="picker"><!----> <div class="picker-items"><div class="picker-slot picker-slot-right slot1" style="flex: 1 1 0%; -moz-box-flex: 1;"><div class="picker-slot-wrapper" style="height: 180px; transform: translate(0px, -36px) translateZ(0px);"><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-01
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-02
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-03
      </div><div class="picker-item picker-selected" style="height: 36px; line-height: 36px;">
        2016-04
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-05
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-06
      </div></div> <!----></div><div class="picker-slot picker-slot-center picker-slot-divider slot2"><!----> <div>-</div></div><div class="picker-slot picker-slot-left slot3" style="flex: 1 1 0%; -moz-box-flex: 1;"><div class="picker-slot-wrapper" style="height: 180px; transform: translate(0px, -36px) translateZ(0px);"><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-01
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-02
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-03
      </div><div class="picker-item picker-selected" style="height: 36px; line-height: 36px;">
        2016-04
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-05
      </div><div class="picker-item" style="height: 36px; line-height: 36px;">
        2016-06
      </div></div> <!----></div> <div class="picker-center-highlight" style="height: 36px; margin-top: -18px;"></div></div></div>
    </mt-popup>
    <!--日期选择end-->
  </div>
</template>

<script>
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
