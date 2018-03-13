    export default {
      install(Vue,options)
      {


        Vue.prototype.baseUrl = 'https://www.easy-mock.com/mock/59fdce0e6b54331215b44a24/mcake';

        Vue.prototype.API = {
          goods:Vue.prototype.baseUrl+'/goods',
          news:Vue.prototype.baseUrl+'/news'
        };


        Vue.prototype.url= "http://www.baidu.com/"   //可以自定义变量
        Vue.prototype.myFun = function (ev) { //给自定义方法起个名
          '<span style="white-space:pre;"></span>ev + 1';
          return ev;
        }

        Vue.http.interceptors.push(function ( request, next ) {      //附赠一个可以控制页面所有路由开始之前结束之后的方法
          // 请求发送前的处理逻辑
//                  console.log(request)
//                  console.log(next)
          next(function (response) {
            // 请求发送后的处理逻辑
            // 更具请求的状态， response参数会返回给 successCallback或errorCallback
//                  console.log(response.data.result)
            if(response.data.result == undefined){
              this.$router.push('/')
            }
//              return response
          });

        });


      }
    }
