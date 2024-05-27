import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/get-started/',
  '/guide/',
  '/open-api/',
  '/about/',
  {
    text: '快速访问',
    icon: 'yumingwangzhan',
    children: [
      { text: 'Github', icon: 'github', link: 'https://github.com/otter-trade' },
      { text: '用户站', icon: 'zhanzhang', link: 'https://OtterTrade.com' },
      { text: '开发者站', icon: 'coding', link: 'https://OtterTrade.com/developer' },
      { text: 'BBS', icon: 'other', link: 'https://OtterTrade.com/bbs' },
    ],
  },
]);
