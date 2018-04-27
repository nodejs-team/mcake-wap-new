<template>
    <div class="nowbuy" v-infinite-scroll="loadMore2" infinite-scroll-disabled="loading2" infinite-scroll-distance="2">
	   <dl class="ka-quan">
          <dd>
            <div class="card" v-for='item in yhqlist' @click='useCard(item.code)'>
              <div class="card-item quan">
                <div class="card-left">{{item.money}}</div>
                <div class="card-content">
                  <div class="card-con-top">{{item.couponName}}</div>
                  <div class="card-con-bottom">
                    <h3>coupons</h3>
                    <span>{{item.description}}</span>
                  </div>
                </div>
                <div class="card-right">
                  <div class="card-con-top">距离到期</div>
                  <div class="card-con-bottom">
                    <span>{{item.endDay}}天</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="quan-add">
              <input type="number" placeholder="优惠券兑换码"> <span class="add">添加</span>
            </div>
          </dd>
        </dl>
      </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'yhq_wsy',
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
      yhqlist:[],
      loading:false,
      loading2:false,
      componentName:'yhq_wsy',
      scollTop:0,
      loadAll:false
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
    useCard(code){
      let self = this;
      self.Loading.open()
      self.$http.post('/api/76700366ce097e48',{

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
    useCard(code){
      let self = this;
      self.Loading.open()
      self.$http.post('/api/fb050434203879c5',{

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
        if(res.data.list.length==0){
          this.loadAll=true
        }
        if(res.code==1){

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
      if(this.loadAll){
        return false
      }
      if(this.yhqpage==1){
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
  @import '../style/css/nowbuy.css';

  .nowbuy dl.ka-quan dd{
    display: block;
  }
  .nowbuy dl.ka-quan dd .card{
    margin-bottom: .2rem;
  }
  .nowbuy dl.ka-quan dd .quan-add{
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color: #fff;
  }

</style>