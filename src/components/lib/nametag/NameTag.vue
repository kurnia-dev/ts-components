<script setup lang="ts">
import { computed } from 'vue';
import Button from 'primevue/button';
import { NameTagProps, NameTagEmits } from './NameTag.vue.d';

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

const formatUserName = (name: string): string => {
  if (name.length <= 8) return name;

  const splitted = name.split(' ');

  if (splitted.length === 1) {
    return `${splitted[0].slice(0, 8)}..`;
  }

  const firstToRestWord = splitted.slice(0, -1).join(' ');

  const firstWord =
    firstToRestWord.length > 8
      ? `${firstToRestWord.slice(0, 8)}..`
      : firstToRestWord;

  const lastWord = splitted[splitted.length - 1];

  return `${firstWord} ${lastWord.slice(0, 1)}`;
};
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
./NameTag.vue