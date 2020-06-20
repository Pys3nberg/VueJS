import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store/store";
import VueResource from 'vue-resource';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-efff1.firebaseio.com/'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
