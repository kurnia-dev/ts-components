<script setup lang="ts"></script>
<template>
  <router-view />
</template>

<style lang="scss">
@import 'var';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background: $canvas !important;
  color: $general-body;
}
</style>
