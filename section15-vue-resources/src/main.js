import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-hhtp-91683.firebaseio.com/';
// Vue.http.options.headers...

// these functions execute on the request
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST')
  {
    request.method='PUT';
  }
  // you can use next to intercept response
  next(response => {
    response.json = () => {return {
      messages: response.body
    }};
  });
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
