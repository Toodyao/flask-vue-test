import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import store from './store'
// 引入Bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
// 引入Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
