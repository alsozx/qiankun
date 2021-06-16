import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: '首页', component: '@/pages/home.js' },
    {
      path: '/app-vue',
      name: '欢迎vue',
      component: '@/pages/index.js',
    },
  ],
  fastRefresh: {},
  // qiankun: {
  //   master: {
  //     apps: [
  //       {
  //         name: 'app1',
  //         entry: '//localhost:3000',
  //       },
  //     ],
  //   },
  // },
});
