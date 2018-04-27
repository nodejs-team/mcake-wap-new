<template>
  <div class="">
    <div class="quan-item">
      <div class="quan-head hb">
        <ul>
          <li :class="{on:componentName=='hb_wsy'}" @click='changeRedStat("hb_wsy")'><b>{{wraplist.unusedCount}}</b><br><span>未使用</span></li>
          <li :class="{on:componentName=='hb_ysy'}" @click='changeRedStat("hb_ysy")'><b>{{wraplist.usedCount}}</b><br><span>已使用</span></li>
          <li :class="{on:componentName=='hb_jlgq'}" @click='changeRedStat("hb_jlgq")'><b>{{wraplist.fastExpireCount}}</b><br><span>距离过期</span></li>
          <li :class="{on:componentName=='hb_ygq'}" @click='changeRedStat("hb_ygq")'><b>{{wraplist.expireCount}}</b><br><span>已过期</span></li>
        </ul>
      </div>
      <keep-alive>
        <component :is="componentName" :wraplist='wraplist'></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import hb_wsy from '../components/hb_wsy'
import hb_ysy from '../components/hb_ysy'
import hb_jlgq from '../components/hb_jlgq'
import hb_ygq from '../components/hb_ygq'

export default {
  name: 'hongbao',
  props: [],
  components: {
    hb_wsy,
    hb_ysy,
    hb_jlgq,
    hb_ygq
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
      hblist:[1,1,1,11,1,1,1,1,1],
      yhqlist:[1,1,1,1,1,1,1,1],
      loading:false,
      loading2:false,
      componentName:'hb_wsy',
      wraplist:{
        expireCount:0,
        fastExpireCount:0,
        unusedCount:0,
        usedCount:0
      }
    }
  },
  mounted(){
    // this.lunbo();
    // this.tab();
    this.loading=false
    this.getredPacket();
  },
  activated(){
    this.loading=false
  },
  deactivated(){
    this.loading=true
  },
  methods:{
    getredPacket(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/670ff0ae277f4cae',{
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
    changeRedStat(status){
      this.componentName = status
    },
    loadMore(){
      if(this.loading){
        return false;
      }
      this.Loading.open()
      console.log('hb')
      console.log(this.loading)
      this.loading=true
      let self = this
      setTimeout(function(){
        for(let i=0;i<6;i++){
          self.hblist.push(i)
        }
        self.loading=false;
        self.Loading.close()
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
