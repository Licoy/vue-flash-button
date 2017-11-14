import Vue from 'vue'
import App from './App.vue'
import Tools from './components/flash-button/index.js'
Vue.use(Tools)
new Vue({
  el: '#app',
  render: h => h(App)
})
