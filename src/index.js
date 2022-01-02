// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from '../src/button/button'
import Icon from '../src/icon/icon'
import ButtonGroup from '../src/button/button-group'
import Input from '../src/input/input'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'
import Row from '../src/grid/row'
import Col from '../src/grid/col'
import Layout from '../src/layout/layout'
import Sider from '../src/layout/sider'
import Content from '../src/layout/content'
import Footer from '../src/layout/footer'
import Header from '../src/layout/header'
import plugin from './plugin'
import Popover from '../src/popover/popover'
import Collapse from '../src/collapse/collapse'
import CollapseItem from '../src/collapse/collapse-item'



const install = function (Vue) {
  Vue.component('h-button', Button)
  Vue.component('h-icon', Icon)
  Vue.component('h-button-group', ButtonGroup)
  Vue.component('h-input', Input)
  Vue.component('h-tabs', Tabs)
  Vue.component('h-tabs-head', TabsHead)
  Vue.component('h-tabs-body', TabsBody)
  Vue.component('h-tabs-item', TabsItem)
  Vue.component('h-tabs-pane', TabsPane)
  Vue.component('h-row', Row)
  Vue.component('h-col', Col)
  Vue.component('h-layout', Layout)
  Vue.component('h-header', Header)
  Vue.component('h-footer', Footer)
  Vue.component('h-sider', Sider)
  Vue.component('h-content', Content)
  Vue.component('h-popover', Popover)
  Vue.component('h-collapse', Collapse)
  Vue.component('h-collapse-item', CollapseItem)
  Vue.use(plugin)
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}