// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

// 加载 mockserver
import '../src/mock/mockServer'

// 加载 loading 图片
import Loading from './common/img/loading.gif'

// 加载 fiter
import './fiter'

Vue.config.productionTip = false;

// 注册全局组件标签
Vue.component(Button.name,Button);

// 使用 lazyLoad
Vue.use(VueLazyload,{
  loading:Loading
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h( App ),
  router,
  store,
});
