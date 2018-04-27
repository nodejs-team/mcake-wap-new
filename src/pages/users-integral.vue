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
        <li v-for='item in list'>
          <div class="list-content">
            <h2><i class="icon iconsfont icons-money2"></i><span>{{item.remark}}</span></h2>
            <span v-if='item.changeType==1'>消费赠送</span>
            <span v-if='item.changeType==2'>积分使用</span>
            <p><i class="icon iconsfont icons-money2"></i><span class="times">消费日期：{{item.createTime}}</span></p>
          </div>
          <div class="pingjia">
            <p>{{item.changeAccount}}</p>
            <span v-if='item.changeType==1'>评价获得积分</span>
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
      integral:0,
      list:[]
    }
  },
  watch:{
   
  },
  mounted(){
    //console.log(CountUp)
    this.getIntegral()
  },
  activated(){
    this.getIntegral()
  },
  methods:{
    getIntegral(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/2e52b040c23f374c',{

      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
            self.integral = res.data.total;
            self.list = res.data.list
            self.init()
        }
      },function(error){  //失败
        console.log(error);
      });
    },
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
  .users.integral .btns{
    position: fixed;
    bottom: 0rem;
    left: 0;
    width: 100%;
    z-index: 99;
    padding: .2rem 0;
    background-color: #fff;
  }
  .integral .integral-list, .money .integral-list{
    padding-bottom: 2rem;
  }
</style>
