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

        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>现金卡</h2>
          <span>暂无使用</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
           <div class="card">
             <div class="card-item cash">
                <div class="card-left">
                  <div class="card-con-top">某类型现金卡</div>
                  <div class="card-con-bottom">
                    <h3>使用条件：</h3>
                    <p>限用于中秋专享活动 <br>
                    不可与优惠券一同使用</p>
                  </div>
                </div>
                <div class="card-right">
                  <div class="card-con-top">使用日期：<br> <span>2017.8.28之前</span></div>
                  <div class="card-con-bottom">
                    <h3>额度：</h3>
                    <span>299</span>
                  </div>
                </div>
             </div>
           </div>
            <div class="quan-add">
              <input type="number" placeholder="现金卡兑换码"> <span class="add">添加</span>
            </div>
          </dd>
        </dl>
        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>优惠券</h2>
          <span>暂无使用</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="card">
              <div class="card-item quan">
                <div class="card-left">10</div>
                <div class="card-content">
                  <div class="card-con-top">满100可使用</div>
                  <div class="card-con-bottom">
                    <h3>coupons</h3>
                    <span>仅使用新品蛋糕</span>
                  </div>
                </div>
                <div class="card-right">
                  <div class="card-con-top">距离到期</div>
                  <div class="card-con-bottom">
                    <span>22天</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="quan-add">
              <input type="number" placeholder="优惠券兑换码"> <span class="add">添加</span>
            </div>
          </dd>
        </dl>
        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>红包</h2>
          <span>暂无使用</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="card">
              <div class="card-item">20</div>
              <div class="card-item">20</div>
            </div>
          </dd>
        </dl>

        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>使用余额</h2>
          <span>暂无使用</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="quan-add">
              <input type="number" placeholder="输入您要使用的余额"> <span class="add">添加</span>
            </div>
            <p class="text">账户可用余额0元（余额使用最小单位为1元）</p>
          </dd>
        </dl>
        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>使用积分</h2>
          <span>暂无使用</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="quan-add">
              <input type="number" placeholder="输入您要使用的积分"> <span class="add">添加</span>
            </div>
            <p class="text">账户可用积分239分（每100积分可抵用1元人民币）</p>
          </dd>
        </dl>
        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>发票</h2>
          <span>不开发票</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="piao-line">
              <select  id="fapiao">
                <option  value = "发票内容" selected >发票内容</option >
                <option  value = "发票内容" >发票内容</option >
                <option  value = "发票内容" >发票内容</option >
                <option  value = "发票内容" >发票内容</option >
              </select >
              <i class="icon iconsfont icons-arrowdown down"></i>
            </div>
            <div class="piao-line">
              <select  id="fapiao">
                <option  value = "发票类型" selected >发票类型</option >
                <option  value = "发票类型" >发票类型</option >
                <option  value = "发票类型" >发票类型</option >
                <option  value = "发票类型" >发票类型</option >
              </select >
              <i class="icon iconsfont icons-arrowdown down"></i>
            </div>
            <div class="fapiao-bt">
              <div class="text">
                <b>开票金额</b> <span><i>￥</i>289.00</span>
              </div>
              <p>温馨提示: 您填写的所有内容都会被系统自动打印到发票上，请勿填写和发票
                抬头无关的信息。</p>
            </div>
            <div class="btns">
              <ul >
                <li class="cancel"><span>取消</span></li>
                <li><span>确认</span></li>
              </ul>
            </div>
          </dd>
        </dl>
        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>订单备注</h2>
          <span>暂无备注</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="piao-line">
              <textarea rows="3" cols="20" class="piao-text" placeholder="请填写您要备注的内容"></textarea>
            </div>


            <div class="btns">
              <ul >
                <li class="cancel"><span>取消</span></li>
                <li><span>确认</span></li>
              </ul>
            </div>
          </dd>
        </dl>
        <dl class="ka-quan">
          <dt @click="showPj">
          <h2> <i class="icon iconsfont icons-shouye1 pj-icon"></i>支付方式</h2>
          <span>未选择支付方式</span>
          <i class="icon iconsfont icons-yuanshang acrows"></i>
          </dt>
          <dd>
            <div class="payfor clearfix">
              <ul>
                <li>
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>货到付款</b> <br><span>现金支付</span></p>
                </li>
                <li>
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>货到付款</b> <br><span>刷POS</span></p>
                </li>
                <li>
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>货到付款</b> <br><span>刷信用卡</span></p>
                </li>
                <li class="on">
                  <i class="icon iconsfont icons-money2"></i>
                  <p><b>在线支付</b></p>
                </li>
              </ul>
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
            <b>开票金额</b> <span><i>￥</i>289.00</span>
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

    <div class="bottom-count fixed">

      <div class="btns">
        <div class="total-count">
          <span>运费：0.00</span>
          <span class="count-price textRight">
            <b>合计：</b><i>￥</i>289.00 <br> <i>(含运费)</i></span>
        </div>
        <ul>
          <li class="kankan"><span>再逛逛</span></li>
          <li class="btn-count"><span>结算</span></li>
        </ul>
      </div>
    </div>

    <div class="cartBottom"></div>
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
      isEditFapiao:false,
      isEdit:true
    }
  },
  mounted(){
      this.init();
      $(".payfor li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
      });

      $(".ka-quan").each(function () {
          var self = $(this);
          var kq = true;
        $(this).find("dt").click(function () {
            if(kq){
              self.find("dd").slideDown();
              kq = false;
            }else{
              self.find("dd").slideUp();
              kq = true;
            }
        });
      });
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
