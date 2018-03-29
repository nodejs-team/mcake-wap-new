<template>
	     <dl class="ka-quan">
          <dt @click="showPj=!showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>支付方式</i></h2>
          <span>未选择支付方式</span>
          <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:showPj}"></i>
          </dt>
          <dd>
            <div class="payfor clearfix">
              <ul>
                <li>
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>货到付款</b> <br><span>现金支付</span></p>
                </li>
                <li>
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>货到付款</b> <br><span>刷POS</span></p>
                </li>
                <li>
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>货到付款</b> <br><span>刷信用卡</span></p>
                </li>
                <li class="on">
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>在线支付</b></p>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
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
      showPj:false,

    }
  },
  mounted(){
     
  },
  methods:{
  	init:function () {
   // $(".peijian dd").hide();

  	},
 

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/nowbuy.css';

</style>