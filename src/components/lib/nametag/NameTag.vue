<script setup lang="ts">
import { computed } from 'vue';
import { NameTagProps, NameTagEmits } from './NameTag.vue.d';
import { formatUserName } from './helpers';

import Button from 'primevue/button';

const props = defineProps<NameTagProps>();
const emit = defineEmits<NameTagEmits>();

const hasValue = computed(() => {
  const type = typeof props.name;
  return (
    type === 'number' || (type === 'string' && props.name && props.name !== '-')
  );
});

const severityClasses = computed<string[]>(() => {
  switch (props.severity) {
    case 'success':
      return ['text-success', 'border-success', 'bg-success-weak'];
    case 'danger':
      return ['text-danger', 'border-danger', 'bg-danger-weak'];
    case 'warning':
      return ['text-warning', 'border-warning', 'bg-warning-weak'];
    case 'dark':
      return ['text-dark', 'border-dark', 'bg-dark-weak'];
    default:
      return ['text-primary', 'border-primary', 'bg-primary-weak'];
  }
});

const formattedText = computed(() => {
  if (!hasValue.value) return '-';

  switch (props.type) {
    case 'status':
      return props.name;
    case 'user':
      return formatUserName(props.name);
    default:
      if (props.name.length > 12) {
        const firstWord = props.name.slice(0, 5);
        const lastWord = props.name.slice(-5);
        return `${firstWord}..${lastWord}`;
      }
      return props.name;
  }
});
</script>

<template>
  <span v-if="hasValue" :class="severityClasses" class="name-tag">
    <span class="name-tag-name">{{ formattedText }}</span>
    <Button
      v-if="props.removable"
      @click="emit('remove')"
      class="remove-btn"
      icon="ri-close-line"
      rounded
      text
    />
  </span>
  <span v-else aria-label="invalid-name">-</span>
</template>

<style lang="scss">
@import './style/NameTag.scss';
</style>
