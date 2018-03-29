<template>
    <div>
	     <dl class="ka-quan">
          <dt @click="showPj=!showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i><i>发票</i></h2>
          <span>不开发票</span>
          <i :class="{icon:true, iconsfont:true, 'icons-yuanshang':true, acrows:true, slideDown:showPj}"></i>
          </dt>
          <dd>
            <div class="piao-line">
              <select  id="fapiao">
                <option  value = "发票内容" selected >发票内容</option >
                <option  value = "发票内容" >发票内容</option >
                <option  value = "发票内容" >发票内容</option >
                <option  value = "发票内容" >发票内容</option >
              </select >
              <i class="icon iconsfont icons-arrowdown down"></i>
            </div>
            <div class="piao-line">
              <select  id="fapiao">
                <option  value = "发票类型" selected >发票类型</option >
                <option  value = "发票类型" >发票类型</option >
                <option  value = "发票类型" >发票类型</option >
                <option  value = "发票类型" >发票类型</option >
              </select >
              <i class="icon iconsfont icons-arrowdown down"></i>
            </div>
            <div class="fapiao-bt">
              <div class="text">
                <b>开票金额</b> <span><i>￥</i>289.00</span>
              </div>
              <p>温馨提示: 您填写的所有内容都会被系统自动打印到发票上，请勿填写和发票
                抬头无关的信息。</p>
            </div>
            <div class="btns">
              <ul >
                <li class="cancel"><span>取消</span></li>
                <li><span>确认</span></li>
              </ul>
            </div>
          </dd>
        </dl>

         <div class="edit-fapiao" v-show="isEditFapiao">
          <div class="content">
            <div class="textbox">
              <textarea rows="3" cols="20" class="piao-text" v-show="isEdit"></textarea>
                <div class="edit" v-show="isEdit">
                  <i class="icon iconsfont icons-gaixie"></i>
                </div>
            </div>

            <div class="list_box">
              <ul>
                <li><i class="icon iconsfont icons-arrowdown"></i>
                  <select>
                    <option value="0">发票内容</option>
                    <option value="1">发票内容</option>
                  </select>
                </li>
                <li><i class="icon iconsfont icons-arrowdown"></i>
                  <select>
                    <option value="0">发票类型</option>
                    <option value="1">发票类型</option>
                  </select>
                </li>
              </ul>
            </div>

            <div class="fapiao-bt">
              <div class="text">
                <b>开票金额</b> <span><i>￥</i>289.00</span>
              </div>
              <p>温馨提示: 您填写的所有内容都会被系统自动打印到发票上，请勿填写和发票
                抬头无关的信息。</p>
            </div>

            <div class="btns fixed2">
              <ul >
                <li class="cancel"><span>取消</span></li>
                <li><span>确认</span></li>
              </ul>
            </div>

          </div>
    </div>
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