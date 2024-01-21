<script setup lang="ts">
import { TreeNode } from 'primevue/tree';
import { ref } from 'vue';

const nodes = ref<TreeNode[]>([
  {
    key: '0',
    label: 'Introduction',
    icon: 'ri-home-2-line',
    children: [
      {
        key: '0-0',
        label: 'What is Vue.js?',
        data: 'https://vuejs.org/guide/introduction.html#what-is-vue',
        type: 'url',
      },
      {
        key: '0-1',
        label: 'Quick Start',
        data: 'https://vuejs.org/guide/quick-start.html#quick-start',
        type: 'url',
      },
      {
        key: '0-2',
        label: 'Creating a Vue Application',
        data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application',
        type: 'url',
      },
      {
        key: '0-3',
        label: 'Conditional Rendering',
        data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering',
        type: 'url',
      },
    ],
  },
  {
    key: '1',
    label: 'Components',
    icon: 'ri-vuejs-line',
    children: [
      {
        key: '1-0',
        label: 'Button',
        data: '/button',
        type: 'url',
      },
    ],
  },
]);
</script>

<template>
  <aside class="tsvue-docs-sidebar-left">
    <div class="aside-content">
      <Tree :value="nodes" class="w-full md:w-30rem">
        <template #url="slotProps">
          <router-link :to="slotProps.node.data">
            {{ slotProps.node.label }}
          </router-link>
        </template>
      </Tree>
    </div>
  </aside>
</template>
<style lang="scss">
@import 'var';

.tsvue-docs-sidebar-left {
  .p-tree {
    background: none !important;
    padding: 0.25rem;
    border: none;

    .p-treenode {
      .p-treenode-children {
        padding: 0.5rem;
        padding-left: 1.25rem;
      }

      .p-treenode-content {
        padding: 0;
        cursor: pointer;
        position: relative;

        &:focus {
          box-shadow: none;
          border: none;
        }

        .p-treenode-label {
          font-weight: 500;

          a {
            padding: 0;
          }
        }

        .p-tree-toggler {
          position: absolute;
          right: 0;
          width: 20px;
          height: 20px;
          transition: 0.15s ease rotate;
          margin-right: 0;

          svg {
            width: 12px;
            height: 12px;
          }

          &:focus {
            border: none;
            box-shadow: none;
          }
        }
      }
    }
  }
}
</style>
