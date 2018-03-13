<template>
  <div class="container-wrap">
      <div class="nowbuy" v-if="!isEditFapiao">
        <div class="order">
          <ul class="orderList">
            <li class="flex-w">
              <div class="pro-box flex-h">
                <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                <div class="content">
                  <dl>
                    <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑111</h2></dt>
                    <dd><em>数量：</em> <span>1个</span></dd>
                    <dd><em>小计：</em> <span>￥298</span></dd>
                    <dd><em>食用：</em> <span>适合2-3人食用</span></dd>
                    <dd><em>标配：</em> <span>2份标配餐具</span></dd>
                    <dd class="line"></dd>
                    <dd><em>付费餐具：</em> <i>1个</i> <span>5.00元</span></dd>
                    <dd><em>付费蜡烛：</em> <i>2个</i> <span>5.00元</span></dd>
                    <dd><em>数字蜡烛：</em> <i>1个</i> <span>5.00元</span></dd>
                    <dd><em>付费生日牌：</em> <i>1个</i> <span>5.00元</span></dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
          <dl class="peijian">
            <dt @click="showPj">
              <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>配件选择</h2>
              <span>已选择：餐具1份，巧克力牌1个等水电水电水电水电水电让人</span>
              <i class="icon iconsfont icons-yuanshang acrows"></i>
            </dt>
            <dd v-if="isShowPj">
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span><p>赠送巧克力牌</p></div>
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span><p>赠送生日蜡烛</p></div>
            </dd>
            <dd  v-if="isShowPj" class="birthday-card"><i class="icon iconsfont icons-gaixie"></i><input type="text" placeholder="点击填写巧克力牌文字"><span>（happy birthday）</span></dd>
            <dt v-if="isShowPj">
            <h2><i class="icon iconsfont icons-shouye1 pj-icon"></i>加购配件</h2><span></span>
            </dt>
            <dd v-if="isShowPj">
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span>
                <p class="ewai">额外餐具
                  <i>￥5.00/包(5个餐盘 5个餐勺)</i>
                </p></div>
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span>
                <p class="ewai">
                额外生日蜡烛
                <i>￥2.00/套</i>
                </p>
              </div>
            </dd>
          </dl>
          <ul class="orderList">
            <li class="flex-w">
              <div class="pro-box flex-h">
                <div class="pro-img"><img src="../style/images/car-img.jpg" alt="" ></div>
                <div class="content">
                  <dl>
                    <dt><h2>Napoléon vanille</h2><br><h2>经典香草拿破仑111</h2></dt>
                    <dd><em>数量：</em> <span>1个</span></dd>
                    <dd><em>小计：</em> <span>￥298</span></dd>
                    <dd><em>食用：</em> <span>适合2-3人食用</span></dd>
                    <dd><em>标配：</em> <span>2份标配餐具</span></dd>
                    <dd class="line"></dd>
                    <dd><em>付费餐具：</em> <i>1个</i> <span>5.00元</span></dd>
                    <dd><em>付费蜡烛：</em> <i>2个</i> <span>5.00元</span></dd>
                    <dd><em>数字蜡烛：</em> <i>1个</i> <span>5.00元</span></dd>
                    <dd><em>付费生日牌：</em> <i>1个</i> <span>5.00元</span></dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
          <dl class="peijian">
            <dt @click="showPj">
            <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>配件选择</h2>
            <span>已选择：餐具1份，巧克力牌1个等水电水电水电水电水电让人</span>
            <i class="icon iconsfont icons-yuanshang acrows"></i>
            </dt>
            <dd v-if="isShowPj">
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span><p>赠送巧克力牌</p></div>
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span><p>赠送生日蜡烛</p></div>
            </dd>
            <dd  v-if="isShowPj" class="birthday-card"><i class="icon iconsfont icons-gaixie"></i><input type="text" placeholder="点击填写巧克力牌文字"><span>（happy birthday）</span></dd>
            <dt v-if="isShowPj">
            <h2><i class="icon iconsfont icons-shouye1 pj-icon"></i>加购配件</h2><span></span>
            </dt>
            <dd v-if="isShowPj">
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span>
                <p class="ewai">额外餐具
                  <i>￥5.00/包(5个餐盘 5个餐勺)</i>
                </p></div>
              <div class="in-line"><span><i class="icon iconsfont icons-dui"></i></span>
                <p class="ewai">
                  额外生日蜡烛
                  <i>￥2.00/套</i>
                </p>
              </div>
            </dd>
          </dl>
        </div>
        <div class="order-line pjSelect">
          <div class="content">
            <div class="pj">
              <img src="../style/images/srp.png" alt="" >
              <p>选择巧克力牌</p>
            </div>
            <div class="pj">
              <img src="../style/images/srp.png" alt="" >
              <p>选择数字生日蜡烛</p>
            </div>
          </div>
        </div>
        <div class="order-line userInfo">
          <div class="content">
            <dl>
              <dd><em>联系人：</em> <span class="textLeft">丁志文</span></dd>
              <dd><em>联系方式：</em> <span class="textLeft">13162550295</span></dd>
              <dd class="longRight"><em>配送地址：</em> <span class="textLeft">上海市普陀区真光路中山北路3700弄2号楼503室</span></dd>
              <i class="icon iconsfont icons-gaixie i-edit"></i>
            </dl>
          </div>
        </div>
        <div class="subtitle"><h2><i class="icon iconsfont icons-clock"></i>配送时间</h2></div>
        <div class="order-line peisong">
          <div class="in-line">
            <i class="icon iconsfont icons-metext"></i>
            <select  id =  "sel">
               <option  value = "请选择配送日期" selected >请选择配送日期</option >
               <option  value = "1" >1</option >
               <option  value = "2" >2</option >
               <option  value = "3" >3</option >
            </select >
            <i class="icon iconsfont icons-arrowdown down"></i>
          </div>
          <div class="in-line">
            <i class="icon iconsfont clock icons-clock"></i>
            <select  id =  "sel">
              <option  value = "下午 19时45分" selected >下午 19时45分</option >
              <option  value = "1" >1</option >
              <option  value = "2" >2</option >
              <option  value = "3" >3</option >
            </select >
            <i class="icon iconsfont icons-arrowdown down"></i>
          </div>
          <div class="tips">
            <p>友情提示：<br>
            配送时间：10:00-22:00，订单一经下定，配送当天不可修改
            当天21:30至次日9:00订单，最早配送时间为次日14:00
            我们将优先根据您选择的时间配送，实际配送时间会有前后30分钟误差</p>
          </div>
        </div>

        <dl class="xianjin">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>现金卡</h2>
          <span>暂无使用</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
           <div class="card">
             <div class="card-item"><img src="../style/images/card.png" alt=""></div>
             <div class="card-item"><img src="../style/images/card.png" alt=""></div>
           </div>

            <div class="exchange">
              <input type="text" placeholder="现金兑换码"> <button>添加</button>
            </div>
          </dd>
        </dl>
      </div>

    <div class="edit-fapiao" v-show="isEditFapiao">
      <div class="content">
        <div class="textbox">
          <textarea rows="3" cols="20" class="piao-text" v-show="isEdit"></textarea>
            <div class="edit" v-show="isEdit">
              <i class="icon iconsfont icons-gaixie"></i>
            </div>
        </div>

        <div class="list_box">
          <ul>
            <li><i class="icon iconsfont icons-arrowdown"></i>
              <select>
                <option value="0">发票内容</option>
                <option value="1">发票内容</option>
              </select>
            </li>
            <li><i class="icon iconsfont icons-arrowdown"></i>
              <select>
                <option value="0">发票类型</option>
                <option value="1">发票类型</option>
              </select>
            </li>
          </ul>
        </div>

        <div class="fapiao-bt">
          <div class="text">
            <b>开票金额</b> <span>￥289.00</span>
          </div>
          <p>温馨提示: 您填写的所有内容都会被系统自动打印到发票上，请勿填写和发票
            抬头无关的信息。</p>
        </div>

        <div class="btns fixed2">
          <ul >
            <li class="cancel"><span>取消</span></li>
            <li><span>确认</span></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="marginBottom"></div>
  </div>
</template>

<script>

export default {
  name: 'orders',
  props: [],
  components: {

  },
  data () {
    return {
      msg: '结算页',
      isShowPj:false,
      isEditFapiao:true,
      isEdit:true
    }
  },
  mounted(){
      this.init();
  },
  methods:{
      init:function () {
       // $(".peijian dd").hide();
      },
    showPj:function () {
       this.isShowPj = !this.isShowPj;
    }

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/nowbuy.css';
</style>
