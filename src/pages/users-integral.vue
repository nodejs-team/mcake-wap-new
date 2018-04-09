<template>
  <div class="users integral">
    <div class="topheader">
       <div class="myIntegral">
         <div class="text">
           <b id='integral'></b> <br>
           <span>当前积分</span>
         </div>
       </div>
      <div class="tips">
        <router-link to="/users/integral/use" tag="span"><i class="icon iconsfont icons-money2"></i><span>积分的作用</span></router-link>
        <b>|</b> 
        <router-link to="/users/integral/how" tag="span"><i class="icon iconsfont icons-money2"></i><span>如何获得积分</span></router-link>
      </div>
    </div>
    <div class="integral-list">
      <ul>
        <li>
          <div class="list-content">
            <h2><i class="icon iconsfont icons-money2"></i><span>订单：10358034532804</span></h2>
            <span>消费赠送</span>
            <p><i class="icon iconsfont icons-money2"></i><span class="times">消费日期：2017.7.15</span></p>
          </div>
          <div class="pingjia">
            <p>+99</p>
            <span>评价获得积分</span>
          </div>
        </li>
        <li>
          <div class="list-content">
            <h2><i class="icon iconsfont icons-money2"></i><span>订单：10358034532804</span></h2>
            <span>消费赠送</span>
            <p><i class="icon iconsfont icons-money2"></i><span class="times">消费日期：2017.7.15</span></p>
          </div>
          <div class="pingjia">
            <p>+99</p>
            <span>评价获得积分</span>
          </div>
        </li>
        <li>
          <div class="list-content">
            <h2><i class="icon iconsfont icons-money2"></i><span>订单：10358034532804</span></h2>
            <span>消费赠送</span>
            <p><i class="icon iconsfont icons-money2"></i><span class="times">消费日期：2017.7.15</span></p>
          </div>
          <div class="pingjia">
            <p>+99</p>
            <span>评价获得积分</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="btns">
      <ul >
        <li><span>选蛋糕</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import CountUp from 'countup.js'
export default {
  name: 'integral',
  props: [],
  components: {
  },
  data () {
    return {
      msg: '用户中心',
      isSearch: false,
      integral:249541
    }
  },
  watch:{
   
  },
  mounted(){
    //console.log(CountUp)
    this.init()
  },
  activated(){
    this.init()
  },
  methods:{
    init(){
      let self = this
      var options = {
        useEasing: true, 
        useGrouping: true, 
        separator: ',', 
        decimal: '.', 
      };
      var demo = new CountUp('integral', 0, self.integral, 0, 2.5, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';

  .users.integral .tips .icon{
    font-size: .6rem;
    vertical-align: middle;
  }
  .users.integral .tips .icon:before{
    vertical-align: middle;
  }
  .users.integral .tips .icon+span{
    vertical-align: middle;
    font-size: .3rem;
  }
  .users.integral .integral-list .icon.iconsfont+span{
    color: #000;
    font-size: .34rem;
    padding-left: 0;
  }
  .users.integral .integral-list .icon.iconsfont+span.times{
    font-size: 0.27778rem;
    line-height: 0.69444rem;
    color: #888888;
    padding-left: 0;
  }
  .pingjia p{
    line-height: 1.1rem;
    position: relative;
    top: -.2rem;
  }
  .users.integral .btns{
    padding: 1rem 0;
  }
  .users.integral .integral-list .list-content>p{
    padding-top: .12rem;
  }
</style>
