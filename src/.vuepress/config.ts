import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9452,
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档演示',
      description: 'OtterTrade 的文档演示',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Docs Demo',
      description: 'A docs demo for OtterTrade',
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
