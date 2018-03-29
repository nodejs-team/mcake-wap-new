<template>
	    <dl class="ka-quan">
          <dt @click="showPj=!showPj">
	          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>现金卡</i></h2>
	          <span>暂无使用</span>
	          <!-- <i class="icon iconsfont icons-yuanshang acrows"></i> -->
	          <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:showPj}"></i>
          </dt>
          <dd>
           <div class="card">
             <div class="card-item cash">
                <div class="card-left">
                  <div class="card-con-top">某类型现金卡</div>
                  <div class="card-con-bottom">
                    <h3>使用条件：</h3>
                    <p>限用于中秋专享活动 <br>
                    不可与优惠券一同使用</p>
                  </div>
                </div>
                <div class="card-right">
                  <div class="card-con-top">使用日期：<br> <span>2017.8.28之前</span></div>
                  <div class="card-con-bottom">
                    <h3>额度：</h3>
                    <span>299</span>
                  </div>
                </div>
             </div>
           </div>
            <div class="quan-add">
              <input type="number" placeholder="现金卡兑换码"> <span class="add">添加</span>
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