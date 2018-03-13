<template>
  <div class="pro-list">
    <div class="products"  :class="{'blur':isblur}">
      <ul class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="2">
        <li class="pro-li" v-for="item in prolist">
          <div class="pro-liimg">
            <div class="liImg"><img :src="item.goodsImageUrl"></div>
            <div class="cart-icon" @click="cartDialog"></div>
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
              <div class="btn-gobuy"><span @click="cartDialog">立即订购</span></div>
            </div>
          </div>
        </li>

      </ul>
      <ul>
        <p>加载更多。。。</p>
      </ul>

    </div>

    <my-footer></my-footer>

    <my-dialog :is-show="isShowDialog" @on-close="closeDialog">

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
                 <i class="icon iconsfont icons-minus"></i>
                 <span>1</span>
                 <i class="icon iconsfont icons-add"></i>
               </div>
             </div>
           </div>
          <div class="btns2">
            <ul>
              <li class="cancel btn-cancel"><span>取消</span></li>
              <li class="btn-ok"><span>确认</span></li>
            </ul>
          </div>
         </div>
      </div>


    </my-dialog>
  </div>
</template>

<script>
import footer from '../components/footer'
import dialog from '../components/dialog'
import '../style/css/cart.css'
export default {
  name: 'list',
  components: {
    myFooter: footer,
    myDialog: dialog
  },
  data () {
    return {
      loading:false,
      isblur:false,
      showChildMsg:'ddddd',
      isShowDialog:false,
      prolist:[]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.prolist[this.prolist.length - 1];
        for (let i = 1; i <= 2; i++) {
          this.prolist.push(last + i);
        }
        this.loading = false;
      }, 500);

    },
    cartDialog(){
      this.isblur = this.isShowDialog = true;
    },
    closeDialog(){
      this.isblur = this.isShowDialog = false;
    },
    init:function () {
      this.$http({
        method:'GET',
        url:this.API.goods
      }).then(function(response){  //接口返回数据
        this.data=response.data;
        this.prolist=this.data.data.goodsList;
      },function(error){  //失败
        console.log(error);
      });


    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
