import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state: {
    is_login: false
  },
  mutations: {
    login(state) {
      state.is_login = ture
    },
    logout(state) {
      state.is_login = false
    }
  }
})