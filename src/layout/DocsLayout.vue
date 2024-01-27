<script setup lang="ts">
import { computed, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import HeaderLayout from './HeaderLayout.vue';
import SidebarLeft from './SidebarLeft.vue';
import SidebarRight from './SidebarRight.vue';
import FooterLayout from './FooterLayout.vue';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const route = useRoute();
const title = computed(() => route.meta.title as string);

useHead({
  title: title.value,
});

onMounted(() => {
  formatInlineCode();
  highlight();
});

onUpdated(() => {
  formatInlineCode();
  highlight();
});

const highlight = (): void => {
  document.querySelectorAll('.code-block code').forEach((block) => {
    hljs.configure({
      languages: ['vue'],
    });
    hljs.highlightElement(block as HTMLElement);
  });
};

const formatInlineCode = (): void => {
  const main = document.querySelector('.tsvue-docs-main') as HTMLElement;
  if (main)
    main.innerHTML = main?.innerHTML.replace(/`(.+?)`/g, '<code>$1</code>');
};
</script>

<template>
  <div class="docs-layout">
    <HeaderLayout />
    <div class="docs-layout-content">
      <SidebarLeft />
      <main class="tsvue-docs-main">
        <h1 class="tsvue-page-title">{{ title }}</h1>
        <router-view />
      </main>
      <SidebarRight />
    </div>
    <FooterLayout />
  </div>
</template>

<style lang="scss">
@import 'var';

main.tsvue-docs-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 1.125rem;
  color: $general-body;

  h1.ts-vue-page-title {
    font-size: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $general-header-weak;
    font-weight: 600;
  }
}

// Layout style for docs page
.docs-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;

  .docs-layout-content {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-areas: 'left main right';
    gap: 2rem;

    height: 100%;
    width: 100%;
    max-width: $content-max-width;
    margin: 0 auto;

    .tsvue-docs-sidebar-left {
      grid-area: left;
    }

    .tsvue-docs-main {
      grid-area: main;
    }

    .tsvue-docs-sidebar-right {
      grid-area: right;
    }
  }
}

.tsvue-docs-sidebar-right,
.tsvue-docs-sidebar-left {
  .aside-content {
    position: sticky;
    top: 105px;
    padding: 0 0.5rem 0;

    * {
      background: none;
    }
  }
}

.tsvue-docs-main {
  .code-block,
  .component-preview {
    border-radius: 4px;
    padding: 1rem;
    font-size: 0.95rem;
    border: 1px solid rgb(223, 231, 239);
    background: rgb(255, 255, 255);

    code {
      background: none;
      white-space: pre-line;
    }
  }

  .code-block {
    display: flex;
    flex-direction: column;
  }

  .component-preview {
    justify-content: center;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: rgba(166, 226, 190, 0.2);
    border-radius: 6px;
  }

  .separator {
    padding: 1rem;
  }
}
</style>
