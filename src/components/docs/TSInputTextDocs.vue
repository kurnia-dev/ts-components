<script setup lang="ts">
import { ref } from 'vue';
import TSInputText from '../lib/inputtext/TSInputText.vue';
import CodeBlock from '@/components/codeblock/CodeBlock.vue';
</script>

<template>
  <p>
    Our TSButton Vue component is a flexible button for any use. It can be
    customized with various styles, outlines, icons, or text to suit different
    needs.
  </p>
  <div class="separator" />
  <h2>Import</h2>
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
