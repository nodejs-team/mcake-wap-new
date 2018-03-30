<template>
    <div class="ping-box">
          <div class="ping-top flex-h">
            <div class="pro-img">
              <img src="../style/images/car-img.jpg" alt="" >
              <p>Napoléon vanille <br> 经典香草拿破仑</p>
              <div class="bangshu">2磅</div>
            </div>
            <div class="content">
                <div class="textbox">
                  <textarea rows="3" cols="20" class="ping-text" v-show="isEdit" v-focus='isEdit' placeholder="请输入评价内容"></textarea>
                </div>
                <p class="clearfix">
                  <span :class='{on:item.ischecked}' v-for='item in pjList' @click='item.ischecked=!item.ischecked'>{{item.content}}</span>
                </p>
                <div class="edit" v-show="!isEdit">
                  <i class="icon iconsfont icons-gaixie" @click="edit"></i>
                </div>
            </div>
          </div>
    </div>
</template>
<script>
  import dialogTips from '../components/dialog-tips'
export default {
  name: 'orders',
  props: [],
  components: {
    myDialog: dialogTips
  },
  data () {
    return {
      msg: '我的订单',
      isPing:false,
      isEdit:false,
      isShowDialog:false,
      orderStatus:1,
      pjList:[
      	{
      		id:1,
      		content:'好吃',
      		ischecked:false
      	},
      	{
      		id:2,
      		content:'口感细腻',
      		ischecked:false
      	},
      	{
      		id:3,
      		content:'配送快',
      		ischecked:false
      	},
      	{
      		id:4,
      		content:'服务号',
      		ischecked:false
      	}
      ]
    }
  },
  mounted(){
    //this.tabSlide();
    //this.orderStatus=this.$route.query.orderStatus
  },
  watch:{
    
  },
  directives: {
    focus: {
      update: function (el, {value}) {

        if (value) {
        	$('textarea').focus()
        }
      }
    }
  },
  methods:{
    edit:function (event) {
      this.isEdit = true;
    },
    goComment:function () {
      this.isPing = true;
    },
    comment: function (event) {
     this.isShowDialog = true;
     var self = this;
     setTimeout(function () {
       self.isShowDialog = false;
     },2000);
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/orders.css';

  .pro-list .pro-box .edit i{
    background-color: transparent;
  }
  .pro-list .pro-btns ul li i{
    color: #888888;
    vertical-align: middle;
  }
  .pro-list .pro-btns ul li i+span,.pro-list .pro-btns2 dl dd i+span{
    display: inline-block;
    vertical-align: middle;
  }
  .orders .order-top{
    background-color: #ebebeb;
    padding: 0 0.2rem;
  }
  .orders .order-top li{
    position: relative;
    background-color: #ebebeb;
  }
  .orders .order-top li span{
    position: absolute;
    top: .16rem;
    right: .12rem;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-color: #ffcd20;
    border-radius: 50%;
    line-height: .42rem;
    text-align: center;
    font-size: .24rem;
    color: #000;
  }
  .orders .order-box{
    display: block;
  }
  .pinglun{
    padding-bottom: 1rem;
  }
  .pinglun ul li .ping-box .content .textbox{
    height: 3rem;
    margin-bottom: .1rem;
  }
  .pinglun ul li .ping-box .content p span{
  	border-radius: .05rem;
  	padding: .04rem .24rem;
  	display: inline-block;
  	margin-right: .1rem;
  	float: left;
  }
  .pinglun ul li .ping-box .pro-img img{
  	margin-bottom: .14rem;
  }
  .pinglun ul li .ping-box .content p span.on{
  	background-color: #ffcd20;
  	color:#fff;
  }
 
</style>