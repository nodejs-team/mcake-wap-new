<template>
	   <dl class="ka-quan">
          <dt @click="showPj=!showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>优惠券</i></h2>
          <span>暂无使用</span>
          <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:showPj}"></i>
          </dt>
          <dd>
            <div class="card">
              <div class="card-item quan">
                <div class="card-left">10</div>
                <div class="card-content">
                  <div class="card-con-top">满100可使用</div>
                  <div class="card-con-bottom">
                    <h3>coupons</h3>
                    <span>仅使用新品蛋糕</span>
                  </div>
                </div>
                <div class="card-right">
                  <div class="card-con-top">距离到期</div>
                  <div class="card-con-bottom">
                    <span>22天</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="quan-add">
              <input type="number" placeholder="优惠券兑换码"> <span class="add">添加</span>
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