<template>
  <div class="container-wrap">
    <div class="address">
      <div class="order-line address" v-for='(item,index) in dataList'>
        <div :class="{content:true,default:defaultIndex==item.addressId}" >
          <dl>
            <i @click='checkAddress(item.addressId)'  :class="{icon:true,iconsfont:true, 'icons-dui':true, 'i-selected':true, on:nowindex==item.addressId}"></i>
            <i class="icon iconsfont icons-gaixie i-edit" @click='edit(item.addressId)'></i>
            <dd><b>联系人：</b><em>丁志文</em></dd>
            <dd><b>联系方式：</b><em>13485565120</em></dd>
            <dd><b>配送地址：</b><em>上海市普陀区真北路真光路交叉口长征工业园区1130弄，5号楼西侧一楼102。</em></dd>
          </dl>

          <div class="pro-btns">
            <ul>
              <li class="on" @click='defaultIndex=item.addressId'><i class="icon iconsfont icons-gaixie"></i>设为默认地址</li><em></em>
              <li @click='delele(item.addressId)'><i class="icon iconsfont icons-lajixiang delete"></i>删除</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="order-line">
        <div class="content" @click="ziTi">
          <div class="ziti"><i class="icon iconsfont icons-add"></i><span>选中自提点</span></div>
        </div>
      </div>
      <div class="add-address" @click="addAddress">
        <span>
        <i class="icon iconsfont icons-add"></i>
        </span>
        <span>新增收货地址</span></div>
    </div>

   <!--  <div class="new-address" v-show="isaddAddress">
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
          <p><span><i class="icon iconsfont icons-dui"></i><b>设为默认</b></span></p>
        </div>
        <div class="btns fixed2">
          <ul >
            <li @click="confirmAdd"><span>确认添加</span></li>
          </ul>
        </div>
      </div>

    </div> -->

<!--     <div class="ziti-address" v-show="isZiti">
      <div class="content">
        <div class="address_box">
          <ul>
            <li><i class="icon iconsfont icons-me"></i>
              <input type="text" class="input_txt" placeholder="收货人">
            </li>
            <li><i class="icon iconsfont icons-shoujihao"></i>
              <input type="text" class="input_txt" placeholder="联系方式">
            </li>
            <li><i class="icon iconsfont icons-address"></i>
              <b>杨浦站</b>
              <span>东体育会路868号（靠近赤峰路）</span>
            </li>
            <li class="on"><i class="icon iconsfont icons-address"></i>
              <b>金桥站</b>
              <span>金桥镇枣庄路644号（近张杨路）</span>
            </li>
            <li><i class="icon iconsfont icons-address"></i>
              <b>浦东站</b>
              <span>莲安东路395号（近莲溪路）</span>
            </li>
            <li><i class="icon iconsfont icons-address"></i>
              <b>普陀站</b>
              <span>真光路539弄5号楼1楼</span>
            </li>
            <li><i class="icon iconsfont icons-address"></i>
              <b>莘庄站</b>
              <span>银都路3115号</span>
            </li>
            <li><i class="icon iconsfont icons-address"></i>
              <b>滴水湖站</b>
              <span>莲安东路399弄34号101室</span>
            </li>

          </ul>
        </div>
        <div class="btns fixed2">
          <ul >
            <li @click="confirmziti"><span>确认</span></li>
          </ul>
        </div>
      </div>
    </div> -->
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
      dataList:[],
      nowindex:-1,
      defaultIndex:-1
    }
  },
  mounted(){
    this.dataList=[{
      addressId:1,
      ischecked:false,
      isdefault:false
    },{
      addressId:2,
      ischecked:false,
      isdefault:false
    },{
      addressId:3,
      ischecked:false,
      isdefault:false
    }]
  },
  methods:{
    edit(id){
      this.$router.push('/address/new?id='+id)
    },
    delele(id){
      for(let i=0;i<this.dataList.length;i++){
        if(id==this.dataList[i].addressId){
          this.dataList.splice(i,1)
        }
      }
      
    },
    checkAddress(index){
      this.nowindex=index
    },
    init:function () {

    },
    addAddress:function () {
      // this.isaddAddress=true;
      this.$router.push('/address/new')
    },
    confirmAdd:function () {
      this.isaddAddress=false;
    },
    ziTi:function () {
      this.$router.push('/address/ziti')
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
  .order-line .content dl .i-selected,.order-line .content dl .i-edit{
    z-index: 999;
  }
  .icons-add{
    font-size: .4rem;
    vertical-align: middle;
  }
  .address .order-line.address .content.default{
    background-image: url(/static/images/address_default.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
