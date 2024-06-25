import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9452,
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
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
