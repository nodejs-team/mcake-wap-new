<template>
  <div class="pro-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2" >
    <div :class="{blur:isblur,products:true}" @click='cartDialog($event)'>
      <ul class="clearfix" >
        <li class="pro-li" v-for="(item,index) in prolist" >
          <div class="pro-liimg">
            <router-link :to="'/detail/'+item.id">
              <img v-lazy='item.img' v-if='item.img'>
              <!-- <div class="liImg" :style="{backgroundImage: 'url(' + item.goodsImageUrl + ')'}" > -->
              <!-- </div> -->
            </router-link>
            <div class="cart-icon" data-target='1' :data-id='item.id' :data-img='item.img'></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">{{item.name}}</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">{{item.french}}</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">
                {{item.price}}
              </span> <b>.00</b></span>
              <div class="btn-gobuy" data-target='2' :data-id='item.id' :data-img='item.img'><span data-target='2' :data-id='item.id' :data-img='item.img'>立即订购</span></div>
            </div>
          </div>
        </li>

      </ul>
      <ul>
        <p v-show='isloadAll'>别扯了，我也是有底线的</p>
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
      cartItem:'',
      page:0,
      count:'',
      isloadAll:false,
      ismounted:true,
      iswatch:false,
      isrouter:false
    }
  },
  props:['id'],
  watch:{
    'id':function(){
      console.log('id')
      console.log(this.id)
      if(!this.id){
        return false
      }

       this.loading=false;
       this.isloadAll=false;
       this.page=0,
       this.count='';
       this.prolist=[];
       console.log('watch')
       this.iswatch=true;
       this.getList()
        
       
    },
  },
  //缓存了组件后需要调用该方法
  activated(){
    // console.log(this.id)
    this.loading=false;
    this.isloadAll=false;
    
    if(this.ismounted){
      console.log('activated')
       this.getList();
    }
  },
  mounted(){
    console.log(this)
    // console.log(this.id)
    this.loading=false;
    
    if(this.ismounted){
      console.log('mounted')
      this.ismounted=false;
      this.getList();
    }
    

  },
  deactivated: function () {
      console.log(4)
      this.loading=true;
  },
  methods:{
    getGoodsDetail(id,img){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/cc69f751ce690b6f',{
        params:{
          id:id,
          client:2
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        self.loading = false;
        console.log(res);
        if(res.code==1){
          if(self.addtype){
            self.cartItem = res.data;
            self.cartItem.baseImg = img
            self.cartItem.cartName = self.addtype==1?'shop':'nowbuy'
            self.isShowDialog = true;
            self.isblur = true
          }
        }
        self.isload=true

      },function(error){  //失败
        console.log(error);
      });
    },
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
      if(this.isloadAll){
        return false;
      }
      if(this.iswatch){
        return false
      }
      console.log('more')
      this.getList()
    },
    cartDialog(e){
      let id = e.target.dataset.id
      let img = e.target.dataset.img
      console.log(e.target.dataset)
      this.addtype= e.target.dataset.target
      if(id&&img){
        this.getGoodsDetail(id,img)
      }
      
    },
    closeDialog(){
      this.isblur = this.isShowDialog = false;
    },
    getCookie(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
    },
    getList:function () {
      var self = this
      self.page++;
      if(self.loading){
        return false;
      }
      self.loading = true;
      if((self.count==self.prolist.length)&&self.count){
        self.isloadAll=true
        // self.Toast('已全部加载完毕')
        return false;
      }
      self.Loading.open()
      self.$http.get('/api/0434b49d1ac28f9d',{
        params:{
          cityId:self.getCookie('mcake_cityid')?this.getCookie('mcake_cityid'):110,
          page:self.page,
          fid:self.$route.params.listid
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        self.loading = false;
        self.iswatch=false;
        console.log(res);
        if(res.code==1){
          
          self.count = res.data.count
          let list = res.data.list
          for(let i=0;i<list.length;i++){
            self.prolist.push(list[i])
          }
        }else{
          self.isloadAll=true
          self.Toast(res.msg)
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
