<template>

<div>
  <div class="marginBottom"></div>
  <mt-popup v-model="isNavShow" position="left">

    <div class="navBar">
      <div class="marginTop"></div>
      <div @click='filter(item.id)' class="cell_wrap" v-for='item in flavorList'>
        <mt-cell :title="item.name" icon="navIcon icon iconsfont" is-link ></mt-cell>
      </div>
    </div>
  </mt-popup>

  <div class="footer">
    <ul>
      <li @click="isNavShow = !isNavShow"><span>精选</span></li><em></em>
      <li @click="isNavShow = false"><router-link to="/list/10" tag="span">蛋糕</router-link></li><em></em>
      <li @click="isNavShow = false"><router-link to="/list/11" tag="span">小食</router-link></li><em></em>
      <li @click="isNavShow = false"><router-link :to="{ name: 'cart'}" tag="span">购物车<i class="icon-badge"><b>{{cartNum}}</b></i></router-link></li>
    </ul>
  </div>
</div>

</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'foot',
  data () {
    return {
      msg: '尾部导航',
      isNavShow: false,
      flavorList:[],
      cartList:[],
      cartNum:0
    }
  },
  props:['msgFather','clear','num'],
  mounted(){
    this.getflavorList()
    // this.getCartList()
  },
  computed:{

  },
  activated(){
    this.getCartList()
  },
  watch:{
    clear: {
　　　　handler(newValue, oldValue) {
        this.getCartList()
　　　　},
　　　　deep: true
　　},
    num:function(){
      this.getCartList()
    }
  },
  methods: {
    getCartList(){
      let self = this;
      self.cartList=[]
      self.Loading.open()
      self.detailData=''
      // self.cartNum=0
      self.$http.get('/api/5e49d89248023811',{

      }).then(function(res){  //接口返回数据
        self.Loading.close()
        self.cartNum=0
        self.ismounted=false
        console.log(res);
        self.cartList=[]
        if(res.code==1){
          for(let key in res.data){
              // alert(key)
              res.data[key].ischecked=true
              self.cartList.push(res.data[key])
          }
          console.log(self.cartList)
          for(let i=0;i<self.cartList.length;i++){
            self.cartNum+=self.cartList[i].num-0
          }
         // alert(self.cartNum)
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    filter(id){
      //alert(11)
      this.isNavShow=false;
      this.$router.push('/list/'+id)
    },
    navToggle: function (event) {
      console.log(2222);
    },
    getflavorList(){
      var self = this
      self.Loading.open()
      self.$http({
        method:'GET',
        url:'/api/e63ef9a0081241bd'
      }).then(function(res){  //接口返回数据
        //this.data=response.data;
        // this.prolist=this.data.goodsList;

        self.Loading.close()
        self.loading = false;
        console.log(res);
        if(res.code==1){
          self.flavorList=res.data;
        }
        self.isload=true

      },function(error){  //失败
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cell_wrap{
    border-bottom: 1px solid #ccc;
  }
  .cell_wrap:last-child{
    border-bottom: 0;
  }
</style>
