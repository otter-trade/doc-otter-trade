<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const CheckScrollTopClass = () => {
  const themeElms = document.getElementsByClassName('theme-container');
  if (themeElms.length < 1) {
    return null;
  }
  const themeElm = themeElms[0];

  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop < 60) {
    themeElm.classList.add('mo7-scroll-top');
  } else {
    themeElm.classList.remove('mo7-scroll-top');
  }
};

onMounted(() => {
  nextTick(() => {
    CheckScrollTopClass(); // 切换时顶栏修改

    window.removeEventListener('scroll', () => {});
    window.addEventListener('scroll', () => {
      CheckScrollTopClass();
    });
  });

  const router = useRouter();
  router.afterEach(() => {
    nextTick(() => {
      setTimeout(() => {
        CheckScrollTopClass(); // 切换时顶栏修改
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">修改顶栏</div>
  </ClientOnly>
</template>

<style lang="scss">
// sidebar 跟随顶栏一起上下移动
.theme-container {
  .vp-sidebar {
    transition: top 0.3s;
  }
  .toggle-sidebar-wrapper {
    transition: top 0.3s;
  }

  &.hide-navbar {
    .vp-sidebar {
      top: 0;
    }
    .toggle-sidebar-wrapper {
      top: 0;
    }
    .vp-toc-placeholder {
      top: 0.5rem;
    }
  }
}

// 搜索框
.theme-container {
  .slimsearch-button {
    border-color: var(--vp-tc);
  }
}

// 白天
[data-theme='light'] {
  // 导航栏背景色
  .theme-container {
    .vp-navbar {
      background: rgba($color: #fff, $alpha: 0.7);
    }
  }
}

// 黑夜细节
[data-theme='dark'] {
  // 导航栏背景色
  .theme-container {
    .vp-navbar {
      backdrop-filter: blur(6px);
      background: rgba($color: #000, $alpha: 0.6);
    }
  }
}
</style>
