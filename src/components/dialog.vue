<template>
  <div>
    <div class="dialog-wrap">
      <!-- <div class="dialog-cover"   @click="closeMyself"></div> -->
      <div class="dialog-cover"></div>
      <transition
  name="slide"
  enter-active-class="slideInDown"
  leave-active-class="slideOutRight"
>
        <div class="dialog-content" v-show='show'>
          <p class="dialog-close" @click="closeMyself"> <i class="icon iconsfont icons-guanbi"></i></p>
          <slot>empty</slot>
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
      show:false
    }
  },
  props:['isShow'],
  watch:{
    'isShow':function(){
      this.show=this.isShow
    }
  },  
  mounted(){
    
    this.show=this.isShow
  },
  methods: {
    closeMyself () {
      this.show=false;
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
  overflow: inherit;
  background: #fff;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  box-shadow: 0 10px 40px #888888;
  padding:0;
  line-height: 1.6;
  border-radius: 5px;
}

.dialog-close {
  position: absolute;
  right: .4rem;
  top: .2rem;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #59575b;
}
.icons-guanbi{
  font-size: .3rem;
}
.dialog-content.slideInDown{
  left: 5%;
}
</style>
