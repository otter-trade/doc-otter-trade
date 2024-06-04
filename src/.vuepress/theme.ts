import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

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
  darkmode: 'disable',

  hotReload: true,
  favicon: '/favicon.ico',

  // fullscreen: true,

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

  logo: '/pwa/logo.png',

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

  plugins: {
    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },

    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            '/': '分类：$content',
            '/en/': 'Category: $content',
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            '/': '标签：$content',
            '/en/': 'Tag: $content',
          },
        },
      ],
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/pwa/192x192.png',
      icon: '/pwa/512x512.png',
    },

    // https://plugin-components.vuejs.press/zh/config.html
    components: {
      components: ['Badge', 'VPCard'],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
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
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      alert: true,
      footnote: true,
      imgMark: true,
      obsidianImgSize: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install katex before enabling it
      // katex: true,

      // Install mathjax-full before enabling it
      // mathjax: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: '/pwa/apple-touch-icon.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/apple-touch-icon.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'OtterTrade文档站',
            short_name: 'ot-doc',
            url: '/',
            icons: [
              {
                src: '/pwa/192x192.png',
                sizes: '192x192',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
