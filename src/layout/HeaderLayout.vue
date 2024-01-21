<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', checkSticky);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkSticky);
});

const isSticky = ref<boolean>(false);

const checkSticky = (): void => {
  isSticky.value = window.scrollY > 0;
};
</script>
<template>
  <header :class="['tsvue-docs-header', { sticky: isSticky }]">
    <div class="header-content">
      <div class="tsvue-logo">
        <img
          alt="Tag Samurai Logo"
          class="logo"
          src="https://assets.tagsamurai.com/img/TS-HEAD-BLACK.svg"
        />
        <h1 class="title">TS<span>Vue</span></h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import 'var';

.tsvue-docs-header {
  display: flex;
  align-items: center;
  transition: all ease-in 0.15s;
  width: 100%;

  .header-content {
    padding: 1rem;
    margin: 0 auto;
    max-width: $content-max-width;
    width: 100%;

    .tsvue-logo {
      display: flex;
      align-items: center;
      gap: 1rem;

      .logo {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
      }

      .title {
        font-size: 1.3rem;
        font-weight: bold;
        margin: 0;
        color: $general-header-weak;

        span {
          color: $success-strong;
          font-weight: 700;
        }
      }
    }
  }
}

.tsvue-docs-header.sticky {
  position: fixed;
  left: 0;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgb(223, 231, 239);
  z-index: 1;
}
</style>
