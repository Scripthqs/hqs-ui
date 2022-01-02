# 快速上手

## 开始使用

1.添加 CSS 样式

使用本框架前，请在 css 中开启 border-box

    *,*::before,*::after{box-sizing:border-box;} 

2.引用

- index.js全局引入hqs-Ui(推荐)

```js
import {Button,ButtonGroup,Row,Col,Header,Footer,Content,Sider,Layout,Icon,Input,Toast,plugin,Tabs,TabsHead,TabsBody,TabsItem,Collapse,CollapseItem,Popover} from 'fli-ui'
import 'hqs-ui/dist/index.css'

Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)
Vue.component('h-input', Input)
Vue.component('h-row', Row)
Vue.component('h-col', Col)
Vue.component('h-layout', Layout)
Vue.component('h-header', Header)
Vue.component('h-footer', Footer)
Vue.component('h-sider', Sider)
Vue.component('h-content', Content)
Vue.component('h-toast', Toast)
Vue.component('h-tabs', Tabs)
Vue.component('h-tabs-head', TabsHead)
Vue.component('h-tabs-body', TabsBody)
Vue.component('h-tabs-item', TabsItem)
Vue.component('h-tabs-pane', TabsPane)
Vue.component('h-popover', Popover)
Vue.component('h-collapse', Collapse)
Vue.component('h-collapse-item', CollapseItem)

```

- 模块化引用

在使用的组件里引用,下面以 Button 为例

```js
import {Button} from 'hqs-ui'
    export default {
        components: {
            'h-button': Button,
        },
```

组件最外层的元素会自动添加h-*的类名，你也可以在外层添加自己的容器元素包裹组件，并添加自己的类名，覆盖默认样式

3.点击该项目上方链接，获取使用方法

## 运行

通过如下步骤可以直接运行项目：

```shell
1.git clone https://github.com/Scripthqs/hqs-ui.git
2.npm install
3.npm run start
```

运行入口为src/index.js文件，该文件中是各个组件的使用代码，可以在此引用全部组件，自由修改测试

### 启动

```shell
npm run docs:dev
```

### 构建

```shell
npm run docs:build
```

## 打包

```shell
npm run build
```
