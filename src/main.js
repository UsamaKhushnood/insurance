import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

Vue.use(VueMoment, {
  // moment,
})

import jQuery from 'jquery'
import axios from 'axios'
import _ from 'underscore'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

global.$ = global.jQuery = jQuery
global.axios = axios
global._ = _


Vue.use(Toast);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
