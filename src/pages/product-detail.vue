<template>
  <div class="pro-detail" v-if='detailData'>
     <div class="pro-top">
       <div class="swiper-container pro-swiper">
         <div class="swiper-wrapper" >
           <div class="swiper-slide" v-for='item in detailData.pic.list'  v-if='detailData.pic'>
             <div class="pro-img">
               <img :src="detailData.pic.url+item.m">
             </div>
           </div>
         </div>
         <div class="swiper-pagination"></div>
       </div>
     </div>
     <div class="pro-main">
       <div class="pro-tab">
         <div class="pro-tab-top all-pounds">
           <ul>
             <li :class="{on:tab==index+1}" @click='tab=index+1' v-for='(item,index) in detailData.list'><h2>{{item.spec}}</h2><p>{{item.edible}}</p></li>
           </ul>
         </div>
         <div class="pro-tab-box pro-desc">
           <div class="items desc-content clearfix" v-show='tab==index+1'  v-for='(item,index) in detailData.list'>
             <div class="cake_des">
               <p>{{item.ahead}} <br>
                 {{item.edible}} <br>
                 {{item.size}}</p>
             </div>
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
           <b>合计：</b> <span><i>￥</i>{{total | toDecimal2}} </span>
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
                <div class="info-left" v-for='item in detailData.basic.list'>
                 <b>{{item.french}} {{item.name}}</b>
                 <span v-if='item.gid!=3'>{{item.value}}</span>
                 <span v-else><i class="icon iconsfont icons-search tiandu" v-for='icon in item.value'></i></span>
               </div>
              <!--  <div class="info-left">
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
               </div> -->
             </div>
             <div class="country">
               <span v-for='item in detailData.mater.list'>
                <!-- <img :src="detailData.mater.url+item.img"> -->
                <b><img :src="detailData.mater.url+item.img"></b>
              <i>{{item.name}}</i></span>
            
             </div>
           </div>
           <div class=" info" v-show='pdetail==2'>
             <div class="info-content">
               <ul>
                 <li v-for='item in commentList'><p>{{item.content}}</p>
                   <div class="member">
                     <i>v{{item.rid}}</i>会员：{{item.uname}} <br>
                     {{item.ctime}}
                   </div>
                 </li>
               </ul>
             </div>
             <div class="paging">
               <van-pagination 
                  v-model="currentPage" 
                  :total-items="totalItem" 
                  :items-per-page="size"
                  @change='getComment'
                />
             </div>
           </div>
           <div class=" info" v-show='pdetail==3'>
             <img :src="detailData.details" v-if='detailData.details'>
           </div>
         </div>
       </div>

     </div>

      <div class="btns fixed">
        <ul>
          <li class="kankan" @click='addcart("shop")'><span>加入购物车</span></li>
          <li @click='addcart("nowbuy")'><span>立即购买</span></li>
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
      currentPage:1,
      detailData:'',
      twoId:'',
      totalItem:0,
      size:6,
      commentList:''
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
    this.detailData=''
    this.totalItem=0;
    this.size=6;
    this.commentList='';
    this.tab=1;
    this.pdetail=1;
    this.currentPage=1;
    this.value=1;
    this.getGoodsDetail()

  },
  watch:{
    
  },
  computed:{
    total:function(){
      return this.detailData.list[this.tab-1].price*this.value
    },
  },
  mounted(){
   
  },
  methods:{
    getGoodsDetail(){
      let self = this;
      self.Loading.open()
      self.detailData=''
      self.$http.get('/api/cc69f751ce690b6f',{
        params:{
          id:this.$route.params.detailid,
          client:2
        }
      }).then(function(res){  //接口返回数据
        // self.Loading.close()
        
        console.log(res);
        if(res.code==1){
          self.detailData=res.data
          self.twoId = self.detailData.twoId
          self.getComment()
          self.$nextTick(function(){
            var proSwiper = new Swiper('.pro-swiper', {
              autoplay: true,
              slidesPerView : 1,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              }
            });
          })
        }
        

      },function(error){  //失败
        console.log(error);
      });
    },
    getComment(){
      let self = this;
      self.Loading.open()
      self.$http.get('/api/88e654530e1851cf',{
        params:{
          twoId:self.twoId,
          page:self.currentPage,
          size:self.size
        }
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        
        console.log(res);
        if(res.code==1){
          self.totalItem=res.data.count-0;
          self.commentList = res.data.list
        }
        

      },function(error){  //失败
        console.log(error);
      });
    },
    addcart(type){
      let self = this;
      self.Loading.open()
      self.$http.post('/api/0a726336d3a19773',{
       
          id:self.detailData.list[self.tab-1].id,
          num:self.value,
          cartName:type
        
      }).then(function(res){  //接口返回数据
        self.Loading.close()
        console.log(res);
        if(res.code==1){
          if(type=='shop'){
            // self.Toast('成功加入购物车')
            self.MessageBox({
              title: '提示',
              message: '成功加入购物车',
              showCancelButton: true,
              cancelButtonText:'继续逛逛',
              confirmButtonText:'去结算'
            }).then(action => {
              if(action=='confirm'){
                self.$router.push('/cart')
              }     
            });
          }else{
            self.$router.push('/nowbuy')
          }
        }else{
          self.Toast(res.msg)
        }
        
      },function(error){  //失败
        console.log(error);
      });
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
  .tiandu{
    font-size: .5rem;
  }
  .pro-detail .pro-main .pro-tab .info .country b img{
    display: block;
  }
  .pro-detail .pro-main .pro-tab .info .info-content ul li p{
    line-height: 150%;
    padding-right: 1rem;
  }
  .pro-detail .pro-main .pro-tab .info .info-content ul li .member{
    width: 3rem;
    padding-right: 0;
  }
  .pro-detail .pro-main .pro-tab .info .info-content ul li .member i{
    top: 0rem;
    left: -.6rem;
  }
</style>
