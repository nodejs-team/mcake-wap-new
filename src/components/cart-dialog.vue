<template>
  <div>
    <my-dialog :is-show="showCart" @on-close="closeDialog" class='home_addcart' v-if='item'>

      <div class="cart-dialog">
         <div class="cart-content">
           <div class="cart-pro flex-h flex-hw">
             <div class="pro-img">

              <div class="swiper-container">
                 <div class="swiper-wrapper" >
                   <template v-for='imgs in item.list' v-if='imgs.id==pound_index'>

                     <div class="swiper-slide" v-for='(img,index) in imgs.pic.list'>
                         <img :src="imgs.pic.url+img.s" @click='viewImage(index,imgs.pic.list,imgs.pic.url)'>
                     </div>
                   </template>
                 </div>
               </div>

              <!-- <img :src="item.baseImg" alt="" > -->
             </div>
             <div class="content">
               <p>{{item.french}}</p>
               <p><h2>{{item.name}}</h2></p>
               <h2>单价：¥<template v-for='data in item.list' v-if='data.id==pound_index'>{{data.price | toDecimal2}}</template></h2>
               <div class="fittings">
                 <h2>配件</h2>
                 <p>蜡烛：1</p>
                 <p>巧克力牌：2</p>
               </div>
             </div>
           </div>
           <div class="cart-line">
              <div class="items">
                <h3>规格选择</h3>
                <select v-model='pound_index'>
                  <option :value="data.id"  v-for='(data,index) in item.list'>{{data.spec}}<template v-if='data.edible'>-</template>{{data.edible}}</option>
                  <!-- <option value="2">1磅-适合3-5人食用</option>
                  <option value="3">1磅-适合5-7人食用</option> -->
                </select>
                <span class="cart_guige" v-for='(data,index) in item.list' v-if='pound_index==data.id'>{{data.spec}}<template v-if='data.edible'>-</template>{{data.edible}}</span>
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
                  max=50
                  />
               </div>
             </div>
           </div>
          <div class="btns2">
            <ul>
              <li class="cancel btn-cancel" @click='closeDialog'><span>取消</span></li>
              <li class="btn-ok" @click='addcart(item.cartName)'><span>确认</span></li>
            </ul>
          </div>
         </div>
      </div>
    </my-dialog>
  </div>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js'
import dialog from '../components/dialog'
import '../style/css/cart.css'
import '../../static/css/swiper.min.css';

import { ImagePreview } from 'vant';
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
      value:'1',
      pound_index:0,
      imgArr:[]
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
      this.$nextTick(function(){
        var proSwiper = new Swiper('.swiper-container', {
          autoplay: true,
          slidesPerView : 1,
          disableOnInteraction : false
         
        });
      })
  },
  deactivated: function () {
      this.imgArr=[]
  },

  mounted(){
    this.value=this.item&&this.item.num?this.item.num:1
    this.pound_index = this.item?this.item.list[0].id:''
    this.$nextTick(function(){
        var proSwiper = new Swiper('.swiper-container', {
          autoplay: true,
          slidesPerView : 1,
          disableOnInteraction : false
        });
      })
  },
  watch:{
    item:function(){
      console.log(this.item)
      this.value=this.item&&this.item.num?this.item.num:1
      this.pound_index = this.item.id
      this.$nextTick(function(){
        var proSwiper = new Swiper('.swiper-container', {
          autoplay: true,
          slidesPerView : 1,
          disableOnInteraction : false
        });
      })
    },

  },
  props:['item','showCart'],
  methods:{
    viewImage(index,imgs,url){
      this.imgArr=[]
      for(let i=0;i<imgs.length;i++){
        this.imgArr.push(url+imgs[i].m)
      }
      ImagePreview(this.imgArr, index);
    },
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
    },
    addcart(type){
      if(type=='edit'){
          let self = this;
          self.Loading.open()
          self.$http.post('/api/b34ce2c4f51281f9',{
           
              id:self.item.id,
              num:self.value,
              sid:self.pound_index
            
          }).then(function(res){  //接口返回数据
            self.Loading.close()
            console.log(res);
            let num=0
              for(let item in res.data){
                num+=(res.data[item].num-0)
              }
              console.log(num)
            if(res.code==1){
                self.Toast({
                  message: '修改成功',
                  duration: 500
                })
                self.$emit('changenum',res.data,num)
            }else{
               self.Toast(res.msg)
            }
            
          },function(error){  //失败
            console.log(error);
          });
      }else{
        let self = this;
        self.Loading.open()
        self.$http.post('/api/0a726336d3a19773',{
         
            id:self.pound_index,
            num:self.value,
            cartName:type
          
        }).then(function(res){  //接口返回数据
          self.Loading.close()
          console.log(res);
          if(res.code==1){
            let num=0
              for(let item in res.data){
                num+=(res.data[item].num-0)
              }
              console.log(num)
            if(type=='shop'){
              self.Toast({
                message: '成功加入购物车',
                duration: 500
              })
              // self.Toast('成功加入购物车')
              
              self.$emit('closeDialog',num)
              // self.$emit('changenum',num)
            }else{
              self.$router.push('/nowbuy')
              self.$emit('closeDialog',num)
            }
          }else{
            // self.Toast(res.msg)
          }
          
        },function(error){  //失败
          console.log(error);
        });
      }

    }
  }
}
</script>

<style scoped>
  .dialog-close{
    right: .4rem;
    top: .2rem;
  }
  .swiper-slide{
    float: none;
  }
  .swiper-slide img{
    display: block;
  }
  .cart-dialog .cart-content .cart-pro .pro-img{
    width: 2.62rem;
  }
  .cart_guige{
    position: absolute;
    flex: 2;
    right: 1.1rem;
    text-align: right;
    z-index: 1
  }
  .cart-dialog .cart-content .items select{
    position: relative;
    z-index: 2;
    opacity: 0;
  }
  .btns2 ul {
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }
</style>
