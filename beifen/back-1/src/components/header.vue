<template>
  <div class="navTab">
    <ul class="nav">
      <li class="adress icon iconsfont icons-wxbdingwei"><i></i>上海</li>
      <li class="center"><div class="logo"><img src="../style/images/icon-logo.png" alt=""></div></li>
      <li class="search icon iconsfont icons-search" @click="searchShow = !searchShow"></li><em></em>
      <li class="more icon iconsfont icons-category1" @click="subNavShow = !subNavShow"></li>
    </ul>
    <transition name="slide-down" :duration="{ enter: 500, leave: 200 }">
      <div class="subNav" v-if="subNavShow">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="外卖">
            <i class="icon iconsfont">&#xe675;</i><div class="title">活动</div>
          </mt-tab-item>
          <mt-tab-item id="订单">
            <i class="icon iconsfont">&#xe65d;</i><div class="title">个人中心</div>
          </mt-tab-item>
          <mt-tab-item id="发现">
            <i class="icon iconsfont">&#xe675;</i><div class="title">关于我们</div>
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </transition>

    <transition name="slide-down" :duration="{ enter: 500, leave: 200 }">
      <div class="searchBox" v-if="searchShow">
        <p>搜索</p>
      </div>

    </transition>

    <!-- <mt-header title="电放费">
      <router-link to="/" slot="left">
        <mt-button icon="back">地区</mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->

    <!--<router-link v-for="item in msg" :to="item.link" tag="li"><span>{{item.title}}</span></router-link>
    <router-link :to="{ name: 'home'}" tag="li"><span>首页</span></router-link>
    <router-link :to="{ name: 'list'}" tag="li"><span>产品列表</span></router-link>
    <router-link :to="{ name: 'detail'}" tag="li"><span>产品详情</span></router-link>-->

  </div>

</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: '头部导航',
      selected: true,
      subNavShow: false,
      searchShow: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .5s;
  }
  .slide-down-enter, .slide-down-leave-active {
    transform: translate3d(0, -1%, 0); opacity: 0;
  }

</style>
