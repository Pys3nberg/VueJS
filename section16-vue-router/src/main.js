import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    console.log(from);
    if(savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x:0, y:700};
  }
});

// use this for very generic checks as it is executed every time
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); // pass nothing, will continue as normal
  // next(false); // stops
  // next({path:'/'}) // pass router objects
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
