import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';
import { getDirname, path } from 'vuepress/utils';
import AppPackage from '../../package.json';

import manifest_json from './public/pwa/manifest.json';
const manifestJson: any = manifest_json;

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  iconAssets: '//at.alicdn.com/t/c/font_4563845_1etsaa79eqc.css',
  hostname: 'https://doc.OtterTrade.com',
  repo: 'https://github.com/otter-trade/doc-otter-trade',
  author: {
    name: 'OtterTrade',
    url: 'https://OtterTrade.com',
  },
  navbarTitle: 'OtterTrade',
  navbarAutoHide: 'always',
  darkmode: 'toggle',
  contributors: true,
  lastUpdated: true,
  fullscreen: true,
  license: AppPackage.license,

  hotReload: true,

  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    end: ['Language', 'Outlook', 'Search'],
  },
  sidebarSorter: ['order', 'readme', 'title', 'filename'],
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],

  logo: '/pwa/192x192.png',
  docsDir: 'src',
  displayFooter: true,

  locales: {
    '/': {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },

    '/en/': {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },
  },

  markdown: {
    include: {
      resolvePath: (file) => {
        if (file.startsWith('@src')) {
          return file.replace('@src', path.resolve(__dirname, '..'));
        }
        return file;
      },
    },
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            };
        },
      },
    ],
    align: true,
    attrs: true,
    alert: true,
    tabs: true,
    component: true,
    spoiler: true,
    demo: true,
    echarts: true,
    imgMark: true,
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
    breaks: true,
    linkify: true,
    footnote: true,
    mark: true,
    obsidianImgSize: true,
  },

  plugins: {
    photoSwipe: false, // 这个插件难用的 一 B

    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/pwa/72.png',
      icon: '/pwa/512.png',
    },
    slimsearch: {
      indexContent: true,
    },

    components: {
      components: ['Badge', 'VPCard'],
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      manifest: manifestJson,
    },
  },
});
