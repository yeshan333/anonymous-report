import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title: '人体成分分析系统',
  },
  routes: [{ path: '/', component: '@/pages/index', layout: '' }],
});
