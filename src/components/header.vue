<template>
  <div class="navTab">
    <ul class="nav">

      <li class="search icon iconsfont icons-map" @click='city_select=!city_select;subNavShow=false'><span>{{cityname}}</span></li-link>
      <li class="center"><div class="logo" @click='gohome'><img src="../style/images/icon-logo.png" alt=""></div></li>

      <li class="search cancel_search" @click="isSearch = !isSearch" v-if="isSearch" ><span>取消</span></li>

      <!-- <router-link :to="{ name: 'search'}" tag="li" class="search icon iconsfont icons-search1" @click.native="isSearch = !isSearch" v-else></router-link><em></em> -->
      <li class="search icon iconsfont icons-search1" @click="isSearch = !isSearch;subNavShow=false" v-else></li><em></em>
      <li class="more icon iconsfont icons-menu" @click="subNavShow = !subNavShow"></li>
    </ul>
    <!--子导航-->
    <transition name="slide-down" :duration="{ enter: 500, leave: 200 }">
      <div class="subNav" v-if="subNavShow">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="活动">
            <i class="icon iconsfont"  @click='subNavShow=false'>&#xe61a;</i><div class="title">活动</div>
          </mt-tab-item>
          <mt-tab-item id="个人中心">
            <router-link :to="{ name: 'usersIndex'}" tag="span">
              <div @click='subNavShow=false'>
                <i class="icon iconsfont">&#xe625;</i><div class="title">个人中心</div>
              </div>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="关于我们" >
            <i class="icon iconsfont" @click='subNavShow=false'>&#xe64c;</i><div class="title">关于我们</div>
          </mt-tab-item>
        </mt-tabbar>

      </div>

    </transition>
    <div class="bgCover" v-show="subNavShow" @click="subNavShow = !subNavShow"></div>
  </div>
</template>

<script>

export default {
  name: 'top',

  data () {
    return {
      msg: '头部导航',
      selected: true,
      subNavShow: false,
      isSearch: false,
      city_select:false,
      minHeight:''
    }
  },
  props:['citySelect','cityname','showsearchs'],
  watch:{
    'selected':function(){
      this.subNavShow=false
    },
    'city_select':function(){
      this.uptoparent()
    },
    'citySelect':function(){
      this.city_select=this.citySelect
      // console.log(this.citySelect)
    },
    'showsearchs':function(){
      // alert(11)
      this.isSearch=this.showsearchs
    },
    'isSearch':function(){
      this.searchEvent()
    }
  },
  mounted(){
    this.cityname = remote_ip_info.city;
    console.log(remote_ip_info.city)
    this.minHeight = window.document.body.offsetHeight+'px';
    //alert(this.minHeight)
  },
  methods:{
    gohome(){
      this.city_select=false;
      this.isSearch=false;
      this.subNavShow=false;
      this.$router.push({ name: 'home'});
    },
    searchEvent(){
      this.$emit('searchEvent',this.isSearch)
    },
    goFirst:function () {
      this.isSearch = !this.isSearch;
      this.$router.push({ name: 'home'});
    },
    uptoparent(){
      let self = this
      this.$emit('showwrap',self.city_select)
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
  .nav .icons-map{
    font-size: .4rem;
    flex: 3;
  }
  .nav .icons-map span{
    color: #8d8d8d;
    display: inline-block;
    margin-left: .1rem;
  }
 
  .nav .icons-search1{
    font-size: .5rem;
    flex: 1.5;
  }
  .vue-header .navTab .cancel_search{
    flex: 1.5;
  }
  .nav .icons-menu{
    font-size: .6rem;
    flex: 1.5;
  }
  .selectCity{
    position: absolute;
    width: 100%;
    /*height: 200000px;*/
    z-index: 9999;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .nav .icon.iconsfont{
    color:#c6c6c6;
  }
  .vue-header .subNav{
    position: relative;
    top: -1px;
    z-index: 2;
  }
  .bgCover{
    opacity: .5;
    background-color: #000;
    top: 0;
  }
  .vue-header .navTab ul.nav{
    position: relative;
    background-color: #fff;
  }
</style>
