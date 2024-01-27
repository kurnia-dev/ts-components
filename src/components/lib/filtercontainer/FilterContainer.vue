<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TSButton from '../button/TSButton.vue';
import { TSFilterContainerEmits } from './FilterContainer.vue.d';

defineEmits<TSFilterContainerEmits>();

const container = ref<HTMLDivElement | null>(null);
const contentKey = ref<number>(0);

onMounted(() => {
  if (container.value) {
    const chilren = container.value.children;
    const childCount = container.value.childElementCount;
    const isOdd = childCount % 4;

    let [rowPos, colPos] = [1, 1];
    for (const i in Array.from({ length: childCount })) {
      const isLast = Number(i) === childCount - 1;
      chilren[i].setAttribute(
        'style',
        `grid-area: ${rowPos}/${isLast && isOdd ? 4 : colPos}`,
      );

      if (++colPos > 4) {
        colPos = 1;
        rowPos++;
      }
    }
  }
});
</script>
<template>
  <div ref="container" class="ts-filter-container">
    <slot :key="contentKey" />
    <div class="ts-filter-action-button">
      <TSButton
        @click="$emit('clear'), contentKey++"
        label="Clear Field"
        severity="primary"
        text-only
      />
      <TSButton @click="$emit('apply')" label="Apply" severity="success" />
    </div>
  </div>
</template>
<style lang="scss">
@import './style/FilterContainer.scss';
</style>
