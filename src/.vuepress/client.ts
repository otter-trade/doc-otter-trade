import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const PrintVersion = defineAsyncComponent(() => import('./components/PrintVersion.vue'));
const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
const WeixinSteerBrowser = defineAsyncComponent(() => import('./components/WeixinSteerBrowser.vue'));
// const HomePageUser = defineAsyncComponent(() => import('./components/HomePageUser.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // app.component('HomePageUser', HomePageUser);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    PrintVersion,
    TopNavBeautify,
    CommentHideBtn,
    WeixinSteerBrowser,
    // ...
  ],
});
