---
home: true
icon: home
title: 文档首页
heroImage: /img/home_1_logo.png
heroText: 智策即用，通达市场
tagline: OtterTrade，策略连接你我
actions:
  - text: 快速上手
    icon: guide1
    link: /get-started/
    type: primary

  - text: 关于我们
    icon: info
    link: /about/
    type: default

  - text: OtterTrade.com
    icon: /img/link_text.png
    link: https://OtterTrade.com
    type: default
---

<HomePageUser />
<HomePageDevelop />
<HomePageBBS />

<script setup>
import "@components/HomePageBanner.scss";
import HomePageUser from "@components/HomePageUser.vue";
import HomePageDevelop from "@components/HomePageDevelop.vue";
import HomePageBBS from "@components/HomePageBBS.vue";
</script>
