<template>
  <div class="nowbuy">
	    <dl class="ka-quan" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
      
          <dd>
            <div class="card">
              <div class="card-item" v-for='item in hblist' @click='useCard(item.code)'>{{item.money}}</div>
            </div>
          </dd>
        </dl>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'hh_wsy',
  props: ['wraplist'],
  components: {
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
      loading:false,
      loading2:false,
      componentName:'hb_wsy',
      scollTop:0,
      loadAll:false
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
    useCard(code){
      let self = this;
      self.Loading.open()
      self.$http.post('/api/e4cb6213f1d523f6',{

          code:code
        
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    unuseCard(code){
      let self = this;
      self.Loading.open()
      self.$http.post('/api/0c75580d54d73819',{

          code:code
        
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          
        }
      },function(error){  //失败
        console.log(error);
      });
    },
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
        if(res.data.list.length==0){
          this.loadAll=true;
        }
        if(res.code==1){
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
      if(this.loadAll){
        return false
      }
      if(this.redpage==1){
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
  @import '../style/css/nowbuy.css';

  .nowbuy dl.ka-quan dd{
    display: block;
  }
  .nowbuy dl.ka-quan dd .card .card-item{
    margin-right: 0;
    margin-left: .3rem;
    margin-bottom: .2rem;
  }
  .nowbuy dl.ka-quan dd .card{
    display: block;
  }
  .nowbuy dl.ka-quan dd{
    padding-left: 0;
  }
</style>