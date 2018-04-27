import axios from 'axios'
import Qs from 'qs'
import md5 from 'js-md5'
import Vue from 'vue'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Toast, MessageBox, Popup } from 'mint-ui'
var instance = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  /*transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    console.log(1111)
    data=Qs.stringify(data);
    return data;
  }],*/
})
instance.interceptors.request.use(function(config) {
  // debugger;
  // 添加权限验证
  
   //设置user_token

  const user_token = localStorage.mcake_user_token
  const mcake_user_token_time = localStorage.mcake_user_token_time
  // console.log(user_token)
  // console.log(mcake_user_token_time)
  if(mcake_user_token_time-new Date().getTime()>0){
    // console.log('user_token没有失效')
    localStorage.mcake_user_token_time = new Date().getTime()+60*24*24*1000
    config.headers['user-token'] = user_token
  }else{
    // console.log('user-token登入失效')
    localStorage.removeItem('mcake_user_token');
    localStorage.removeItem('mcake_user_token_time');
  }


  //根据请求链接判断是否需要登入，如果需要登入，判断是否已经登录成功
  // console.log(localStorage.mcake_is_login)
  let userArr=['07399bea14647979','0a726336d3a19773','5e49d89248023811','b2d339c92168c794',
  'b34ce2c4f51281f9','c300195f519eeeac','c5cc50070b5c48db','2e52b040c23f374c','5ec350ef90d3f7d3',
  '670ff0ae277f4cae','781fdd9d4eb4b628','7c670d1b5ed5bbef','51e4fce79ae6a9a0','ce140030bb774abe']
  let mustlogin=userArr.includes(config.url.replace('/api/',''))
  if(mustlogin&&!localStorage.mcake_user_token){
    // console.log('用户需要登陆')
    MessageBox.alert('请先登录后再进行操作').then(action => {
      window.location.href='#/login?isback=1'
    });
    
   //设置assess_token
  }
  const mcake_is_login = localStorage.mcake_is_login?JSON.parse(localStorage.mcake_is_login):''
  // console.log(mcake_is_login)
  if(mcake_is_login){
    const Authorization = mcake_is_login.token
    // console.log(Authorization)
    // var  timestamp=new Date().getTime()
    config.headers['access-token'] = Authorization
  }
  // 设置版本号
  config.headers['version'] = 'v1.0'

 
  // config.headers.common['version']='v1.0' 
  // 处理非get data
  if (config.method != 'get' && 'string' != typeof config.data && config.data) {
     let ContentType=config.headers['Content-Type'];
     if(ContentType=="application/json"){


      // config.headers['Content-Type'] = 'application/json'
      //console.log(config.data)
      config.body = Qs.parse(config.data)//JSON.stringify(config.data)
    }
    else if(ContentType=="multipart/form-data"){

    }
    else{
      config.data=Qs.stringify(config.data);
      /*const params = new URLSearchParams();
      Object.keys(config.data).forEach((key) => {
        params.append(key, config.data[key]);
      })
      config.data = params */ 
    }
  }

  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
instance.interceptors.response.use(function(response) {
  if(response.data.code==-14){
    response.data.msg=''
  }
  // 对返回的数据进行一些处理
  if (response.data.status == '40008201'   || response.data.status == '40009201') {
      setTimeout(() => {
        window.location.href = '/'
      }, 1000);
     
    //location.reload();
    return response.data
  }
  if (response.data.status && '2' != (response.data.status + '').charAt(0)) {
    //alert(response.data.message || response.data.msg || '结果返回异常')
  }
  if(response.data.code==-14){
    console.log(11111)
  }
  
  return response.data
}, function(error) {
  // 对返回的错误进行一些处理
  return Promise.reject(error)
})
export default instance