<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>
<template>
  <small id="dd-error" class="validator-message">{{ message }}</small>
</template>
