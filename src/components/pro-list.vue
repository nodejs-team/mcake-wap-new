<template>
  <div class="pro-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2" v-show='showList' id='list'>
    <div :class="{blur:isblur,products:true}" >
      <ul class="clearfix" >
        <li class="pro-li" v-for="(item,index) in prolist" @click='cartDialog($event,item)'>
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
                {{item.price | toDecimal2}}
              </span> </span>
              <div class="btn-gobuy" data-target='2' :data-id='item.id' :data-img='item.img'><span data-target='2' :data-id='item.id' :data-img='item.img'>立即订购</span></div>
            </div>
          </div>
        </li>

      </ul>
      <ul>
        <p v-show='isloadAll'>别扯了，我也是有底线的</p>
      </ul>

    </div>

    <my-footer :num='cartnum' :clear='clear'></my-footer>
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
      isrouter:false,
      ischange:false,
      showList:true,
      nomore:true,
      cartnum:0
    }
  },
  filters:{
      toDecimal2(x) { 
        var f = parseFloat(x); 
        if (isNaN(f)) { 
        return false; 
        } 
        var f = Math.round(x*100)/100; 
        var s = f.toString(); 
        var rs = s.indexOf('.'); 
        if (rs < 0) { 
        rs = s.length; 
        s += '.'; 
        } 
        while (s.length <= rs + 2) { 
        s += '0'; 
        } 
        return s; 
      } 
  },
  props:['id','ischchangeList','clear'],
  watch:{
    'id':function(newValue, oldValue){
      console.log('id')
      console.log(this.id)
      if(!this.id){
        return false
      }
      if(!oldValue){ 
        return false
      }
       this.loading=false;
       this.isloadAll=false;
       this.page=0,
       this.count='';
       this.prolist=[];
       console.log('watch')
       this.iswatch=true;

       this.getList(1)  
    },
    ischchangeList: {
　　　　handler(newValue, oldValue) {

　　　　　 if(this.ischchangeList.num==1){
          return false
         }
         if(this.$route.path.includes('/home')||this.$route.path.includes('/list')){
           this.prolist=[];
           this.loading=false;
           this.isloadAll=false;
           this.page=0,
           this.count='';
           
           this.iswatch=true;
           this.ismounted=true;
           this.getList(1)
         }
　　　　},
　　　　deep: true
　　}
  },
  //缓存了组件后需要调用该方法
  activated(){
    // console.log(this.id)

    this.showList=true
    this.nomore=true;
    if(this.ischchangeList.ischange){
      // alert(1)
       this.prolist=[];
       this.loading=false;
       this.isloadAll=false;
       this.page=0,
       this.count='';
       
       this.iswatch=true;
       this.ismounted=true;
       if(this.$route.path.includes('/home')||this.$route.path.includes('/list')){
        this.getList(1)
        // location.reload()
       }else{
        this.getList(0) 
       }
    }else{
      // alert(2)
      this.loading=false;
      this.isloadAll=false;
      if(this.ismounted){
        console.log('activated')
         this.getList(1);
      }
    }

  },
  mounted(){
    this.loading=false;
    this.nomore=true;
    if(this.ismounted){
      console.log('mounted')
      this.ismounted=false;
      this.getList(1);
    }

  },
  deactivated() {
      console.log(4)
      this.loading=true;
      this.ismounted=true;
      this.ischchangeList.ischange=false;
      this.showList=false
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
      if(this.loading){
        return false;
      }
      if(this.nomore){
        return false;
      }
      console.log('more')
      this.getList(1)
    },
    cartDialog(e,item){
      let id = e.target.dataset.id
      let img = e.target.dataset.img
      // console.log(e.target.dataset)
      
      if(id&&img){
        this.addtype= e.target.dataset.target
        this.cartItem=item  
        // this.cartItem = res.data;
        // self.cartItem.baseImg = img
        this.cartItem.cartName = this.addtype==1?'shop':'nowbuy'
        this.isShowDialog = true;
        this.isblur = true 
        return false;
      }
      
         
    },
    closeDialog(num){
      this.isblur = this.isShowDialog = false;
      if(num){
        this.cartnum =num
      }
    },
    getCookie(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
    },
    getList:function (isrefresh) {
      if(!isrefresh){
        return false
      }
      var self = this
      if(self.loading){
        return false;
      }
      self.loading = true;
      if((self.count==self.prolist.length)&&self.count){
        self.isloadAll=true
        // self.Toast('已全部加载完毕')
        return false;
      }
      self.page++;
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
        self.nomore=false;
        console.log(res);
        if(res.code==1){
          if(self.page==1){
            self.prolist=[]
          }
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
