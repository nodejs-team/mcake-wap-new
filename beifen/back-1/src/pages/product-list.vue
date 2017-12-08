<template>
  <div class="pro-list">
    <div class="products">
      <ul class="clearfix">
        <li class="pro-li" v-for="item in prolist">
          <div class="pro-liimg">
            <div class="liImg"><img src="static/images/img-1.jpg"></div>
            <div class="cart-icon"></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">{{item.chineseName}}111</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">Napoléon aux myrtilles</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">298</span> <b>.00</b></span>
              <div class="btns"><span>立即订购</span></div>
            </div>
          </div>
        </li>
        <li class="pro-li">
          <div class="pro-liimg">
            <div class="liImg"><img src="static/images/img-1.jpg"></div>
            <div class="cart-icon"></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">蓝莓轻乳拿破仑</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">Napoléon aux myrtilles</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">298</span> <b>.00</b></span>
              <div class="btns"><span>立即订购</span></div>
            </div>
          </div>
        </li>
        <li class="pro-li">
          <div class="pro-liimg">
            <div class="liImg"><img src="static/images/img-1.jpg"></div>
            <div class="cart-icon"></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">蓝莓轻乳拿破仑</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">Napoléon aux myrtilles</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">298</span> <b>.00</b></span>
              <div class="btns"><span>立即订购</span></div>
            </div>
          </div>
        </li>
        <li class="pro-li">
          <div class="pro-liimg">
            <div class="liImg"><img src="static/images/img-1.jpg"></div>
            <div class="cart-icon"></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">蓝莓轻乳拿破仑</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">Napoléon aux myrtilles</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">298</span> <b>.00</b></span>
              <div class="btns"><span>立即订购</span></div>
            </div>
          </div>
        </li>
        <li class="pro-li">
          <div class="pro-liimg">
            <div class="liImg"><img src="static/images/img-1.jpg"></div>
            <div class="cart-icon"></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">蓝莓轻乳拿破仑</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">Napoléon aux myrtilles</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">298</span> <b>.00</b></span>
              <div class="btns"><span>立即订购</span></div>
            </div>
          </div>
        </li>
        <li class="pro-li">
          <div class="pro-liimg">
            <div class="liImg"><img src="static/images/img-1.jpg"></div>
            <div class="cart-icon"></div>
          </div>

          <div class="pro-content">
            <div class="p1 clearfix"><span class="fl">蓝莓轻乳拿破仑</span>
            </div>
            <div class="p2 clearfix">
              <span class="fl">Napoléon aux myrtilles</span>
            </div>
            <div class="p3 clearfix">
              <span class="fl"><b>￥</b><span class="price" data-price="298">298</span> <b>.00</b></span>
              <div class="btns"><span>立即订购</span></div>
            </div>
          </div>
        </li>

      </ul>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import footer from '../components/footer'
export default {
  name: 'list',
  components: {
    myFooter: footer
  },
  data () {
    return {
      prolist: [
        {chineseName: "榴莲雪塔"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
