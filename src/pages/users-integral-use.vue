<template>
  <div class="users integral use">
    <div class="topheader">
      <h1><span>积分</span>的作用 <br>
        <b>integral action</b>
      </h1>
    </div>
    <div class="user-integral-list integral-use">
      <ul>
        <li><i class="icon iconsfont icons-money2"></i>
          <h2>积分当钱用</h2>
          <p>100积分=1元，积分可抵扣订单金额（不含环外费）。</p>
        </li>
        <li><i class="icon iconsfont icons-money2"></i>
          <h2>积分当钱用</h2>
          <p>积分兑换奖品（即将推出，敬请期待…）。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'users',
    props: [],
    components: {
    },
    data () {
      return {
        msg: '用户中心',
        isSearch: false
      }
    },
    mounted(){

    },
    methods:{

    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/css/user.css';
</style>
