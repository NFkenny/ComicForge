import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5173/api';

axios.interceptors.request.use((config)=>{
  console.log('请求拦截器',config);
  return config;
})
axios.interceptors.response.use((data)=>{
  console.log('响应拦截器',data);
  return data.data;
})

export default axios