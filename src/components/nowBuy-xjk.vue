<template>
    <div class="nowbuy" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
	    <dl class="ka-quan" >
          <dd>
           <div class="card" v-for='item in list' @click='useCard(item.cardNo)'>
             <div class="card-item cash">
                <div class="card-left">
                  <div class="card-con-top">{{item.cardName}}</div>
                  <div class="card-con-bottom">
                    <h3>使用条件：</h3>
                    <p>{{item.description}} <br>
                    不可与优惠券一同使用</p>
                  </div>
                </div>
                <div class="card-right">
                  <div class="card-con-top">使用日期：<br> <span>{{item.endDate}}之前</span></div>
                  <div class="card-con-bottom">
                    <h3>额度：</h3>
                    <span>{{item.faceValue}}</span>
                  </div>
                </div>
             </div>
           </div>
            <div class="quan-add">
              <input type="number" placeholder="现金卡兑换码"> <span class="add">添加</span>
            </div>
          </dd>
        </dl>
    </div>
</template>
<script>
import $ from 'jquery'
  export default {
    name: 'cash_wsy',
    props: ['wraplist'],
    components: {
    },
    data () {
      return {
        msg: '用户中心',
        isSearch: false,
        list:[],
        loading:false,
        scollTop:0,
        page:1,
        loadAll:false
      }
    },
    mounted(){
      this.getList()
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
        self.$http.post('/api/26ba3a0ac9482ab5',{

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
        self.$http.post('/api/9de7d57cb9593ae8',{

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
      getList(){
        let self = this;
        self.Loading.open()
        self.$http.get('/api/1fd22dc511b762c0',{
          params:{
            stat:1,
            page:self.page
          }
        }).then(function(res){  //接口返回数据
          self.Loading.close()
          console.log(res);
          if(res.data.list.length==0){
            self.loadAll=true
          }
          if(res.code==1){
            for(let i=0;i<res.data.list.length;i++){
              self.list.push(res.data.list[i])
            }
            self.page++;
          }
        },function(error){  //失败
          console.log(error);
        });
      },
      loadMore(){
        if(this.loadAll==1){
          return false
        }
        if(this.page==1){
          return false
        }
        
        if(this.loading){
          return false;
        }
        this.getList() 
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