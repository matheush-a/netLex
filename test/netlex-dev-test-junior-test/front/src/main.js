import Vue from 'vue'
import App from './App.vue'
import VueCookie from 'vue-cookie'
import Router from './routes/router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
