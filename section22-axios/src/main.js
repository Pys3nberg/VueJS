import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-axios-bcd44.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'blahblah';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(function(config) {
  console.log('Request Interceptor', config);
  config.headers.get['test'] = 'test';
  return config;
})

const responseInterceptor = axios.interceptors.response.use(response => {
  console.log('Response Interceptor', response);
  return response;
})

// axios.interceptors.request.eject(requestInterceptor); // removes interceptor
// axios.interceptors.response.eject(responseInterceptor); // removes interceptor

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
