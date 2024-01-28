<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useField } from 'vee-validate';
import { formatVowelSoundLabel } from '@/utils/textFormater.util';
import { FieldValidation } from '@/types/fieldValidation.type';
import { TSCalendarProps } from './TSCalendar.vue.d';
import ValidatorMessage from '../validatormessage/ValidatorMessage.vue';

const props = defineProps<TSCalendarProps>();

const emit = defineEmits<{
  'update:modelValue': [date: number | number[]];
}>();

onMounted(() => {
  setValidator();
});

const date = ref<string>();
const field = reactive<FieldValidation>({});

const getGMTTime = (dateString: string): number => {
  return new Date(new Date(dateString).toUTCString()).getTime();
};

const parseDate = (dateToParse: string | string[]): number | number[] => {
  if (!Array.isArray(dateToParse)) return getGMTTime(dateToParse);

  return [
    getGMTTime(dateToParse[0]),
    getGMTTime(dateToParse[1] ?? dateToParse[0]),
  ];
};

const setClass = (): void => {
  const highlights = document.querySelectorAll(
    '.p-datepicker span.p-highlight',
  );
  highlights[0]?.classList.add('first-and-last');
  highlights[highlights.length - 1]?.classList.add('first-and-last');
};

watch(date, (newDate: string | undefined) => {
  if (newDate) {
    const parsed = parseDate(newDate);
    emit('update:modelValue', parsed);
  }
});

const setValidator = (): void => {
  if (props.useValidator) {
    Object.assign(
      field,
      useField(props.fieldName ?? '', (value: string) => {
        if (props.mandatory) return setValidatorMessage(value);
        return true;
      }),
    );
  }
};

const setValidatorMessage = (value: string): boolean | string => {
  if (!value) {
    return (
      props.validatorMessage ??
      `Please pick ${formatVowelSoundLabel(props.label)} date!`
    );
  }

  return true;
};
</script>

<template>
  <div class="field_wrapper">
    <label v-if="label" data-test="label">
      {{ label }}
      <span v-if="mandatory" class="text-danger" data-test="mandatory">*</span>
    </label>
    <div class="input_wrapper">
      <Calendar
        v-model="date"
        :pt="{
          root: { class: 'ts-calendar' },
          panel: { class: 'ts-datepicker' },
          input: { class: 'ts-dateinput' },
        }"
        :selection-mode="mode ?? 'single'"
        @show="setClass"
        @update:model-value="(field.value = parseDate($event)), setClass()"
        hide-on-range-selection
        icon-display="input"
        placeholder="Select date"
        show-icon
      />
      <ValidatorMessage
        v-show="field.errorMessage"
        :message="field.errorMessage"
        data-test="ts-calendar-validator-message"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import './style/TSCalendar.scss';
</style>
