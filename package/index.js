import InfiniteTree from './InfiniteTree.vue'
// import './styles/index.scss'

// 给Vue.use用
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(InfiniteTree.name, InfiniteTree)
}

// 如果Vue是全局引用的 (例如 <script> 引入) ，使用此
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use({
    install
  })
}

// 本地引用直接使用组件
export default InfiniteTree
