<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useField } from 'vee-validate';
import { FieldValidation } from '@/types/fieldValidation.type';
import { TSInputTextEmits, TSInputTextProps } from './TSInputText.vue.d';

const props = defineProps<TSInputTextProps>();

defineEmits<TSInputTextEmits>();

const field = reactive<FieldValidation>({
  value: props.modelValue,
});

onMounted(() => {
  if (props.useValidator) {
    Object.assign(
      field,
      useField(props.fieldName ?? 'textInput', (value: string) => {
        if (props.mandatory) return setValidatorMessage(value);
        return true;
      }),
    );
  }
});

const setValidatorMessage = (value: string): boolean | string => {
  if (!value) {
    return props.validatorMessage ?? `${props.label} must not be empty!`;
  } else if (value.length > 30) {
    return 'Max. 30 characters!';
  } else if (props.type === 'email') {
    const emailRegexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegexp.test(value) ? true : 'Email format is incorrect!';
  }

  return true;
};
</script>
<template>
  <div class="field_wrapper">
    <label v-if="label">
      {{ label }}
      <span v-if="mandatory" class="text-danger">*</span>
    </label>
    <div class="input_wrapper">
      <InputText
        :class="[{ 'p-invalid': field.errorMessage }, 'w-100']"
        :disabled="disabled"
        :model-value="props.modelValue"
        :placeholder="
          placeholder ?? `Input ${label ? label.toLowerCase() : 'text'}`
        "
        @update:model-value="
          $emit('update:modelValue', $event), (field.value = $event)
        "
        class="ts-inputtext"
      />
      <small
        id="dd-error"
        v-show="field.errorMessage"
        class="validator-message"
        data-test="inputtext-validator-msg"
      >
        {{ field.errorMessage }}
      </small>
    </div>
  </div>
</template>
<style lang="scss">
@import 'var';

.p-inputtext:disabled {
  background-color: $general-input;
  border-color: $general-body;
}
</style>
