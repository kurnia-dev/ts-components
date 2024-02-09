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
  if (props.dateValue && props.useValidator) {
    date.value = parseDateFromProps();
    field.value = props.dateValue;
  }
});

const field = reactive<FieldValidation>({});
const date = ref<string | string[]>();

const getGMTTime = (dateString: string): number => {
  return new Date(new Date(dateString).toUTCString()).getTime();
};

const getLocalTime = (timeStamp?: number): string | undefined => {
  if (timeStamp) {
    return new Date(timeStamp).toLocaleDateString();
  }
};

/**
 * This function will parse the date number/timestamp into date string that can be displayed on date input.
 */
const parseDateFromProps = (): string | string[] | undefined => {
  if (!Array.isArray(props.dateValue)) return getLocalTime(props.dateValue);
  return props.dateValue.map((timeStamp) => getLocalTime(timeStamp)).join('-');
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

const setValidator = (): void => {
  if (props.useValidator) {
    Object.assign(
      field,
      useField(props.fieldName ?? 'date', (value: string) => {
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

const unwatch = watch(
  () => props.dateValue,
  () => {
    date.value = parseDateFromProps();
    field.value = props.dateValue;
    unwatch();
  },
);
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
        @update:model-value="
          (event: string | string[]) => {
            const parsedDate = parseDate(event);
            emit('update:modelValue', parsedDate);
            field.value = parsedDate;
            setClass();
          }
        "
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
