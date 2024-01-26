<script setup lang="ts">
import { CodeBlockProps } from './CodeBlock.vue.d';
defineProps<CodeBlockProps>();
</script>
<template>
  <div
    :class="['code-block', `language-${lang == 'ts' ? 'typescript' : 'html'}`]"
  >
    <slot />
  </div>
</template>
