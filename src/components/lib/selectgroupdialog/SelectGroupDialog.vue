<!-- eslint-disable vue/html-indent -->
<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import GroupTree from '../grouptree/GroupTree.vue';
import TSButton from '@/components/lib/button/TSButton.vue';
import { TreeSelectionKeys } from 'primevue/tree';

const props = defineProps<{
  show: boolean;
  selectedGroups?: object;
  selectionMode: 'checkbox' | 'single';
  header?: string;
  buttonLabel?: string;
  params?: object;
  readonly?: boolean;
}>();

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'apply', data?: TreeSelectionKeys): void;
  (e: 'keyChange', data?: object): void;
  (e: 'update:show', data: boolean): void;
}>();

const selectedGroupsTemp = ref<TreeSelectionKeys>();

const show = computed({
  get: () => props.show,
  set: (value) => {
    emit('update:show', value);
  },
});

const disableApply = computed(() => {
  return (
    props.selectionMode === 'single' && !Object.keys(selectedGroupsTemp).length
  );
});

watch(
  [(): boolean => props.show, (): object | undefined => props.selectedGroups],
  ([isShow, groupKeys]) => {
    if (isShow) selectedGroupsTemp.value = groupKeys;
  },
);
</script>

<template>
  <div class="select-group-dialog-wrapper">
    <Dialog
      v-model:visible="show"
      :base-z-index="99999999"
      :draggable="false"
      :header="header ?? props.readonly ? 'Selected Group' : 'Select Group'"
      @hide="() => (selectedGroupsTemp = {})"
      @update:visible="!$event && emit('cancel')"
      closable
      modal
      style="width: 400px"
    >
      <GroupTree
        v-model:selected-keys="selectedGroupsTemp"
        :params="props.params"
        :readonly="props.readonly"
        :selection-mode="props.selectionMode"
        @key-change="emit('keyChange', $event)"
        filter-by="name"
        filter-placeholder="Search"
      />
      <template #footer>
        <template v-if="props.readonly">
          <TSButton
            @click="emit('cancel')"
            label="Close"
            severity="secondary"
            text-only
          />
        </template>
        <template v-else>
          <TSButton @click="emit('cancel')" label="Cancel" text-only />
          <TSButton
            :disabled="disableApply"
            :label="buttonLabel ?? 'Apply'"
            @click="emit('apply', selectedGroupsTemp)"
            severity="success"
          />
        </template>
      </template>
    </Dialog>
  </div>
</template>
<style scoped lang="scss">
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 20px;
}

:deep(.p-dialog .p-dialog-header),
:deep(.p-dialog .p-dialog-content) {
  padding-bottom: 0.75rem !important;
}

:deep(.p-dialog .p-dialog-footer) {
  display: flex;
  justify-content: end;
  gap: 8px;

  button {
    margin: 0 !important;
  }
}
</style>
