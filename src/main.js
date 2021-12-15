import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router';
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
  data: {
    state: store.state
  },
  beforeCreate() {
    store.initial()
  }
}).$mount('#app')
