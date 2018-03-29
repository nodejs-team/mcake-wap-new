<template>
	     <dl class="ka-quan">
          <dt @click="showPj=!showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>使用积分</h2>
          <span>暂无使用</span>
           <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:showPj}"></i>
          </dt>
          <dd>
            <div class="quan-add">
              <input type="number" placeholder="输入您要使用的积分"> <span class="add">添加</span>
            </div>
            <p class="text">账户可用积分239分（每100积分可抵用1元人民币）</p>
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