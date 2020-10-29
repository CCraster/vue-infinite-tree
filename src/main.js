import Vue from 'vue'
import App from './App.vue'
import XInput from '@/components/XInput.vue'
import XButton from '@/components/XButton.vue'

Vue.component('x-input', XInput)
Vue.component('x-button', XButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
