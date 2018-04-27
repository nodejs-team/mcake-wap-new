<template>
  <div class="container-wrap">
      <div class="order-list">
        <div class="order-num"><span>订单编号: {{data.billCode}}</span></div>
        <ul class="orderList">
          <li class="flex-w" v-for='(item,index) in goodsList' v-if='index<showIndex'>
            <div class="pro-box flex-h">
              <div class="pro-img"><img :src="item.pic.url+item.pic.list[0].m" alt="" ></div>
              <div class="content">
                <dl>
                  <dt><h2>{{item.frenchName}}</h2><br><h2>{{item.goodsName}}</h2></dt>
                  <dd><em>数量：</em> <span>{{item.goodsAmount}}个</span></dd>
                  <dd><em>大小：</em> <span>{{item.goodsSpec}}<template v-if='item.edible'>-</template>{{item.edible}}</span></dd>
                  <dd v-for='fitting in item.fittings'><em>{{fitting.fitName}}：</em> <span>{{fitting.quantity}}{{fitting.fitUnit}}</span></dd>
                </dl>
              </div>
            </div>
          </li>
          <div class="more" @click="showMore"><i class="icon iconsfont" :class="[icons ? 'icons-jiantoushang':'icons-jiantouxia']" ></i></div>
        </ul>

        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <dd><i class="icon iconsfont icons-clock"></i><em>下单时间：</em> <span>{{data.createTime}}</span></dd>
              <dd><i class="icon iconsfont icons-clock"></i><em>配送时间：</em> <span>{{data.sendDate}} {{data.sendStartTime}}~{{data.sendEndTime}}</span></dd>
              <dd><i class="icon iconsfont icons-money2"></i><em>还需支付：</em> <span>{{data.billMoney | toDecimal2}}</span></dd>
            </dl>
          </div>
        </div>
        <!-- 订单状态:0、建立 1、确认 2、生产 3、入库 4、出库 5、配送站收货 6、配送 7、完成 8、部退货 9、全部退货 10、取消 11、配送自购 -->
        <div class="btns">
          <ul >
            <li class="chuanqing" v-if='data.billStatus>0&&data.billStatus<7'><span>去录音传情</span></li>
            <!-- paytype. 1在线支付。2货到付款 -->
            <li @click='goPay' v-if='data.billStatus==0&&data.payType==1'><span>去付款</span></li>

          </ul>
        </div>

        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <i class="icon iconsfont icons-dui i-complete"></i>
              <h2>订单状态：
                <template v-if='data.billStatus==0'>已建立</template>
                <template v-if='data.billStatus==1'>已审核</template>
                <template v-if='data.billStatus==2'>已生产</template>
                <template v-if='data.billStatus==3'>已入库</template>
                <template v-if='data.billStatus==4'>已出库</template>
                <template v-if='data.billStatus==5'>配送站收货</template>
                <template v-if='data.billStatus==6'>已配送</template>
                <template v-if='data.billStatus==7'>已完成</template>
                <template v-if='data.billStatus==8'>部分退货</template>
                <template v-if='data.billStatus==9'>全部退货</template>
                <template v-if='data.billStatus==10'>已取消</template>
                <template v-if='data.billStatus==11'>配送自购</template>
              </h2>
              <dd><em>如有疑问可以拨打客服热线：4006678678</em></dd>
            </dl>
          </div>
        </div>

        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <h2>收货信息</h2>
              <dd><em>联系人：</em> <span>{{data.deliverName}}</span></dd>
              <dd><em>联系方式：</em> <span>{{data.deliverMobile}}</span></dd>
              <dd class="longRight"><em>配送地址：</em> <span>{{data.deliverAllAddress}}</span></dd>
              <dd><em>配送时间：</em> <span>{{data.sendDate}} {{data.sendStartTime}}~{{data.sendEndTime}}</span></dd>
            </dl>
          </div>
        </div>
        <div class="order-line orderTime">
          <div class="content">
            <dl>
              <h2>收货信息 <i class="icon iconsfont icons-jiantouyou" @click='goFastMall(data.billNo)'></i></h2>
              <dd v-for='item in data.billTrace'><em>{{item.content}}：</em> <span>{{item.createTime}}</span></dd>
            </dl>
          </div>
        </div>

        <div class="order-num"><span>运费：0.00</span>   <span class="textRight">实付款：￥<i>{{data.billMoney | toDecimal2}}</i></span></div>
    </div>


    <dialogTips2 :is-show="isShowDialog">
      <!--<p class="dialog-close" @click="closeDialog"  slot="close"> <i class="icon iconsfont icons-guanbi"></i></p>-->
      <div class="tip-txt">
        <i class="icon iconsfont icons-dui"></i>
        <p>订单提交成功</p>
      </div>
    </dialogTips2>
    <!-- <div class="marginBottom"></div> -->
  </div>

</template>

<script>
  import dialogTips from '../components/dialog-tips'
  import dialogTips2 from '../components/dialog-tips2'
export default {
  name: 'orders',
  props: [],
  components: {
    myDialog: dialogTips,
    dialogTips2
  },
  data () {
    return {
      msg: '我的订单',
      isShowDialog:false,
      icons:false,
      billNo:'',
      data:'',
      goodsList:[],
      showIndex:2
    }
  },
  mounted(){
    this.billNo=this.$route.query.billNo
    this.getList()
    this.init();
  },
  activated(){
    this.billNo=this.$route.query.billNo
  },
  watch:{
    '$route':function(){
      this.billNo=this.$route.query.billNo
      if(this.billNo){
        this.getList()
      }
    }
  },
  methods:{
    getList(){
      let self = this;
      self.goodsList=[]
      self.Loading.open()
      self.$http.get('/api/ce140030bb774abe',{
        params:{
          billNo:self.billNo
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          self.data = res.data;
          for(let item in self.data.goods){
            self.data.goods[item].id=item
            self.goodsList.push(self.data.goods[item])
          }
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    goFastMall(billNo){
      
      this.$router.push('/users/fastMail?billNo='+billNo)
    },
    goPay(){
      this.$router.push('/users/pay')
    },
    init:function () {
        $(".orderList li:gt(1)").hide();
    },
    showMore:function () {
        $(".orderList li:gt(1)").toggle();
        this.icons = !this.icons;
        this.showIndex==100?this.showIndex=2:this.showIndex=100
    }

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/orders.css';

  .order-line .content dl dd{
    padding: 0;
  }

  .tip-txt{
    position: absolute;
    width: 100%;
    top: 40%;
    transform: translateY(-50%);
  }
  .order-line .content dl dd .iconsfont{
    font-size: .6rem;
  }
  .order-list .order-line .content dl dd.longRight em{
    flex: 2;
  }
</style>
