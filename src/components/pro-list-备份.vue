<template>
  <div class="pro-list">
    <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
      <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <ul class="list">

          <li v-for="(item, index) in proCopyright">
            <div>{{item.FZD_ZPMC}}</div>
          </li>

        </ul>

      </v-loadmore>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import footer from '../components/footer'
import {Loadmore} from 'mint-ui'
export default {
  name: 'list',
  components: {
    myFooter: footer,
    'v-loadmore':Loadmore
  },
  mounted(){
    this.loadPageList();  //初次访问查询列表
  },
  methods:{
    loadBottom:function() {
      // 上拉加载
      this.more();// 上拉触发的分页查询
      this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
    },
    loadPageList:function (){
      // 查询数据

      this.axios.get(this.ebsig+'goods.allgoods'+"&mask=001"+"&page="+this.pageNo+"&size="+this.pageSize).then(res =>{
        console.log(res);
        this.proCopyright = res.data.result.PRODUCTCOPYRIGHT;
        this.totalpage = Math.ceil(res.data.result.COUNTOFPRODUCTCOPYRIGHT/this.pageSize);
        if(this.totalpage == 1){
          this.allLoaded = true;
        }
        this.$nextTick(function () {
          // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
          this.scrollMode = "touch";
          this.isHaveMore();
        });
      });
    },
    more:function (){
      // 分页查询
      if(this.totalpage == 1){
        this.pageNo = 1;
        this.allLoaded = true;
      }else{
        this.pageNo = parseInt(this.pageNo) + 1;
        this.allLoaded = false;
      }

      console.log(this.pageNo);
      this.axios.get(this.ebsig+'goods.allgoods'+"&mask=001"+"&page="+this.pageNo+"&size="+this.pageSize).then(res=>{
        this.proCopyright = this.proCopyright.concat(res.data.result.PRODUCTCOPYRIGHT);
        console.log(this.proCopyright);
        this.isHaveMore();
      });
    },
    isHaveMore:function(){
      // 是否还有下一页，如果没有就禁止上拉刷新
      //this.allLoaded = false; //true是禁止上拉加载
      if(this.pageNo == this.totalpage){
        this.allLoaded = true;
      }
    }
  },
  data () {
    return {
      pageNo:1,
      pageSize:50,
      proCopyright:[],
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      totalpage:0,
      loading:false,
      bottomText: '加载更多内容。。。',
      ebsig:'http://ebsig.api.mcake.com/service/gateway.php?method=',
      prolist:[
        {
          "tagId": 0,
          "postId": "11676",
          "useFlg": 1,
          "imgSrc": "http://mcake.oss-cn-hangzhou.aliyuncs.com/goods/liulianxueta/C0801/list/1.jpg",
          "chineseName": "榴莲雪塔",
          "frenchName": "Tarte au durian",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 4,
          "postId": "10856",
          "useFlg": 1,
          "imgSrc": "http://mcake.oss-cn-hangzhou.aliyuncs.com/goods/yuesefenmeigui/T0399/list/1.jpg",
          "chineseName": "约瑟芬玫瑰",
          "frenchName": "Joséphine",
          "tagImgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/promotionTag/2015082711403950673.png",
          "salePrice": "398.00"
        },
        {
          "tagId": 0,
          "postId": "11255",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20170615/1959/list_1959_1.jpg",
          "chineseName": "鲜莓印雪",
          "frenchName": "Fraise-Chantilly",
          "tagImgSrc": "",
          "salePrice": "298.00"
        },
        {
          "tagId": 0,
          "postId": "11503",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20151027/2132/list_2132_1.jpg",
          "chineseName": "朗姆醇栗",
          "frenchName": "Mont Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11467",
          "useFlg": 1,
          "imgSrc": "http://mcake.oss-cn-hangzhou.aliyuncs.com/goods/heisenlinnapolun/N0605/list/1.jpg",
          "chineseName": "黑森林拿破仑",
          "frenchName": "La Forêt noir",
          "tagImgSrc": "",
          "salePrice": "298.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        },
        {
          "tagId": 0,
          "postId": "11406",
          "useFlg": 1,
          "imgSrc": "http://ebsig.mcake.com/postsystem/docroot/images/goods/20171016/2064/list_2064_1.jpg",
          "chineseName": "简",
          "frenchName": "Carré Blanc",
          "tagImgSrc": "",
          "salePrice": "318.00"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    padding:30px 0;
    background-color: #ccc;
    margin-bottom:20px;
  }
</style>
