<template>
  <div id="app" :class="{isfixed:isfixed}">

    <div id="evt_loading" style="display:none;">0%</div>
    <div class="evt_content" style="display:none;">
      <div class="vue-header">
        <my-header v-on:showwrap='fixed' :citySelect='showcity' :cityname='city_name' v-on:searchEvent='searchEvent' :showsearchs='showsearch'></my-header>
      </div>
      <!-- <div class="marginTop"></div> -->
      <div class="vue-container">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>
    <!--<img src="./assets/logo.png">-->
    <selectCity  v-show='showcity' :style='{height:minHeight}'  v-on:selectCity='selectCity'></selectCity>
    <search  v-show='showsearch'   ></search>
  </div>
</template>


<script>
import './style/css/glob.css'
import $ from 'jquery'
import header from './components/header'
import navBar from './components/navBar'
import search from '@/pages/search'
import selectCity from '@/pages/select-city'
export default {
  components: {
    myHeader: header,
    navBar: navBar,
    search,
    selectCity
  },
  data () {
    return {
      msg: '测试',
      isfixed:false,
      minHeight:'',
      showcity:false,
      city_name:'上海',
      search:false,
      showsearch:false
    }
  },
  mounted(){
    this.init()
    this.minHeight=document.documentElement.clientHeight+'px'
  },
  methods: {
    searchEvent(data){
      this.showsearch = data
      if(this.showsearch){
        this.showcity=false
      }
      //console.log(data)
    },
    selectCity(data){
      this.showcity=false
      this.city_name = data

      // console.log(data)
    },
    fixed(data){
      //alert(111)
      console.log(data)
      this.isfixed=data;
      this.showcity=data
      if(this.showcity){
        this.showsearch=false

      }
    },
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
  .navBar .mint-cell-wrapper{
    font-size: .4rem;
    border-bottom: 1px solid #ccc;
    background-size: 0 0px;
  }
  .navBar .mint-cell:last-child .mint-cell-wrapper{
    border-bottom: none;
  }
  .navBar .mint-cell{
    min-height: 1rem;
  }
  .mint-cell-allow-right:after{
    width: 14px;
    height: 14px;
    right: 30px;
  }
  .navBar .mint-cell:last-child{
    background-size: 0 0px;
  }
  /**{
    touch-action: none;
  }*/
  .nums .van-stepper__input{
    width: 1.8rem;
    font-size: .4rem;
    height: .5rem;
    line-height: .5rem;
    border:none;
  }
  .cart-dialog .cart-content .items .nums{
    flex: 3.2
  }
  .van-stepper__stepper{
    border-radius: 50%;
    width: .56rem;
    height: .56rem;
    background-color: #f0f0f0;
    border:none;
    font-size: .3rem;
  }
  .van-stepper__stepper::before{
    width: .3rem;
    height: .04rem;
  }
  .van-stepper__stepper::after{
    height: .3rem;
    width: .04rem;
  }
  .van-pagination li{
    border-radius: .1rem;
    padding: 0.13333rem 0.26667rem;
    font-size: .32rem;
    color: #8d8d8d;
    background-color: transparent;
    border-bottom: none;
  }
  .van-pagination{
    display: inline-block;
  }
  .van-pagination__next,.van-pagination__prev{
    display: none;
  }
  .van-pagination__page.van-pagination--active{
    background-color:#ffcd20;
    color: #8d8d8d;
  }
  .van-pagination__item:active{
    background-color:#ffcd20;
  }
  .van-pagination__item{
    width: auto;
    height: auto;
  }
  .van-pagination__item::after{
    border-width: 0;
  }
  .vue-header{
    z-index: 3014;
  }
  .isfixed{
    /*position: fixed;*/
    /*overflow: hidden;*/
  }
  .vue-container{
    height: 100%;
  }
  
  .user-main .mint-tabbar{
    background-color: #fff;
    border-bottom: 1px solid #e9e9e9;
  }
  .vue-container{
    padding-top: 1.6rem;
  }


  .cart-list .mint-cell-title{
    display: none;
  }
  .cart-list .mint-cell-value{
    width: 100%;
    line-height: .36rem;
    padding-right: .2rem;
  }
  .cart-list{
    padding: .2rem;
  }
  .cart-list .mint-cell{
    padding-bottom: .3rem;
    margin-bottom: .2rem;
  }
  .cart-list .mint-cell-right{
    border-radius: 0 0.1rem 0.1rem 0;
    overflow: hidden;
  }
  .cart-list .mint-cell-wrapper{
    background-image: none;
  }
  .cart-list .cartItem-delete{
    display: inline-block;
    width: 1.4rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .cart-list .cartItem-delete:before{
    font-family: "iconsfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content: "\E645";
    margin-right: .1rem;
  }
  .slideDown{
    transform: rotate(180deg);
  }

  /*重新编写提示信息样式*/
  .mint-indicator{
        position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999999;
    background-color: rgba(0,0,0,0.5);
  }
  .mint-toast-text{
    font-size: .4rem;
  }
  .mint-msgbox-header{
    padding:.4rem .2rem 0;

    
  }
  .mint-msgbox-header .mint-msgbox-title{
    font-size: .4rem;
    text-align: left;
  }
  .mint-msgbox-message{
    font-size: .4rem;
    line-height: 180%;
    padding-bottom: .2rem;
    padding: 0.3rem 0 0.5rem;
  }
  .mint-msgbox-btns{
    height: 1rem;

  }
  .mint-msgbox-btn{
    font-size: .4rem;
    line-height: 
  }
/*左边筛选*/
    .navBar .mintui-navIcon{
      font-size: 1rem;
      margin-left: .4rem;
    }
    .navBar .mintui-navIcon.icons-nav-kafa{
      font-size: .8rem;
      margin-left: .5rem;
      margin-right: .1rem;
    }
    .navBar .mint-cell-title{
      line-height: .8rem;
    }
    .navBar .mint-cell-text{
      margin-left: .2rem;
      color: #000;
      font-size: .32rem;
      font-weight: bold;
    }

    /*记载等待*/
    .mint-indicator-wrapper{
      padding: .6rem !important;
    }

    /*添加购物车弹层*/
    .dialog-wrap{
      z-index: 9999999;
    }
   /* .dialog-cover{
      background-image: url('/static/images/ms.png') !important;
      background-repeat: repeat !important;
    }*/
</style>
