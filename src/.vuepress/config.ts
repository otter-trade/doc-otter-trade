import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);

console.log('1111', __dirname); // 指向 .vuepress

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9452,
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  alias: {
    '@components': path.resolve(__dirname, 'components'),
  },

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'OtterTrade',
      description: 'OtterTrade 文档站',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Docs Demo',
      description: 'A docs demo for OtterTrade',
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
