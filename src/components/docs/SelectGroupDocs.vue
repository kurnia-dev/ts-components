<script setup lang="ts">
import CodeBlock from '@/components/codeblock/CodeBlock.vue';
import { ref } from 'vue';
const group = ref();
import SelectGroupDialog from '../lib/selectgroupdialog/SelectGroupDialog.vue';
const showSelectGroupDialog = ref<boolean>(false);
import TSButton from '../lib/button/TSButton.vue';
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
  <TSButton @click="console.log('click')" label="Select Group" />
  <Button
    @click="console.log('clicke'), (showSelectGroupDialog = true)"
    label="Click"
  />
  <button onclick="console.log('clicked')">Click</button>
  <SelectGroupDialog
    :show="showSelectGroupDialog"
    @apply="console.log($event)"
    @cancel="() => (showSelectGroupDialog = false)"
    selection-mode="single"
  />
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
