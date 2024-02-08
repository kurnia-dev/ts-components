<script setup lang="ts">
import { computed, ref } from 'vue';
import { DateTextProps } from './DateText.vue.d';

import {
  GeneralSetting,
  DateTextFormatOptions,
} from '@/types/generalSetting.type';

type User = {
  token: string;
  generalSetting: GeneralSetting;
  [key: string]: unknown;
};

const props = defineProps<DateTextProps>();

const defaultUserSettings = {
  generalSetting: {
    timezone: 'America/New_York',
    dateFormat: {
      locale: 'en-US',
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    },
    timeFormat: true,
  },
};

const loggedInUser = ref<User>(
  JSON.parse(
    localStorage.getItem('user') ?? JSON.stringify(defaultUserSettings),
  ),
);

const timeZone = computed<string>(
  () => loggedInUser.value.generalSetting.timezone,
);

const dateFormat = computed(() => loggedInUser.value.generalSetting.dateFormat);
const timeFormat = computed(() => loggedInUser.value.generalSetting.timeFormat);

const formatedDate = computed(() => {
  let options: DateTextFormatOptions = {
    year: dateFormat.value.year,
    month: dateFormat.value.month,
    day: dateFormat.value.day,
    weekday: dateFormat.value.weekday,
    hour12: timeFormat.value,
    timeZone: timeZone.value,
  };

  if (props.useTime) {
    options = {
      ...options,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  }

  return new Date(props.date).toLocaleString(dateFormat.value.locale, options);
});
</script>

<template>
  <span class="date-text">
    {{ formatedDate }}
  </span>
</template>

<style lang="scss">
.date-text {
  text-wrap: nowrap;
  white-space: nowrap;
  width: max-content;
}
</style>
