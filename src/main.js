import Vue from 'vue'
import App from './App.vue'
import './styles/reset.scss'
import XInput from '@/components/XInput.vue'
import XButton from '@/components/XButton.vue'
import XSwitch from '@/components/XSwitch.vue'

Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('x-switch', XSwitch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
