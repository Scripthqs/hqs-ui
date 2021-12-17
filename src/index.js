// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Header from './header'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'



const install = function (Vue) {
  Vue.component('f-button', Button)
  Vue.component('f-icon', Icon)
  Vue.component('f-button-group', ButtonGroup)
  Vue.component('f-input', Input)
  Vue.component('f-row', Row)
  Vue.component('f-col', Col)
  Vue.component('f-layout', Layout)
  Vue.component('f-header', Header)
  Vue.component('f-footer', Footer)
  Vue.component('f-sider', Sider)
  Vue.component('f-content', Content)
  Vue.component('f-tabs', Tabs)
  Vue.component('f-tabs-head', TabsHead)
  Vue.component('f-tabs-body', TabsBody)
  Vue.component('f-tabs-item', TabsItem)
  Vue.component('f-tabs-pane', TabsPane)
  Vue.component('f-popover', Popover)
  Vue.component('f-collapse', Collapse)
  Vue.component('f-collapse-item', CollapseItem)
  Vue.use(plugin)
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}