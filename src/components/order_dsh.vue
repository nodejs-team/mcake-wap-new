<template>
  
      <div class="order-box" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
          <div class="pro-list">
            <ul>
              <li class="flex-w" v-for='item in list'>
                <div class="order_no">
                  <div class="order_no_left">
                    <div class="o-time">
                        <p><!-- <i class="icon iconsfont icons-clock"></i> --><span>{{item.createTime}}</span></p>
                      </div>
                    <h2>订单号 {{item.billCode}}</h2>
                    
                  </div>
                  <!-- <p class="order_del"><i class="icon iconsfont icons-lajixiang"></i><span>删除</span></p> -->
                </div>
                <div class="pro-box flex-h" v-for='good in item.goods'>
                  <div class="pro-img"><img :src="good.pic.url+good.pic.list[0].m" alt="" ></div>
                  <div class="content">
                    <p>{{good.frenchName}}<br>
                      {{good.goodsName}}</p>
                    <div class="luyin"><i class="icon iconsfont icons-luyin1"></i><span>录音传情</span></div>
                  </div>
                  <div class="edit">
                    <p class="price"><em>￥</em><span>{{good.price | toDecimal2}}</span></p>
                    <p>x{{good.goodsAmount}}</p>
                  </div>
                </div>
                <div class="order_item_total">
                  <span>共{{item.totalNum}}件商品</span>
                  <span>合计{{item.billReceivableMoney | toDecimal2}}元</span>
                  <span>（含运费0.00元）</span>
                </div>
                <div class="pro-btns">
                  <ul>
                    <li class="cancel" @click='orderDetail(item.billNo)'><span><i class="icon iconsfont icons-test"></i><span>订单详情</span></span></li><em></em>
                    <li><span><i class="icon iconsfont icons-pop"></i><span>查看配送信息</span></span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

</template>

<script>

export default {
  name: 'orders_ywc',
  props: ['wraplist'],
  components: {

  },
  data () {
    return {
      msg: '我的订单',
      isPing:false,
      isEdit:false,
      isShowDialog:false,
      list:[],
      page:1,
      loadAll:false,
      loading:false
    }
  },
  mounted(){
    
  },
  watch:{

  },
  activated(){
    this.getList()
  },
  deactivated(){
    this.loading=true
  },
  methods:{
    getList(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/51e4fce79ae6a9a0',{
        params:{
          stat:1,
          page:self.page
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.data.list.length==0){
          self.loadAll=true
          return false
        }
        if(res.code==1){
          for(let i=0;i<res.data.list.length;i++){
            res.data.list[i].totalPrice=0
            res.data.list[i].totalNum=0
            for(let item in res.data.list[i].goods){
              res.data.list[i].totalPrice+=res.data.list[i].goods[item].price*res.data.list[i].goods[item].goodsAmount
              res.data.list[i].totalNum+=res.data.list[i].goods[item].goodsAmount
            }
          }
          self.wraplist.waitConfirmCount=res.data.waitConfirmCount
          self.wraplist.unpaidCount=res.data.unpaidCount
          for(let i=0;i<res.data.list.length;i++){
            self.list.push(res.data.list[i])
          }
          // self.list = res.data.list
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
      if(this.wraplist.fastExpireCount==this.list.length){
        return false
      }
      if(this.loading){
        return false;
      }
      this.getList() 
    },
    orderDetail(billNo){
      this.$router.push('/order?billNo='+billNo)
    },
    tabSlide: function (event) {
        $(".orders").find(".order-top li").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            var index = $(this).index();
          $(".order-box").eq(index).show().siblings('.order-box').hide(0);
        });
     // console.log($(".order-box"));

    },
    edit:function (event) {
      this.isEdit = true;
    },
    goComment:function () {
      this.isPing = true;
      this.$router.push('/users/evaluation')
    },
    comment: function (event) {
     this.isShowDialog = true;
     var self = this;
     setTimeout(function () {
       self.isShowDialog = false;
     },2000);
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/orders.css';

  .pro-list .pro-box .edit i{
    background-color: transparent;
  }
  .pro-list .pro-btns ul li i{
    color: #888888;
    vertical-align: middle;
  }
  .pro-list .pro-btns ul li i+span,.pro-list .pro-btns2 dl dd i+span{
    display: inline-block;
    vertical-align: middle;
  }
  .orders .order-top{
    background-color: #ebebeb;
    padding: 0 0.2rem;
  }
  .orders .order-top li{
    position: relative;
    background-color: #ebebeb;
  }
  .orders .order-top li span{
    position: absolute;
    top: .16rem;
    right: .12rem;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-color: #ffcd20;
    border-radius: 50%;
    line-height: .42rem;
    text-align: center;
    font-size: .24rem;
    color: #000;
  }
  .orders .order-box{
    display: block;
  }

  .orders .order_no{
    text-align: left;
    display: flex;
    font-size: .32rem;
    padding: .3rem 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: .2rem;
  }
  .orders .order_no .order_no_left{
    flex: 5;
    display: flex;
    color: #3d3d3d;
  }
  .orders .order_no .order_no_left .o-time{
    margin-right: .2rem;
    color: #000;
  }
  .orders .order_no .order_del{
    flex: 1;
    text-align: right;
  }
  .orders .order-box li{
    padding: 0 0.27778rem;
  }
  .pro-list .pro-box {
    margin: 0;
    padding-bottom: 0.27778rem;
    /*padding: 0 0.27778rem 0.27778rem;*/
  }
  .pro-list .pro-btns{
    margin: 0;
  }
  .pro-list .pro-box .edit .price{
    position: inherit;
    font-size: .36111rem;
  }
  .pro-list .pro-box .edit p{
    text-align: right;
  }
  .order_item_total{
    text-align: right;
    padding: .2rem 0;
    border-top: 1px solid #ccc;
  }
  .icon.iconsfont.icons-lajixiang{
    font-size: .4rem;
  }
  .orders .order-top{
    position: fixed;
    top: 1.6rem;
    width: 100%;
    z-index: 99;
  }
</style>
