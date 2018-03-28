import axios from 'axios'
import Qs from 'qs'

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
  // const Authorization = localStorage.getItem("access_token")
  // config.headers.Authorization = Authorization
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

  return response.data
}, function(error) {
  // 对返回的错误进行一些处理
  return Promise.reject(error)
})
export default instance