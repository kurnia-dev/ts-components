<script setup lang="ts">
import { CodeBlockProps } from './CodeBlock.vue.d';
defineProps<CodeBlockProps>();
</script>
<template>
  <pre
    :class="['code-block', `language-${lang == 'ts' ? 'typescript' : 'html'}`]"
  ><slot /></pre>
</template>
