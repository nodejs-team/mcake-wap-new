<template>
  <div>
    <my-dialog :is-show="showCart" @on-close="closeDialog" class='home_addcart' v-if='item'>

      <div class="cart-dialog">
         <div class="cart-content">
           <div class="cart-pro flex-h flex-hw">
             <div class="pro-img"><img :src="item.goodsImageUrl" alt="" ></div>
             <div class="content">
               <p>{{item.shortTitle}}</p>
               <p><h2>{{item.title}}</h2>（抹茶味）</p>
               <h2>单价：¥{{item.salePrice[pound_index] | toDecimal2}}</h2>
               <div class="fittings">
                 <h2>配件</h2>
                 <p>蜡烛：1</p>
                 <p>巧克力牌：2</p>
               </div>
             </div>
           </div>
           <div class="cart-line">
              <div class="items">
                <h3>大小选择</h3>
                <select v-model='pound_index'>
                  <option :value="index" selected = "selected" v-for='(data,index) in item.pound'>{{data}}磅-适合1-3人食用</option>
                  <!-- <option value="2">1磅-适合3-5人食用</option>
                  <option value="3">1磅-适合5-7人食用</option> -->
                </select>
                <i class="icon iconsfont icons-jiantouxia"></i>
              </div>
            </div>
           <div class="cart-line">
             <div class="items">
               <h3>数量选择</h3>
               <div class="nums">
                 <van-stepper
                 @plus='plus'
                  v-model="value"
                  :default-value="value"
                  />
               </div>
             </div>
           </div>
          <div class="btns2">
            <ul>
              <li class="cancel btn-cancel" @click='closeDialog'><span>取消</span></li>
              <li class="btn-ok" @click='confirm'><span>确认</span></li>
            </ul>
          </div>
         </div>
      </div>
    </my-dialog>
  </div>
</template>

<script>
import dialog from '../components/dialog'
import '../style/css/cart.css'
export default {
  name: 'list',
  components: {
    myDialog: dialog
  },
  data () {
    return {
      loading:false,
      isblur:false,
      showChildMsg:'ddddd',
      isShowDialog:true,
      prolist:[],
      data:'',
      value:'',
      pound_index:0
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
  activated(){

  },
  mounted(){
    this.value=this.item&&this.item.num?this.item.num:1
  },
  watch:{
    item:function(){
      console.log(this.item)
      this.value=this.item&&this.item.num?this.item.num:1
    },

  },
  props:['item','showCart'],
  methods:{
    confirm(){
      if(this.item){
        this.item.num=this.value
        this.item.price = this.item.salePrice[this.pound_index]
      }
      this.Toast('操作成功')
      this.$emit('closeDialog')
    },
    plus(){
      
    },
    closeDialog(){
      this.$emit('closeDialog')
      // this.isblur = this.isShowDialog = false;
    }
  }
}
</script>

<style scoped>
  .dialog-close{
    right: .4rem;
    top: .2rem;
  }
</style>
