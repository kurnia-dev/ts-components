<script setup lang="ts">
import TSInputText from 'lib/inputtext/TSInputText.vue';
import { TSInputEmailEmits, TSInputEmailProps } from './TSInputEmail.vue.d';

defineProps<TSInputEmailProps>();
defineEmits<TSInputEmailEmits>();
</script>
<template>
  <TSInputText
    :field-name="fieldName"
    :label="label"
    :mandatory="mandatory"
    :model-value="modelValue"
    :placeholder="placeholder"
    :use-validator="useValidator"
    :validator-message="validatorMessage"
    @update:model-value="$emit('update:modelValue', $event)"
    type="email"
  />
</template>
