// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 浏览器不支持ES6的模块化，在这里使用了ES6模块化之后，webpack会将ES6编译成commondJS

// var Vue = require('vue')

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入全局的sass文件 注意，因为webpack里一切皆模块，我们引入来之后，webpack会编译一下再拿出去
import './stylesheets/main.scss'

// 引入animate.css
import 'animate.css'

//axios
import axios from 'axios'
// 将axios放入到Vue的原型上之后，因为组件其实是Vue的子类，所以会继承Vue原型上的东西，对于组件实例来说，可以通过this.$http直接使用
Vue.prototype.$http = axios

// 各种过滤器 时间格式转换   
import './modules/filters' 

//各种的指令
import './modules/directives'


//element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

//mint-ui
import { Lazyload, InfiniteScroll } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Lazyload);
Vue.use(InfiniteScroll);


//我自己的组件库
import MZUI from './mz-ui'
import './mz-ui/stylesheets/index.scss'
//Vue.use其实是在执行MZUI里面的install方法
Vue.use(MZUI)

//引入路由
import router from './router'

/* eslint-disable no-new */
// 整个项目的实例
new Vue({
  el: '#app',//指定实例的模板
  router,//这样的话里面的组件就都能用$route和$router了
  components: { App },//注册 根组件 app
  template: '<App/>',
  
})

