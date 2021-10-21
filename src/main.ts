import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BaseCard from '@/components/BaseCard.vue'

Vue.config.productionTip = false
Vue.component('base-card', BaseCard)

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
