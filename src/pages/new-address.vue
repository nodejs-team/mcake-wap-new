<template>
  <div class="container-wrap">
    <div class="new-address">
      <div class="content">
        <div class="address_box">
          <ul>
            <li><i class="icon iconsfont icons-me"></i>
              <input type="text" class="input_txt" placeholder="收货人">
            </li>
            <li><i class="icon iconsfont icons-shoujihao"></i>
              <input type="text" class="input_txt" placeholder="联系方式">
            </li>
            <li><i class="icon iconsfont icons-map"></i>
              <input type="text" class="input_txt" placeholder="城市">
            </li>
            <li><i class="icon iconsfont icons-map"></i>
              <input type="text" class="input_txt" placeholder="地区">
            </li>
            <li><i class="icon iconsfont icons-map"></i>
              <input type="text" class="input_txt" placeholder="请输入收货地址">
            </li>

          </ul>
        </div>
        <div class="set-address">
          <p ><span @click='uncheck=!uncheck'><i :class="{icon:true, iconsfont:true, 'icons-dui':true,uncheck:uncheck}"></i><b>设为默认</b></span></p>
        </div>
        <div class="btns fixed2">
          <ul >
            <li @click="confirmAdd"><span>确认添加</span></li>
          </ul>
        </div>
      </div>

    </div>
    <div class="marginBottom"></div>
  </div>
</template>

<script>
  import dialogTips from '../components/dialog-tips'
export default {
  name: 'orders',
  props: [],
  components: {
    myDialog: dialogTips
  },
  data () {
    return {
      msg: '我的订单',
      isaddAddress:false,
      isZiti:false,
      uncheck:false
    }
  },
  mounted(){

  },
  methods:{
    init:function () {

    },
    addAddress:function () {
      this.isaddAddress=true;
    },
    confirmAdd:function () {
      // this.isaddAddress=false;
      this.$router.go(-1)
    },
    ziTi:function () {
      this.isZiti=true;
    },
    confirmziti:function () {
      this.isZiti=false;
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/orders.css';

  .address_box .icon.iconsfont.icons-me{
    /*font-weight: bold;*/
    font-size: .8rem;
    color: #888888;
  }
  .address_box .icon.iconsfont{
    font-size: .6rem;
  }
  .new-address .address_box ul li .icon.icons-map{
    left: .36rem;
  }
  .new-address .icons-dui{
    font-size: .3rem;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
  }
  .new-address .icons-dui.uncheck{
    background-color: #b7b7b7;
  }
</style>
