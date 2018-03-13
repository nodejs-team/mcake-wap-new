<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <transition name="fade">
        <div class="dialog-content"  v-if="isShow">
          <slot name="close"></slot>
          <slot>empty</slot>
          <slot name="btns"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}




.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}
.dialog-content {
  width: 90%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 35%;
  left: 50%;
  margin-left: -45%;
  z-index: 999;
  box-shadow: 0 10px 40px #888888;
  padding:0;
  line-height: 1.6;
  border-radius: 5px;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #59575b;
}



</style>
