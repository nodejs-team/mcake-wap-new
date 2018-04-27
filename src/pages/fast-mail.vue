<template>
  <div class="container-wrap">
      <div class="fast-mail">
        <div class="mail-banner">
          <div class="state">
            <span v-if='data.billStatus==0'>已建立</span>
            <span v-if='data.billStatus==1'>已审核</span>
            <span v-if='data.billStatus==2'>已生产</span>
            <span v-if='data.billStatus==3'>已入库</span>
            <span v-if='data.billStatus==4'>已出库</span>
            <span v-if='data.billStatus==5'>配送站收货</span>
            <span v-if='data.billStatus==6'>已配送</span>
            <span v-if='data.billStatus==7'>已完成</span>
            <span v-if='data.billStatus==8'>部分退货</span>
            <span v-if='data.billStatus==9'>全部退货</span>
            <span v-if='data.billStatus==10'>已取消</span>
            <span v-if='data.billStatus==11'>配送自购</span>
          </div>
          <img src="../style/images/mail.jpg" alt="">
        </div>
        <div class="ziti-address">
          <div class="content">
            <div class="address_box">
              <ul>
                <div class="person_info">
                  <li><i class="icon iconsfont icons-me"></i>
                    <b>派送员</b>
                    <span>{{data.distributionTechnicianName}}</span>
                  </li>
                  <li><i class="icon iconsfont icons-shoujihao"></i>
                    <b>联系方式</b>
                    <span>{{data.mobile}}</span>
                  </li>
                </div>
                <li><i class="icon iconsfont icons-shoujihao"></i>
                  <b>详细物流信息</b>
                </li>
                <div class="wulist">
                  <ul>
                    <li v-for='item in data.billTrace'><b>{{item.content}}</b><span>{{item.createTime}}</span></li>
                  </ul>
                </div>
              </ul>
            </div>


          </div>
        </div>


      </div>

    <div class="marginBottom"></div>
  </div>
</template>

<script>

export default {
  name: 'orders',
  props: [],
  components: {

  },
  data () {
    return {
      msg: '结算页',
      isShowPj:false,
      data:''
    }
  },
  mounted(){
      
  },
  activated(){
    this.getDetail();
  },
  methods:{
    getDetail(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/502de4fc8c30ecea',{
        params:{
          billNo:this.$route.query.billNo
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          self.data = res.data;
        }
      },function(error){  //失败
        console.log(error);
      });
    },
      init:function () {
       // $(".peijian dd").hide();
      },
    showPj:function () {
       this.isShowPj = !this.isShowPj;
    }

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/cart.css';

  .address_box{
    text-align: left;
  }
  .ziti-address .address_box ul li{
    padding-left: 1.14rem;
    font-size: .34rem;
  }
  .icon.iconsfont.icons-shoujihao{
    /*margin-left: 0;*/
    margin-left: .1rem;
    font-size: .5rem;
  }
  .ziti-address .address_box .wulist ul li{
    display: flex;
  }
  .fast-mail .wulist ul li b{
    font-size: .28rem;
    flex: 5 !important;
  }
  .fast-mail .wulist ul li span{
    text-align: right;
    font-size: .28rem;
    flex: 3 !important;
  }
  .person_info li{
    display: flex;
  }
  .person_info b{
    flex: 2
  }
  .person_info span{
    flex: 8;
    text-align: right;
    padding-right: .5rem;
  }
  .fast-mail .mail-banner .state span{
    margin-right: .3rem;
  }
</style>
