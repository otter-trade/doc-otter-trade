import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
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
      icon: 'guide1',
      link: '/get-started/',
      children: 'structure',
    },
  ],

  '/guide/': [
    back_posts,
    {
      text: '操作指南',
      icon: 'zhinan',
      link: '/guide/',
      children: 'structure',
    },
  ],

  '/open-api/': [
    back_posts,
    {
      text: 'OpenApi',
      icon: 'apiguanli',
      link: '/open-api/',
      children: 'structure',
    },
  ],

  '/posts/': ['/', '/posts/', '/get-started/', '/guide/', '/open-api/', '/about/'],
});
