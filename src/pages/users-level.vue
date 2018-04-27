<template>
  <div class="users level">
    <div class="level-header">
      <div class="mylevel"><span v-if='level'>V{{level}}</span></div>
      <div class="txt">{{msg}}</div>
      <div class="level-line"></div>
      <div class="dot"></div>
      <span class="uname">{{uname}}</span>
    </div>
    <div class="level-main">
      <ul>
        <li :class='{cur:level==1}'>
          <div class="level-left"><span>V1</span></div>
          <div class="level-center">免费领取会员卡</div>
          <div class="level-right">消费累计 0元</div>
        </li>
        <li :class='{cur:level==2}'>
          <div class="level-left"><span>V2</span></div>
          <div class="level-center">参加抢红包活动</div>
          <div class="level-right">消费累计 500元</div>
        </li>
        <li :class='{cur:level==3}'>
          <div class="level-left"><span>V3</span></div>
          <div class="level-center">尊享永久订购9.8折优惠</div>
          <div class="level-right">消费累计 2000元</div>
        </li>
        <li :class='{cur:level==4}'>
          <div class="level-left"><span>V4</span></div>
          <div class="level-center">尊享永久订购9.5折优惠</div>
          <div class="level-right">消费累计 5000元</div>
        </li>
        <li :class='{cur:level==5}'>
          <div class="level-left"><span>V5</span></div>
          <div class="level-center">进入蛋糕五折购买区</div>
          <div class="level-right">消费累计 10000元</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'level',
    props: [],
    components: {
    },
    data () {
      return {
        msg: '',
        level: '',
        uname:''
      }
    },
    mounted(){
      this.getIntegral();
    },
    methods:{
      getIntegral(){
        let self = this;
        self.Loading.open()
        self.$http.get('/api/5ec350ef90d3f7d3',{

        }).then(function(res){  //接口返回数据
          self.Loading.close()
          console.log(res);
          if(res.code==1){
              self.level = res.data.rid
              self.msg = res.data.msg
              self.uname = res.data.uname
              self.init()
          }
        },function(error){  //失败
          console.log(error);
        });
      },
      init:function () {
         $(".level-header .dot").addClass("level-"+this.level);
      }
    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';

  .mylevel span{
    vertical-align: top;
  }
  .users.level .uname{
    position: absolute;
    font-size: .46rem;
    color: #fff;
    left: .5rem;
    top: 1.24rem;
  }
</style>
