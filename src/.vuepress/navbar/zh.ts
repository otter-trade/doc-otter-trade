import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/get-started/',
  '/guide/',
  '/open-api/',
  {
    text: '快速访问',
    icon: 'yumingwangzhan',
    children: [
      { text: 'Github', icon: 'list', link: 'https://github.com/otter-trade' },
      { text: '用户站', icon: 'list', link: 'https://OtterTrade.com' },
      { text: '开发者站', icon: 'list', link: 'https://OtterTrade.com/developer' },
      { text: 'BBS', icon: 'list', link: 'https://OtterTrade.com/bbs' },
    ],
  },
  '/about/',
]);
