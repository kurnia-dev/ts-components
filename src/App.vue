<script setup lang="ts"></script>
<template>
  <router-view />
</template>

<style lang="scss">
@import 'var';
@import 'rfs/scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background: $general-bg-white !important;
  color: $general-body !important;
}

*:focus {
  box-shadow: none !important;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 20px;
}

.p-dialog .p-dialog-header,
.p-dialog .p-dialog-content {
  padding-bottom: 0.75rem !important;
}

.p-dialog .p-dialog-footer {
  display: flex;
  justify-content: end;
  gap: 8px;

  button {
    margin: 0 !important;
  }
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
  @include padding(11.2px 8px !important);
  border-width: 0 0 2px 0 !important;
  text-decoration: none;
  height: 35.4px;

  .p-menuitem-text {
    @include font-size(11.2px);
    font-weight: 500;
    color: $general-placeholder;
    width: max-content;
  }
}

.p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {
  box-shadow: none;
}

.p-tabmenu .p-tabmenu-nav,
.p-tabmenuitem .p-menuitem-link {
  height: 35.4px;
  border-width: 0 0 2px 0 !important;
  color: $general-placeholder;
}

.p-tabmenuitem.p-highlight .p-menuitem-text {
  color: $primary !important;
}

.row {
  gap: 1rem !important;
}

.row > * {
  padding: 0;
}

.field_wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  justify-content: start;
  position: relative;

  .input_wrapper {
    width: 100%;
    position: relative;
  }

  label {
    color: $dark;
    text-transform: capitalize;

    font-size: 11.2px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.8px;
  }

  .text-left {
    text-align: left;
  }
}

.validator-message {
  color: $danger;
  font-weight: 300;
  width: 100%;
  text-align: right;
  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  @include font-size(11.2px);
}

.ts-rfid-button,
.ts-qr-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @include padding(7.6px 12px !important);
  gap: 4px;

  background-color: $primary-bg;
  color: $primary-color;
  border-radius: 4px;

  @include font-size(9px !important);
  @include rfs(10.8px !important, line-height);

  font-weight: 500;

  .ts-button-icon {
    @include font-size(8px);
    width: 9px;
    height: 9px;
  }

  .indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 0.5px solid white;
    position: absolute;
    left: 2px;
    top: 2px;
  }
}

.p-card {
  background: $general-bg-white !important;
  box-shadow: none !important;

  .p-card-body {
    @include padding(12px 24px);
    border-radius: 8px;
  }

  .p-card-content {
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
.ts-inputtext {
  height: 26px;
  @include font-size(11.2px !important);
  line-height: 1;
}

.p-inputtext {
  color: $general-body !important;
  border-radius: 4px !important;
}

.ts-inputtext,
.ts-textarea {
  color: $general-body !important;
  border-radius: 4px;
  border: 1px solid !important;
  background: $general-bg-white;
}

.ts-inputtext.p-inputtext.p-component::placeholder {
  color: $general-placeholder !important;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 300;
  opacity: 1;
}

.ts-textarea {
  height: unset;
  min-height: 70px;
  @include rfs(8px 12px, padding);
}

.p-checkbox .p-checkbox-box {
  width: 12.8px !important;
  height: 12.8px !important;
  border-radius: 4px !important;
  border: 2px solid $general-line !important;
  background: $general-bg-white !important;
}

.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
  box-shadow: 0 0 0 1px $primary-weak !important;
}

.p-checkbox .p-checkbox-box.p-highlight {
  border: none !important;
  background: $primary !important;

  .p-checkbox-icon {
    transition: 0.1s;
    color: $general-bg-white;
    width: 10px !important;
    height: 10px !important;
    position: absolute;
    top: 48%;
    transform: translate(0, -50%);
  }
}

.p-multiselect-filter,
.p-dropdown-filter {
  border-radius: 6px;
  border: 1px solid $general-body !important;
  background: $general-bg-white;
  height: 32px !important;

  .p-multiselect-filter-icon,
  .p-dropdown-filter-icon {
    width: 12px !important;
    height: 12px !important;
    top: 50% !important;
    margin-top: 0 !important;
    font-size: 12px;
    transform: translateY(-50%);
  }
}

.p-dialog {
  height: max-content !important;
  max-height: 90vh !important;
}

.bg-primary-weak {
  background: $primary-weak;
}

.bg-success-weak {
  background: $success-weak;
}

.bg-danger-weak {
  background: $danger-weak;
}

.bg-warning-weak {
  background: $warning-weak;
}

.bg-dark-weak {
  background: $dark-weak;
}

.text-warning {
  color: #b99000 !important;
}

.text-success {
  color: $success !important;
}

.text-primary {
  color: $primary !important;
}

.text-dark {
  color: $dark !important;
}

.text-danger {
  color: $danger !important;
}

.fs-body {
  @include font-size(11.2px !important);
}

.w-full {
  width: 100% !important;
}
</style>
