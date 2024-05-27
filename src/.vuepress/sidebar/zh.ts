import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回文档首页',
  icon: 'home',
  link: '/',
};

export const zhSidebar = sidebar({
  '/about/': [
    back_posts,
    {
      text: '关于',
      icon: 'info',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],

  '/get-started/': [
    back_posts,
    {
      text: '快速上手',
      icon: 'slides',
      link: '/get-started/',
      children: 'structure',
    },
  ],

  '/guide/': [
    back_posts,
    {
      text: '操作指南',
      icon: 'book',
      link: '/guide/',
      children: 'structure',
    },
  ],

  '/open-api/': [
    back_posts,
    {
      text: 'OpenApi',
      icon: 'coding',
      link: '/open-api/',
      children: 'structure',
    },
  ],

  '/': ['README.md', '/get-started/', '/guide/', '/open-api/', '/about/'],
});
