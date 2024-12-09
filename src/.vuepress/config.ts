import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },

  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/',
  temp: '.cache/.vp-temp',
  cache: '.cache/.vp-cache',

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
