<template>
  <div class="users quan">
    <div class="quan-item">
      <div class="quan-head hb">
        <div class="hb_head_wrap">
          <h2 :class='{active:componentName=="hb"}' @click='changeTbas("hb")'>我的现红包</h2>
          <h2 :class='{active:componentName=="yhq"}' @click='changeTbas("yhq")'>我的优惠券</h2>
      </div>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    </div>
    <div class="quan-item">
    </div>
    <div class="btns fixed">
      <ul >
        <li><span>立即使用</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js'
import hb from '../components/hongbao'
import yhq from '../components/yhq'
export default {
  name: 'hongbao',
  props: [],
  components: {
    hb,
    yhq
  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false,
      redstat:1,//红包状态:1、未使用;2、已使用
      redpage:1,
      yhqstat:1,
      yhqpage:1,
      tabs:"hb",
      hblist:[1,1,1,11,1,1,1,1,1],
      yhqlist:[1,1,1,1,1,1,1,1],
      loading:false,
      loading2:false,
      componentName:'hb'
    }
  },
  mounted(){

  },
  methods:{
    changeTbas(type){
      this.componentName=type
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/swiper.min.css';
  @import '../style/css/user.css';

  .quan-head{
    width: 100%;
    position: fixed;
    top: 1.6rem;
    left: 0;
    z-index: 100;
    background-color: #fff;
  }
  .hb_head_wrap{
    display: flex;
  }
  .hb_head_wrap h2{
    flex: 1;
    box-sizing: border-box;
  }
  .hb_head_wrap h2.active{
    color: #fff;
    background-color:#ffcd20;
  }
/*  .btns{
    position: fixed;
    bottom: 0rem;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: .2rem 0;
    background-color: #fff;
  }*/
  .quan{
    padding-top: 2.5rem;
    box-sizing: border-box;
    padding-bottom: 2rem;
  }
  .quan .quan-item .quan-content .youhuiquan{
    width: 9.8rem;
    margin-bottom: .2rem;
  }
  .quan .quan-item .quan-content .youhuiquan .quan-right p{
    padding-right: .3rem;
  }
  .quan .quan-item .quan-content .hongbao{
    float: left;
    margin-bottom: .2rem;
    margin-left: .32rem;
  }
  .quan .quan-item .quan-content .hongbao span{
    flex: 1;
  }
  .quan .quan-item .quan-head ul li{
    padding: .3rem 0;
    line-height: .3rem;
  }
  .hb_head_wrap{
    border-top: #e9e9e9 1px solid
  }
  .quan .quan-item .quan-head h2{
    line-height: 1.2rem;
  }
</style>
