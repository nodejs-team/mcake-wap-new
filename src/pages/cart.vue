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
                  content: '<span class=cartItem-delete style=width:1.4rem>删除</span>',
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
                <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                <div class="content">
                  <p>cookies au beurre </p>
                  <p><h2>云顶小花曲奇</h2>（抹茶味）</p>
                  <div class="fittings">
                    <h2>配件</h2>
                    <p>蜡烛：1</p>
                    <p>巧克力牌：2</p>
                  </div>
                </div>
                <div class="edit">
                  <i class="icon iconsfont icons-gaixie" @click='edit(item)'></i>
                  <p class="price">￥{{item.price | toDecimal2}}</p>
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
          <li class="kankan"><span>再逛逛</span></li>
          <router-link tag='li' class='btn-count' to='/nowBuy'>
            <span>结算</span>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="cartBottom"></div>
    <cartDialog v-on:closeDialog='closeDialog' v-show='showDialog'  :item='cartItem'></cartDialog>
  </div>
</template>

<script>
import cartDialog from '../components/cart-dialog'
export default {
  name: 'cart',
  props: [],
  components: {
    cartDialog
  },
  computed:{
    total:function(){
      let t=0
      for(let i=0;i<this.cartList.length;i++){
        if(this.cartList[i].ischecked){
          t+=this.cartList[i].price*this.cartList[i].num
        }
      }
      return t;
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
  data () {
    return {
      msg: '购物车',
      isSearch: false,
      cartList:[],
      showDialog:false,
      cartItem:''
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.cartList=[{
        num:1,
        price:298,
        ischecked:true
      },{
        num:1,
        price:398,
        ischecked:true
      }]
    })
  },
  methods:{
    check(item){
      item.ischecked=!item.ischecked
    },
    edit(item){
      this.cartItem=item
      this.showDialog=true;
    },
    closeDialog(){
      this.showDialog=false;
    },
    Delete(data){
      //alert(data)
      this.cartList.splice(data,1)
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
</style>
