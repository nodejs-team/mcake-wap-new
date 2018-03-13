    export default {
      install(Vue,options)
      {
        Vue.prototype.sss = function () {
           return '111';
        };

        Vue.prototype.getTitle = {
          title:'22222222222222',
          isBack: true,
          isAdd:  false,
        };


        Vue.prototype.showFootTab = {
          isShow:false,
          active:0,
        };


      }
    }
