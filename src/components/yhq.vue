<template>
  <div >
    <div class="quan-item">
      <div class="quan-head hb">
        <ul>
          <li :class="{on:componentName=='yhq_wsy'}" @click='changeYhqStat("yhq_wsy")'><b>{{wraplist.unusedCount}}</b><br><span>未使用</span></li>
          <li :class="{on:componentName=='yhq_ysy'}" @click='changeYhqStat("yhq_ysy")'><b>{{wraplist.usedCount}}</b><br><span>已使用</span></li>
          <li :class="{on:componentName=='yhq_jlgq'}" @click='changeYhqStat("yhq_jlgq")'><b>{{wraplist.fastExpireCount}}</b><br><span>距离过期</span></li>
          <li :class="{on:componentName=='yhq_ygq'}" @click='changeYhqStat("yhq_ygq")'><b>{{wraplist.expireCount}}</b><br><span>已过期</span></li>
        </ul>
      </div>
      <keep-alive>
        <component :is="componentName" :wraplist='wraplist'></component>
      </keep-alive>

    </div>
  </div>
</template>

<script>
import yhq_ysy from '../components/yhq_ysy'
import yhq_wsy from '../components/yhq_wsy'
import yhq_jlgq from '../components/yhq_jlgq'
import yhq_ygq from '../components/yhq_ygq'
export default {
  name: 'yhq',
  props: [],
  components: {
    yhq_ysy,
    yhq_wsy,
    yhq_jlgq,
    yhq_ygq
  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false,
      redstat:1,//红包状态:1、未使用;2、已使用
      redpage:1,
      yhqstat:1,
      yhqpage:1,
      tabs:1,
      hblist:[],
      yhqlist:[],
      loading:false,
      loading2:false,
      componentName:'yhq_wsy',
      wraplist:{
        expireCount:0,
        fastExpireCount:0,
        unusedCount:0,
        usedCount:0
      }
    }
  },
  mounted(){
    this.loading2=false
    this.getYhq();
  },
  activated(){
    this.loading2=false
  },
  deactivated(){
    this.loading2=true
  },
  methods:{

    getYhq(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/7c670d1b5ed5bbef',{
        params:{
          stat:self.redstat,
          page:self.redpage
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
           
        }
      },function(error){  //失败
        console.log(error);
      });
    },

    changeYhqStat(status){
      this.componentName=status
    },
    loadMore2(){
      if(this.loading2){
        return false;
      }
      this.Loading.open()
      console.log('yhq')
      this.loading2=true
      let self = this
      setTimeout(function(){
        for(let i=0;i<6;i++){
          self.yhqlist.push(i)
        }
        self.Loading.close()
        self.loading2=false;
      },2000)
    },

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
    top: 2.8rem;
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
  .quan .quan-item .quan-content .youhuiquan{
    width: 9.6rem;
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
  .quan .quan-item .quan-content .youhuiquan .quan-center{
    flex: 2
  }
</style>
