<template>
  <div class="quan-content" v-infinite-scroll="loadMore2" infinite-scroll-disabled="loading2" infinite-scroll-distance="2">
      <div class="items first">
        <div class=" quanbao youhuiquan1">
           <div class="youhuiquan" v-for='item in yhqlist' >
             <div class="quan-left"><span :class='{small:item.money>=100}'>{{item.money}}</span></div>
             <div class="quan-center">
               <p>{{item.couponName}}<br> coupons <br>
                 <span>{{item.description}}</span>
               </p>
             </div>
             <div class="quan-right">
               <p>距离到期<br><br>
                  <span>{{item.endDay}}天</span>
               </p>
             </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'yhq_ysy',
  props: ['wraplist'],
  components: {

  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false,
      redstat:2,//红包状态:1、未使用;2、已使用
      redpage:1,
      yhqstat:2,
      yhqpage:1,
      tabs:1,
      hblist:[],
      yhqlist:[],
      loading:false,
      loading2:false,
      componentName:'yhq_wsy',
      scollTop:0
    }
  },
  mounted(){
    this.loading2=false
    this.getYhq();
  },
  activated(){
    this.loading2=false
    $("html,body").animate({scrollTop:this.scollTop},1);
  },
  deactivated(){
    this.loading2=true
    this.scollTop=$(document).scrollTop()
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
          self.wraplist.expireCount=res.data.expireCount
          self.wraplist.fastExpireCount=res.data.fastExpireCount
          self.wraplist.unusedCount=res.data.unusedCount
          self.wraplist.usedCount=res.data.usedCount
          for(let i=0;i<res.data.list.length;i++){
            self.yhqlist.push(res.data.list[i])
          }
          self.yhqpage++;
        }
      },function(error){  //失败
        console.log(error);
      });
    },

    changeYhqStat(status){
      this.componentName=status
    },
    loadMore2(){
      if(this.yhqpage==1){
        return false
      }
      if(this.wraplist.usedCount==this.yhqlist.length){
        return false
      }
      if(this.loading){
        return false;
      }
      this.getYhq() 
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
    flex: 1.5
  }
</style>
