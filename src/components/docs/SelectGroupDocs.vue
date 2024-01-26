<script setup lang="ts">
import CodeBlock from '@/components/codeblock/CodeBlock.vue';
import SelectGroup from '@/components/lib/selectgroup/SelectGroup.vue';
import { ref } from 'vue';
const group = ref();
</script>

<template>
  <p>
    Our TSButton Vue component is a flexible button for any use. It can be
    customized with various styles, outlines, icons, or text to suit different
    needs.
  </p>
  <div class="separator" />
  <h2>Import</h2>
  <SelectGroup
    v-model:group-keys="group"
    label="Group"
    selection-mode="checkbox"
  />
  <CodeBlock lang="ts">
    import { TSInputText } from 'ts-vue-components'
  </CodeBlock>
</template>
<style lang="scss">
.component-preview {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  background: white;
  border: 1px solid rgb(223, 231, 239);
  border-radius: 4px;
  padding: 1rem;
}
</style>
