<template>
	     <dl class="ka-quan">
          <dt @click="showPj=!showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>订单备注</i></h2>
          <span>暂无备注</span>
          <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:showPj}"></i>
          </dt>
          <dd>
            <div class="piao-line">
              <textarea rows="3" cols="20" class="piao-text" placeholder="请填写您要备注的内容"></textarea>
            </div>


            <div class="btns">
              <ul >
                <li class="cancel"><span>取消</span></li>
                <li><span>确认</span></li>
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