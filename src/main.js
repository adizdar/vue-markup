// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'material-design-lite/dist/material.css'
import 'material-design-lite/dist/material.js'
import lodash from 'lodash'

Vue.config.productionTip = false

// Include loadash in evry component via this.$loadash
Object.defineProperty(
  Vue.prototype, '$loadash', { value: lodash }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
