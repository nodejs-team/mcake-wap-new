<template>
  <div class="pro-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2" >
    <div :class="{blur:isblur,products:true}" @click='cartDialog($event)'>
      <ul class="clearfix" >
        <li class="pro-li" v-for="(item,index) in prolist" >
          <div class="pro-liimg">
            <router-link :to="{ name: 'detail'}">
              <img v-lazy='item.goodsImageUrl' v-if='item.goodsImageUrl'>
              <!-- <div class="liImg" :style="{backgroundImage: 'url(' + item.goodsImageUrl + ')'}" > -->
              <!-- </div> -->
            </router-link>
            <div class="cart-icon" data-target='1' :data-item='index'></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">{{item.title}}</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">{{item.shortTitle}}</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">
                {{item.defaultPrice}}
              </span> <b>.00</b></span>
              <div class="btn-gobuy" data-target='2' :data-item='index'><span data-target='2' :data-item='index'>立即订购</span></div>
            </div>
          </div>
        </li>

      </ul>
      <ul>
        <p>加载更多。。。</p>
      </ul>

    </div>

    <my-footer></my-footer>
    <cartDialog v-on:closeDialog='closeDialog' v-show='isShowDialog'  :item='cartItem' :showCart='isShowDialog'></cartDialog>
  </div>
</template>

<script>
import footer from '../components/footer'
import dialog from '../components/dialog'
import cartDialog from '../components/cart-dialog'
import '../style/css/cart.css'
export default {
  name: 'list',
  components: {
    myFooter: footer,
    myDialog: dialog,
    cartDialog
  },
  data () {
    return {
      loading:false,
      isblur:false,
      showChildMsg:'ddddd',
      isShowDialog:false,
      prolist:[],
      data:'',
      value:1,
      isload:false,
      addtype:1,//1加入购物车。2立刻购买
      cartItem:''
    }
  },
  props:['id'],
  watch:{
    'id':function(){
      this.prolist=[];
      // alert(1)
      this.init()
    }
  },
  //缓存了组件后需要调用该方法
  activated(){
    console.log(this.id)
    this.loading=false;
    this.init();

  },
  mounted(){
    console.log(this.id)

    this.init();

  },
  deactivated: function () {
      console.log(4)
      this.loading=true;
  },
  methods:{
    insure(){
      if(this.addtype==1){
        this.MessageBox('提示','加入购物车成功')
        this.isblur = this.isShowDialog = false;
      }else{
        this.isblur = this.isShowDialog = false;
        this.$router.push('/nowbuy')
      }
    },
    plus(){
      
    },
    loadMore(){
      if(!this.isload){
        return false
      }
      this.loading = true;
      // setTimeout(() => {
      //   let last = this.prolist.length - 1;
      //   for (let i = 1; i <= 2; i++) {
      //     this.prolist.push(this.prolist[0]);
      //     //console.log(this.prolist);
      //   }
      //   this.loading = false;
      // }, 500);
      this.init()
    },
    cartDialog(e){
      let index = e.target.dataset.item
      this.cartItem = this.prolist[index]
      this.addtype= e.target.dataset.target
      if(this.addtype){
        
        this.isShowDialog = true;
        this.isblur = true
      }
      // this.addtype=type
    },
    closeDialog(){
      this.isblur = this.isShowDialog = false;
    },
    init:function () {
      // console.log(11111)
      var self = this
      self.Loading.open()
      self.$http({
        method:'GET',
        url:this.API.goods
      }).then(function(response){  //接口返回数据
        //this.data=response.data;
        // this.prolist=this.data.goodsList;
        self.Loading.close()
        self.loading = false;
        console.log(response.data.goodsList);
        let prolist = response.data.goodsList
        for(let i=0;i<prolist.length;i++){
          self.prolist.push(prolist[i])
        }
        self.isload=true

      },function(error){  //失败
        console.log(error);
      });


    }
  }
}
</script>

<style scoped>

</style>
