<template>
  <div class="search">
    <div class="content">
      <div my-message="hello!"></div>
      <div class="search-bar">

        <input type="text" placeholder="请输入关键词" class="input_style ">
      </div>
      <p>拿破仑、巧克力、芝士、鲜奶、坚果、小食</p>
      <div class="btns">
        <ul>
          <li><span>搜索</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'search',
  props: [],
  components: {
  },
  data () {
    return {
      msg: '搜索',
      isSearch: false
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{
    position: fixed;
    width:100%;
    height: 100%;
    background-color: #f5f5f5;
    z-index: 999;
    top: 1.6rem;
  }
  .search .content{
    background-color: #fff;
    padding: .6rem 0;
    font-size: .3rem;
  }
  .search .input_style{
    text-align: center;
  }
</style>
