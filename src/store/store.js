
import Vue from 'vue'
import Vuex from 'vuex'
import toggle from './modules/toggle'

import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  modules: {
    toggle
  }
})
