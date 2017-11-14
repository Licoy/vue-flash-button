import Vue from 'vue'
import App from './App.vue'
import SgButton from './components/sg-button/index'

Vue.use(SgButton)
new Vue({
  el: '#app',
  render: h => h(App)
})
