<script setup lang="ts">
import { withDefaults } from 'vue';
import {
  TSConfirmDialogEmits,
  TSConfirmDialogProps,
  TSConfirmDialogSlots,
} from './TSConfirmDialog.vue.d';

import TSButton from '@/components/lib/button/TSButton.vue';

const props = withDefaults(defineProps<TSConfirmDialogProps>(), {
  icon: undefined,
  lists: undefined,
  listLabel: undefined,
  body: 'Are you sure want to continue?',
  confirmLabel: 'Yes, Continue',
  closeAfterConfirm: true,
  closable: true,
});

const emit = defineEmits<TSConfirmDialogEmits>();
defineSlots<TSConfirmDialogSlots>();

const closeDialog = (): void => emit('update:visible', false);

const confirm = (): void => {
  emit('confirm');
  props.closeAfterConfirm && closeDialog();
};
</script>

<template>
  <Dialog
    ref="dialog"
    :closable="closable"
    :draggable="false"
    :header="header"
    :pt="{
      root: { style: 'width: 400px' },
      header: { class: 'ts-confirmdialog-header' },
      footer: { class: 'ts-confirmdialog-footer' },
    }"
    @update:visible="emit('update:visible', $event)"
    class="ts-confirmdialog"
    modal
  >
    <template #header>
      <i
        v-if="icon"
        :class="[
          'fs-4',
          'ts-confirmdialog-title-icon',
          severity === 'danger' ? 'text-danger' : '',
          severity === 'success' ? 'text-success' : '',
          icon,
        ]"
      />
      <span class="ts-confirmdialog-title">{{ header }}</span>
    </template>

    <template #default>
      <ul v-if="lists">
        <li :key="index" v-for="(list, index) in lists">
          {{
            listLabel && typeof list !== 'string'
              ? list[listLabel as keyof typeof list]
              : list
          }}
        </li>
      </ul>

      <slot :items="lists" name="body">
        <p data-test="dialog-body">{{ body }}</p>
      </slot>
    </template>

    <template #footer>
      <slot name="footer">
        <TSButton
          @click="closeDialog"
          data-test="cancel-button"
          label="Cancel"
          text-only
        />
        <TSButton
          :label="confirmLabel"
          :severity="severity"
          @click="confirm"
          data-test="confirm-button"
        />
      </slot>
    </template>
  </Dialog>
</template>

<style lang="scss">
@import './style/TSConfirmDialog.scss';
</style>
