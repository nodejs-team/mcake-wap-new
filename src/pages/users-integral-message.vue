<template>
  <div class="users integral message">
    <div class="integral-message">
      <ul>
        <div class="message-header"><span><i class="icon iconsfont icons-nav-ms"></i>未读消息</span></div>
        <li>
          <div class="head-image" style="background: url('../static/images/img-1.jpg') center center; background-size: 100%;"></div>
          <div class="content">
            <h2>悦圆时刻 诱见仲秋 <span class="date-time">2017.7.31</span></h2>
            <p>爱，是万有引力的灵感，每个人都是围绕月亮的行星，月，是阴晴圆缺的浪漫 诉说着每个人的故事......</p>
          </div>
        </li>
        <li>
          <div class="head-image" style="background: url('../static/images/img-1.jpg') center center; background-size: 100%;"></div>
          <div class="content">
            <h2>悦圆时刻 诱见仲秋 <span class="date-time">2017.7.31</span></h2>
            <p>爱，是万有引力的灵感，每个人都是围绕月亮的行星，月，是阴晴圆缺的浪漫 诉说着每个人的故事......</p>
          </div>
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
