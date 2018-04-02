<template>
  <div class="pro-detail">
     <div class="pro-top">
       <div class="swiper-container pro-swiper">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <div class="pro-img" style=" background: url('./static/images/pro-1.jpg') center; background-size: 100%;"></div>
           </div>
           <div class="swiper-slide">
             <div class="pro-img" style=" background: url('./static/images/img-1.jpg') center; background-size: 100%;"></div>
           </div>
           <div class="swiper-slide">
             <div class="pro-img" style=" background: url('./static/images/pro-1.jpg') center; background-size: 100%;"></div>
           </div>
           <div class="swiper-slide">
             <div class="pro-img" style=" background: url('./static/images/pro-1.jpg') center; background-size: 100%;"></div>
           </div>
         </div>
         <div class="swiper-pagination"></div>
       </div>
     </div>
     <div class="pro-main">
       <div class="pro-tab">
         <div class="pro-tab-top all-pounds">
           <ul>
             <li :class="{on:tab==1}" @click='tab=1'><h2>1磅</h2><p>适合2-3人食用</p></li>
             <li :class="{on:tab==2}" @click='tab=2'><h2>2磅</h2><p>适合4-7人食用</p></li>
             <li :class="{on:tab==3}" @click='tab=3'><h2>3磅</h2><p>适合8-12人食用</p></li>
             <li :class="{on:tab==4}" @click='tab=4'><h2>5磅</h2><p>适合12-20人食用</p></li>
           </ul>
         </div>
         <div class="pro-tab-box pro-desc">
           <div class="items first desc-content clearfix" v-show='tab==1'>
             <div class="cake_des">
               <p>需提前5小时预定 <br>
                 适合2-3人食用 <br>
                 SIZE：23cm x 14cm x 5cm</p>
             </div>
             
           </div>
           <div class="items desc-content clearfix" v-show='tab==2'>
             <div class="cake_des">
               <p>需提前5小时预定 <br>
                 适合4-7人食用 <br>
                 SIZE：19cm x 7.0cm x 5cm</p>
             </div>
             <!-- <div class="cake_num">
               <div class="nums">
                 <i class="icon iconsfont icons-minus"></i>
                 <span>1</span>
                 <i class="icon iconsfont icons-add"></i>
               </div>
             </div> -->
           </div>
           <div class="items desc-content clearfix" v-show='tab==3'>
             <div class="cake_des">
               <p>需提前5小时预定 <br>
                 适合8-12人食用 <br>
                 SIZE：24cm x 7.0cm x 5cm</p>
             </div>
             <!-- <div class="cake_num">
               <div class="nums">
                 <i class="icon iconsfont icons-minus"></i>
                 <span>1</span>
                 <i class="icon iconsfont icons-add"></i>
               </div>
             </div> -->
           </div>
           <div class="items desc-content clearfix" v-show='tab==4'>
             <div class="cake_des">
               <p>需提前5小时预定 <br>
                 适合12-20人食用 <br>
                 SIZE：29cm x 7.0cm x 5cm</p>
             </div>
             <!-- <div class="cake_num">
               <div class="nums">
                 <i class="icon iconsfont icons-minus"></i>
                 <span>1</span>
                 <i class="icon iconsfont icons-add"></i>
               </div>
             </div> -->
           </div>
          <div class="cake_num">
           <div class="nums">
             <van-stepper
                v-model="value"
                :min="1"
                :max="40"
                :step="1"
                :default-value="1"
              />
           </div>
         </div>
         </div>

         <div class="cake_price clearfix">
           <b>合计：</b> <span><i>￥</i>{{price*value | toDecimal2}} </span>
         </div>
       </div>
       <div class="pro-tab">
         <div class="pro-tab-top all-groups">
           <ul>
             <li :class="{on:pdetail==1}" @click='pdetail=1'><h3>基本信息</h3></li>
             <li :class="{on:pdetail==2}" @click='pdetail=2'><h3>商品点评</h3></li>
             <li :class="{on:pdetail==3}" @click='pdetail=3'><h3>商品详情</h3></li>
           </ul>
         </div>
         <div class="pro-tab-box pro-info">
           <div class=" info" v-show='pdetail==1'>
             <div class="info-box">
               <div class="info-left">
                 <b>Texture 口感 <br> Flavor 口味</b>   <span>入口即化 <br> 巧克力</span>
               </div>
               <div class="info-right">
                 <b>Base 口味基底 <br> Sweetness 甜味 </b>
                 <span>Whipping Cream<br>
                   <i class="icon iconsfont icons-search"></i>
                   <i class="icon iconsfont icons-search"></i>
                   <i class="icon iconsfont icons-search"></i>
                   <i class="icon iconsfont icons-search"></i>
                   <i class="icon iconsfont icons-search"></i>
                   <i class="icon iconsfont icons-search"></i>
                 </span>
               </div>
             </div>
             <div class="country">
               <span><b style=" background: url('./static/images/country1.jpg') center; background-size: 100%;"></b>法国淡奶油</span>
               <span><b style=" background: url('./static/images/country3.jpg') center; background-size: 100%;"></b>比利时巧克力</span>
               <span><b style=" background: url('./static/images/country2.jpg') center; background-size: 100%;"></b>英国黑朗姆酒</span>
               <span><b style=" background: url('./static/images/country1.jpg') center; background-size: 100%;"></b>法国君度力娇酒</span>
               <span><b style=" background: url('./static/images/country2.jpg') center; background-size: 100%;"></b>臻选白砂糖</span>
               <span><b style=" background: url('./static/images/country3.jpg') center; background-size: 100%;"></b>臻选草莓</span>
               <span><b style=" background: url('./static/images/country1.jpg') center; background-size: 100%;"></b>世界臻选蓝莓果</span>
             </div>
           </div>
           <div class=" info" v-show='pdetail==2'>
             <div class="info-content">
               <ul>
                 <li><p>口感很甜，蛋糕很漂亮。</p>
                   <div class="member">
                     <i>v2</i>会员：1312532523 <br>
                     2017-11-01 19:02:24
                   </div>
                 </li>
                 <li><p>口感很甜，蛋糕很漂亮。</p>
                   <div class="member">
                     <i>v2</i>会员：1312532523 <br>
                     2017-11-01 19:02:24
                   </div>
                 </li>
               </ul>
             </div>
             <div class="paging">
               <!-- <ul>
                 <li>1</li>
                 <li class="thisclass"><a href="#">2</a></li>
                 <li><a href="#">3</a></li>
                 <li><a href="#">4</a></li>
               </ul> -->
               <van-pagination 
                  v-model="currentPage" 
                  :total-items="24" 
                  :items-per-page="2"
                />
             </div>
           </div>
           <div class=" info" v-show='pdetail==3'>
             <p>商品详情</p>
             <p>商品详情</p>
             <p>商品详情</p>
             <p>商品详情</p>
             <p>商品详情</p>
           </div>
         </div>
       </div>

     </div>

      <div class="btns fixed">
        <ul>
          <li class="kankan" @click='addcart'><span>加入购物车</span></li>
          <li @click='nowbuy'><span>立即购买</span></li>
        </ul>
      </div>
    <div class="marginBottom"></div>
  </div>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js'
import footer from '../components/footer'
export default {
  name: 'detail',
  components: {
    myFooter: footer
  },
  data () {
    return {
      tab:1,
      pdetail:1,
      msg: '产品详情页面',
      value:1,
      price:'298.00',
      currentPage:1
    }
  },
  created: function () {  /*通常初始化某些属性值*/
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
  mounted(){
    //this.tab();
    setTimeout(function () { /*通常是初始化页面完成后，再对html的dom节点进行一些需要的操作*/
      var proSwiper = new Swiper('.pro-swiper', {
        autoplay: true,
        slidesPerView : 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    },0);
  },
  methods:{
    addcart(){
      this.Toast('成功加入购物车')
    },
    nowbuy(){
      this.$router.push('/nowbuy')
    },
    tabs:function () {

      $(".pro-tab").each(function () {
        var self = $(this);
        $(this).find(".pro-tab-top li").click(function () {
          var idx = $(this).index();
          $(this).addClass("on").siblings().removeClass("on");
          self.find(".pro-tab-box .items").eq(idx).fadeIn(0).siblings(".items").fadeOut(10);
        });
      });


      /* $(".quan-item .quan-head li").click(function () {
       var idx = $(this).index();
       console.log(idx);
       });*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/swiper.min.css';
  @import '../style/css/products.css';
  .pro-detail .pro-main .pro-tab .pro-desc{
    display: flex;
  }
  .pro-detail .pro-main .pro-tab .pro-desc .desc-content{
    flex: 10;
  }
  .pro-detail .cake_num{
    flex: 5;
  }
  .pro-detail .cake_num .nums{
    margin-top: .5rem;
  }
</style>
