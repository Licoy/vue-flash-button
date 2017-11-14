import Vue from 'vue'
import App from './App.vue'
import FlashButton from './components/flash-button/index.js'

Vue.use(FlashButton)
new Vue({
  el: '#app',
  render: h => h(App)
})
