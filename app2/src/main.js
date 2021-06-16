import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./public-path";
import routes from "./router";

Vue.config.productionTip = false;

// 声明变量管理vue及路由实例
let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 导出子应用生命周期 挂载前
export async function bootstrap(props) {
    console.log('app2', 'bootstrap', props)
}

// 导出子应用生命周期 挂载前 挂载后
// **注意，实例化路由时，判断当运行在qiankun环境时，路由要添加前缀，前缀与主应用注册子应用函数genActiveRule("/aaa")内的参数一致**
export async function mount(props) {
  console.log('app2', 'mount', props)
  render(props);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  console.log('app2', 'unmount', instance)
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();
