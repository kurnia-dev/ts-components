<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import HeaderLayout from './HeaderLayout.vue';
import SidebarLeft from './SidebarLeft.vue';
import SidebarRight from './SidebarRight.vue';
import FooterLayout from './FooterLayout.vue';

const route = useRoute();
const title = computed(() => route.meta.title as string);

useHead({
  title: title.value,
});
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
    color: $general-header-weak;
    font-size: 2rem;
  }
}

// Layout style for docs page
.docs-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
</style>
