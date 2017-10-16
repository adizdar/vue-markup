/**
 * The Vue build version to load with the `import` command
 * (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 */

// Module/Components
import Vue from 'vue'
import App from './App'
import router from './router'

// Style's
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
