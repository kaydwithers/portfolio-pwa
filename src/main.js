// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/store'
import Styletron from 'styletron'
import VueParticles from 'vue-particles'
import VueScrollTo from 'vue-scrollto'
import Vuex from 'vuex'

Vue.use(VueParticles)
Vue.use(VueScrollTo)
Vue.use(Vuex)

const styletron = new Styletron()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  styletron,
  router,
  template: '<App/>',
  components: { App }
})
