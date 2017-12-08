<template>
  <mt-popup v-model="isNavShow" position="left">
    <div class="navBar">
      <div class="marginTop"></div>
      <mt-cell title="全部商品" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="拿破仑" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="鲜奶" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="慕斯" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="芝士" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="咖啡" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="坚果" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="水果" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
      <mt-cell title="冰激凌" icon="navIcon icon iconsfont icons-wxbdingwei" is-link></mt-cell>
    </div>
  </mt-popup>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: '尾部导航'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
