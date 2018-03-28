<template>
  <div>
    <my-dialog :is-show="isShowDialog" @on-close="closeDialog" class='home_addcart'>

      <div class="cart-dialog">
         <div class="cart-content">
           <div class="cart-pro flex-h flex-hw">
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
           </div>
           <div class="cart-line">
              <div class="items">
                <h3>大小选择</h3>
                <select>
                  <option value="1" selected = "selected">1磅-适合1-3人食用</option>
                  <option value="2">1磅-适合3-5人食用</option>
                  <option value="3">1磅-适合5-7人食用</option>
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
                  :default-value="item.num"
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
      value:''
    }
  },
  mounted(){
    this.value=this.item.num
  },
  watch:{
    item:function(){
      this.value=this.item.num
    }
  },
  props:['item'],
  methods:{
    confirm(){
      this.item.num=this.value
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

</style>
