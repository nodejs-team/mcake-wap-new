<template>

<div>

  <p>这是从父组件里传过来的内容: <br>{{msgFather}} </p>
  <input type="text" v-model="inputValue">
  <button @click="myEvent">点击</button>

  <hr>

  <h1>插槽演示：</h1>
  <slot></slot>
  <slot name="apple"></slot>
  <slot name="banana"></slot>


</div>

</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: '尾部导航',
      isNavShow: false,
      inputValue: '请输入姓名'
    }
  },
  props:['msgFather'],
  methods: {
    navToggle: function (event) {
      console.log(2222);
    },
    myEvent: function () {
      this.$emit("sendiptVal", this.inputValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
