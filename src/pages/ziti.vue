<template>
  <div class="container-wrap">
    <div class="ziti-address">
      <div class="content">
        <div class="address_box">
          <ul>
            <li><i class="icon iconsfont icons-me"></i>
              <input type="text" class="input_txt" placeholder="收货人">
            </li>
            <li><i class="icon iconsfont icons-shoujihao"></i>
              <input type="text" class="input_txt" placeholder="联系方式">
            </li>
            <li v-for='item in dataList'  :class='{on:addressId==item.id}' @click='addressId=item.id'><i class="icon iconsfont icons-address"></i>
              <b>{{item.name}}</b>
              <span>{{item.address}}</span>
            </li>
            

          </ul>
        </div>
        <div class="btns fixed2">
          <ul >
            <li @click="confirmziti"><span>确认</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="cartBottom"></div> -->
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
      defaultIndex:-1,
      addressId:-1,
      dataList:[
        {
          name:'杨浦站',
          address:'东体育会路868号（靠近赤峰路)',
          id:1
        },
        {
          name:'金桥站',
          address:'金桥镇枣庄路644号（近张杨路）',
          id:2
        },
        {
          name:'浦东站',
          address:'莲安东路395号（近莲溪路）',
          id:3
        },
        {
          name:'普陀站',
          address:'真光路539弄5号楼1楼',
          id:4
        },
        {
          name:'莘庄站',
          address:'银都路3115号',
          id:5
        },
        {
          name:'滴水湖站',
          address:'莲安东路399弄34号101室',
          id:6
        },

      ]
    }
  },
  mounted(){
    
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
  .icon.iconsfont.icons-shoujihao{
    font-size: .5rem;
  }
  .ziti-address{
    padding-bottom: 2rem;
  }
  .new-address .address_box ul li input, .ziti-address .address_box ul li input{
    padding-left: 0;
  }
  .new-address .address_box ul li, .ziti-address .address_box ul li{
    padding-left: 1rem;
  }
  /*.new-address .address_box ul li, .ziti-address .address_box ul li{
    min-height: 1.25rem;
    height: auto;
  }*/
</style>
