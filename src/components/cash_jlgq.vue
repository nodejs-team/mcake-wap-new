<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
    <div class="items first" v-for='item in list'>
       <div class=" quanbao card1">
           <div class="quan-list">
               <div class="quan-box">
                 <div class="quan-top">
                   <div class="c-left"><h2>{{item.cardName}}</h2></div>
                   <div class="c-right"><p>使用日期： <br> <span class="color-green">{{item.endDate}}之前</span> </p></div>
                 </div>
                 <div class="quan-main">
                   <div class="c-left">
                     <h2>使用条件：</h2>
                     <p>{{item.description}}<br>
                       不可与优惠券一同使用</p>
                   </div>
                   <div class="c-right">
                     <b>额度：</b><br>
                     <span class="num">{{item.faceValue}}</span>
                   </div>
                 </div>
               </div>
             </div>
       </div>
     </div>
  </div>
</template>

<script>
import $ from 'jquery'
  export default {
    name: 'cash_ysy',
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
        page:1
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
      getList(){
        let self = this;
        self.Loading.open()
        self.$http.get('/api/1fd22dc511b762c0',{
          params:{
            stat:3,
            page:self.page
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
              self.list.push(res.data.list[i])
            }
            self.page++;
          }
        },function(error){  //失败
          console.log(error);
        });
      },
      loadMore(){
        if(this.page==1){
          return false
        }
        if(this.wraplist.fastExpireCount==this.list.length){
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
