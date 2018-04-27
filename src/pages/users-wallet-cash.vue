<template>
  <div class="users quan card">
    <div class="quan-item">
      <div class="quan-head">
        <h2>我的现金卡</h2>
        <ul>
          <li :class="{on:componentName=='cash_wsy'}" @click='changetabs("cash_wsy")'><b>{{wraplist.unusedCount}}</b><br><span>未使用</span></li>
          <li :class="{on:componentName=='cash_ysy'}" @click='changetabs("cash_ysy")'><b>{{wraplist.usedCount}}</b><br><span>已使用</span></li>
          <li :class="{on:componentName=='cash_jlgq'}" @click='changetabs("cash_jlgq")'><b>{{wraplist.fastExpireCount}}</b><br><span>距离过期</span></li>
          <li :class="{on:componentName=='cash_ygq'}" @click='changetabs("cash_ygq")'><b>{{wraplist.expireCount}}</b><br><span>已过期</span></li>
        </ul>
      </div>
      <div class="quan-content">
         <keep-alive>
            <component :is="componentName" :wraplist='wraplist'></component>
         </keep-alive>
      </div>

      <div class="btns">
        <ul >
          <li><span>立即使用</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import cash_ysy from '../components/cash_ysy'
  import cash_wsy from '../components/cash_wsy'
  import cash_jlgq from '../components/cash_jlgq'
  import cash_ygq from '../components/cash_ygq'
  export default {
    name: 'quan',
    props: [],
    components: {
      cash_ysy,
      cash_wsy,
      cash_jlgq,
      cash_ygq
    },
    data () {
      return {
        msg: '用户中心',
        isSearch: false,
        componentName:'cash_wsy',
        wraplist:{
          expireCount:0,
          fastExpireCount:0,
          unusedCount:0,
          usedCount:0
        }
      }
    },
    mounted(){
      
    },
    methods:{
      changetabs(type){
        this.componentName=type
      }
    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../../static/css/swiper.min.css';*/
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
  .btns{
    position: fixed;
    bottom: 0rem;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: .2rem 0;
    background-color: #fff;
  }
  .quanbao{
    margin: 0 auto;
  }
  .quan{
    padding-top: 1.5rem;
    box-sizing: border-box;
    padding-bottom: 2rem;
  }
  .quan .quan-item .quan-content{
    padding: 1rem 0;
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
  .quan .quan-item .quan-content .youhuiquan .quan-center{
    flex: 2
  }
</style>
