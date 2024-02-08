<script lang="ts" setup>
import { computed } from 'vue';
import { navigateToUrl } from 'single-spa';
import { TSBreadcrumbProps } from './TSBreadcrumb.vue.d';

const props = defineProps<TSBreadcrumbProps>();
const lastIndex = computed(() => props.menus.length - 1);
</script>

<template>
  <div class="breadcrumb">
    <div
      :key="index"
      v-for="(menu, index) in props.menus"
      class="breadcrumb-menu"
    >
      <div v-if="index !== lastIndex" class="breadcrumb-menu-route">
        <a
          v-if="menu.route"
          :href="menu.route"
          @click="navigateToUrl(menu.route!)"
          class="breadcrumb-label cursor-pointer"
        >
          {{ menu.name }}
        </a>
        <div
          v-else-if="!index && !menu.route"
          class="first-menu-no-route breadcrumb-label"
        >
          {{ menu.name }}
        </div>
        <span class="breadcrumb-separator">></span>
      </div>
      <div v-else class="no-route breadcrumb-label">
        {{ menu.name }}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import 'rfs/scss';
@import 'var';

$breadcrumb-font-size: 12px;
$breadcrumb-font-weight: 500;
$breadcrumb-line-height: 21px;
$breadcrumb-letter-spacing: 0.24px;
$breadcrumb-separator-font-size: 14px;
$breadcrumb-separator-font-weight: 500;
$breadcrumb-separator-color: $general-header-weak;

.breadcrumb {
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  &-menu {
    display: flex;
    align-items: center;

    &-route {
      display: flex;
      align-items: flex-end;
    }
  }

  &-label {
    @include font-size($breadcrumb-font-size);
    font-weight: $breadcrumb-font-weight;
    line-height: $breadcrumb-line-height;
    letter-spacing: $breadcrumb-letter-spacing;
    color: $primary;
    padding: 0;
    text-decoration: none;

    &:hover {
      background: none;
    }

    &.cursor-pointer {
      cursor: pointer;
    }

    &.first-menu-no-route {
      color: $primary-strong;
      font-weight: 600;
      cursor: default;
    }

    &.no-route {
      color: $general-label;
      font-weight: 700;
      cursor: default;
    }
  }

  &-separator {
    color: $breadcrumb-separator-color;
    @include font-size($breadcrumb-separator-font-size);
    font-weight: $breadcrumb-separator-font-weight;
    margin-left: 5px;
    margin-right: 5px;
    line-height: $breadcrumb-line-height;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: $breadcrumb-letter-spacing;
  }
}
</style>
