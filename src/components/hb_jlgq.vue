<template>
   <div class="quan-content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
     <div class="items first hb_wrap" >
       <div class="hongbao" v-for='item in hblist'>
         <span>{{item.money}}</span>
       </div>        
     </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'hh_jlgq',
  props: ['wraplist'],
  components: {
  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false,
      redstat:3,//红包状态:1、未使用;2、已使用
      redpage:1,
      yhqstat:1,
      yhqpage:1,
      tabs:1,
      hblist:[],
      yhqlist:[1,1,1,1,1,1,1,1],
      loading:false,
      loading2:false,
      componentName:'hb_wsy',
      scollTop:0
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
    $("html,body").animate({scrollTop:this.scollTop},1);
  },
  deactivated(){
    this.loading=true
    this.scollTop=$(document).scrollTop()
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
          self.wraplist.expireCount=res.data.expireCount
          self.wraplist.fastExpireCount=res.data.fastExpireCount
          self.wraplist.unusedCount=res.data.unusedCount
          self.wraplist.usedCount=res.data.usedCount
          for(let i=0;i<res.data.list.length;i++){
            self.hblist.push(res.data.list[i])
          }
          self.redpage++;
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    changeRedStat(status){
      this.componentName = status
    },
    loadMore(){
      if(this.redpage==1){
        return false
      }
      if(this.wraplist.fastExpireCount==this.hblist.length){
        return false
      }
      if(this.loading){
        return false;
      }
      this.getredPacket() 
    },
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
