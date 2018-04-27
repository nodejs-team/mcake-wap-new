<template>
  <div class="cart">
    <div class="content">
      <div class="cart-list">
        <ul>
          <template v-for='(item,index) in cartList'>
            <mt-cell-swipe
              value=''
              title=''
              :right="[
                {
                  content: '<span class=cartItem-delete style=width:1.5rem>删除</span>',
                  style: { background: 'red', color: '#fff' },
                  handler: () => Delete(index)
                }
              ]"
              >

              <li class="flex-h">
                <div class="check">
                 <!-- <i class="icon iconsfont icons-guanbi"></i> -->
                 <span :class="{checkbox_wrap:true,ischecked:item.ischecked}" @click='check(item)'></span>
                </div>
                <div class="pro-img"><img :src="item.img" alt="" ></div>
                <div class="content">
                  <p>{{item.french}}</p>
                  <p><h2>{{item.name}}</h2><!-- （抹茶味） --></p>
                  <div class="fittings">
                    <h2>配件</h2>
                    <p>蜡烛：1</p>
                    <p>巧克力牌：2</p>
                  </div>
                </div>
                <div class="edit">
                  <i class="icon iconsfont icons-gaixie" @click='edit(item)'></i>
                  <p class="price">￥{{item.price | toDecimal2}}</p>
                  <p class="itemNum">数量：{{item.num}}</p>
                </div>
              </li>
            </mt-cell-swipe>
          </template>
        
        </ul>
      </div>
      <div class="recommend">
        <h2>为你推荐</h2>
        <ul class="clearfix">
          <li>
            <img src="../style/images/car-img.jpg" alt="" >
            <p>云顶小花曲奇</p>
          </li>
          <li>
            <img src="../style/images/car-img.jpg" alt="" >
            <p>云顶小花曲奇</p>
          </li>
          <li>
            <img src="../style/images/car-img.jpg" alt="" >
            <p>云顶小花曲奇</p>
          </li>
          <li>
            <img src="../style/images/car-img.jpg" alt="" >
            <p>云顶小花曲奇</p>
          </li>
        </ul>
      </div>

    </div>
    <div class="bottom-count fixed">

      <div class="btns">
        <div class="total-count">
          <span>合计：</span>
          <span class="count-price textRight"><i>￥</i>{{total | toDecimal2}}</span></div>
        <ul>
          <router-link tag='li' class='kankan' to='/home'>
            <span>再逛逛</span>
          </router-link>
          <li class='btn-count'  @click='nowBuy'>
            <span>结算</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="cartBottom"></div>
    <cartDialog v-on:closeDialog='closeDialog' v-show='showDialog'  :item='cartItem' :showCart='showDialog' v-on:changenum='changenum'></cartDialog>
  </div>
</template>

<script>
import cartDialog from '../components/cart-dialog'
export default {
  name: 'cart',
  components: {
    cartDialog
  },
  computed:{
    total:function(){
      let t=0
      for(let item in this.cartList){
        if(this.cartList[item].ischecked){
          t+=this.cartList[item].price*this.cartList[item].num
          this.num+=this.cartList[item].num-0
        }
      }
      // for(let i=0;i<this.cartList.length;i++){
      //   if(this.cartList[i].ischecked){
      //     t+=this.cartList[i].price*this.cartList[i].num
      //   }
      // }
      return t;
    }
  },
  props:['ischchangeList'],
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
  watch:{
    ischchangeList: {
　　　　handler(newValue, oldValue) {
        if(this.ischchangeList.num==1){
          return false;
        }
        this.getCartList();
　　　　},
　　　　deep: true
　　}
  },
  data () {
    return {
      msg: '购物车',
      isSearch: false,
      cartList:[],
      showDialog:false,
      cartItem:'',
      ismounted:false,
      num:0,
      submitId:[]
    }
  },
  mounted(){
    // console.log(this.clearCart)
    // console.log(11)
    // this.ismounted=true
    // this.getCartList();
  },
  activated(){

    this.getCartList();
  },

  methods:{
    nowBuy(){
      this.submitId=[]
      for(let item in this.cartList){
        if(this.cartList[item].ischecked){
          this.submitId.push(this.cartList[item].id)
        }
      }
      this.$router.push('/nowBuy?id='+this.submitId.join(','))
      console.log(this.submitId)
    },
    changenum(data,num){
      this.num=num
      this.showDialog=false;

      this.$nextTick(function(){
         this.cartList2=[]
         for(let key in data){
          data[key].ischecked=true
          this.cartList2.push(data[key])
         }
         for(let i=0;i<this.cartList2.length;i++){
          this.cartList2[i].ischecked=this.cartList[i].ischecked
         }
         this.cartList=this.cartList2
      })
      // this.getCartList()
    },
    getCartList(){
      let self = this;
      self.cartList=[]
      self.Loading.open()
      self.detailData=''
      self.$http.get('/api/5e49d89248023811',{

      }).then(function(res){  //接口返回数据
        self.Loading.close()
        self.ismounted=false
        console.log(res);
        self.cartList=[]
        if(res.code==1){
          self.$nextTick(function(){
            // self.cartList = res.data;
             for(let key in res.data){
              // alert(key)
              res.data[key].ischecked=true
              self.cartList.push(res.data[key])
             }
          })
         
        }
      },function(error){  //失败
        console.log(error);
      });
    },
    check(item){
      item.ischecked=!item.ischecked
    },
    edit(item){
      this.cartItem=item
      this.cartItem.cartName='edit'
      this.showDialog=true;
    },
    closeDialog(){
      this.showDialog=false;
    },
    Delete(index){
      let self = this;
      self.Loading.open()
      self.detailData=''
      self.$http.post('/api/c5cc50070b5c48db',{
          id:self.cartList[index].id
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          self.cartList.splice(index,1)
        }
      },function(error){  //失败
        console.log(error);
      });

      

      
    },
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          console.log(instance)
          // Dialog.confirm({
          //   message: '确定删除吗？'
          // }).then(() => {
          //   instance.close();
          // });
          break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checkbox_wrap{
    width: .4rem;
    height: .4rem;
    display: inline-block;
    /*border-radius: 0.08rem;*/
    background-color: #ffcd20;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image: url(/static/images/checked.png);
    background-size: .3rem;
    background-position: center;
    background-color: #b7b7b7;
    border-radius: 0.01rem;
  }
  .checkbox_wrap.ischecked{
    
    background-color: #ffcd20;
  }
  .itemNum{
    font-size: .24rem;
    text-align: right;
  }
</style>
