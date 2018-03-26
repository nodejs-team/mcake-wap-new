<template>
  <div class="navTab">
    <ul class="nav">

      <router-link :to="{ name: 'city'}" tag="li" class="search icon iconsfont icons-map">上海</router-link>
      <li class="center"><router-link :to="{ name: 'home'}" tag="div" class="logo"><img src="../style/images/icon-logo.png" alt=""></router-link></li>
      <li class="search" @click="goFirst" v-if="isSearch" ><span>取消</span></li>

      <router-link :to="{ name: 'search'}" tag="li" class="search icon iconsfont icons-search1" @click.native="isSearch = !isSearch" v-else></router-link><em></em>

      <li class="more icon iconsfont icons-menu" @click="subNavShow = !subNavShow"></li>
    </ul>
    <!--子导航-->
    <transition name="slide-down" :duration="{ enter: 500, leave: 200 }">
      <div class="subNav" v-if="subNavShow">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="外卖">
            <i class="icon iconsfont">&#xe61a;</i><div class="title">活动</div>
          </mt-tab-item>
          <mt-tab-item id="订单">
            <router-link :to="{ name: 'usersIndex'}" tag="span">
            <i class="icon iconsfont">&#xe625;</i><div class="title">个人中心</div>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="发现">
            <i class="icon iconsfont">&#xe64c;</i><div class="title">关于我们</div>
          </mt-tab-item>
        </mt-tabbar>

      </div>

    </transition>
    <div class="bgCover" v-show="subNavShow" @click="subNavShow = !subNavShow"></div>
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
      isSearch: false
    }
  },
  methods:{
    goFirst:function () {
      this.isSearch = !this.isSearch;
      this.$router.push({ name: 'home'});
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
