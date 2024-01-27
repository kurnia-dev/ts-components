<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import { isObjectEmpty } from '@/utils';
import SelectGroupDialog from '../selectgroupdialog/SelectGroupDialog.vue';
import TSButton from '@/components/lib/button/TSButton.vue';
import NameContainer from '../namecontainer/NameContainer.vue';
import { TreeNode } from 'primevue/tree';
import { SelectGroupProps, SelectGroupEmits } from './SelectGroup.vue.d';

const props = defineProps<SelectGroupProps>();

const emit = defineEmits<SelectGroupEmits>();

/*
 * 'update:checkboxValue': [nodes: TreeNode[]];
 */

const showSelectGroupDialog = ref(false);
const showExceededLabel = ref(false);
const groupTemp = ref<object | undefined>({});
const singleSelectedGroupTemp = ref<TreeNode>();
const singleSelectedGroupName = computed(() => {
  return props.singleValue?.name;
});

const groupKeysCount = computed(() => props.groupKeys?.length);
const buttonLabel = computed(() => {
  if (groupKeysCount.value) {
    return `${groupKeysCount.value} Group(s) Selected`;
  }

  return 'Select Group';
});

const filterSelectedTreeKeys = (keys: any): number[] => {
  if (props.selectionMode === 'single')
    return Object.keys(keys).map((key: string) => Number(key));

  const formatted = Object.entries(keys);
  const filtered = formatted
    .filter((data: any) => data[1].checked && !data[1].partialChecked)
    .map((data) => parseInt(data[0]));
  return filtered;
};

const onNodeClick = (data?: TreeNode): void => {
  singleSelectedGroupTemp.value = data;
};

const showGroupDialog = (): void => {
  showSelectGroupDialog.value = true;
};

const setSelectedGroup = (nodes?: TreeNode | TreeNode[]): void => {
  const singleGroup = singleSelectedGroupTemp.value;

  if (props.selectionMode === 'single' && !Array.isArray(singleGroup)) {
    if (singleGroup?.name === 'All') {
      emit('update:singleValue', singleGroup.children?.[0]);
    } else {
      emit('update:singleValue', singleGroup);
    }
  } else {
    const keys = filterSelectedTreeKeys(nodes);
    groupTemp.value = nodes;
    emit('update:groupKeys', keys);
  }

  emit('update:showDialog', false);
  emit('apply');
  showSelectGroupDialog.value = false;
};
</script>

<template>
  <template v-if="!props.hideButton">
    <div :class="{ field_wrapper: label }">
      <label v-if="label">
        {{ label }}
        <span v-if="mandatory" class="text-danger">*</span>
      </label>
      <template v-if="props.selectionMode === 'single'">
        <TSButton
          v-if="isObjectEmpty(singleValue ?? {})"
          :class="buttonClass"
          :disabled="disabled"
          :label="buttonLabel"
          :style="buttonStyle"
          @click="showGroupDialog"
          severity="primary"
          type="button"
        />
        <!-- Showing Single Selected Group Name -->
        <div v-else class="selected-group-name">
          <NameContainer :name="singleSelectedGroupName" />
          <Button
            :disabled="disabled"
            @click="showGroupDialog"
            class="edit-group"
            rounded
            severity="primary"
            text
            type="button"
          >
            <i class="ri-edit-2-line" />
          </Button>
          <span v-if="showExceededLabel" class="ms-1 text-danger">
            Group Quota Exceeded
          </span>
        </div>
      </template>
      <TSButton
        v-else
        :class="buttonClass"
        :disabled="disabled"
        :label="buttonLabel"
        @click="showGroupDialog"
        class="d-block w-100"
        severity="primary"
        type="button"
      />
    </div>
  </template>
  <SelectGroupDialog
    :button-label="dialogFooterButtonLabel"
    :header="dialogHeader"
    :params="props.params"
    :readonly="props.readonly"
    :selected-groups="
      props.selectionMode === 'checkbox' ? groupTemp : singleValue
    "
    :selection-mode="props.selectionMode"
    :show="showSelectGroupDialog"
    @apply="setSelectedGroup"
    @cancel="() => (showSelectGroupDialog = false)"
    @key-change="onNodeClick"
  />
</template>
<style scoped lang="scss">
.p-button-rounded.edit-group {
  padding: 2px;
  border-radius: 50%;
  height: 1.2rem;
  width: 1.2rem;

  .ri-edit-2-line {
    font-size: 0.925rem;
  }
}

.selected-group-name {
  display: flex;
  align-items: center;
  gap: 4px;
}

.field_wrapper {
  .ts-button {
    width: 100% !important;
  }
}
</style>
../nametag/NameContainer.vue
