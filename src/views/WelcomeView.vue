<script setup lang="ts">
import TSButton from '@/components/lib/button/TSButton.vue';
</script>
<template>
  <div class="welcome-page">
    <div class="welcome-message">
      <img
        alt="Tag Samurai Logo"
        class="ts-logo"
        src="https://assets.tagsamurai.com/img/TS-HEAD-BLACK.svg"
      />
      <h1>Welcome to Tag Samurai's Vue Component Library</h1>
      <p>
        Explore our Vue component documentation for clear and easy-to-follow
        usage guides. Learn how to leverage these components to build web
        applications that meet your specific needs.
      </p>

      <router-link aria-label="Explore Components" to="/button">
        <TSButton
          data-test="explore-button"
          icon="ri-arrow-right-line"
          icon-pos="right"
          label="Explore Components"
          severity="success"
        />
      </router-link>
    </div>
    <img
      alt="Vue Typescript Logo"
      class="vue-ts-logo"
      src="https://vue.gallerycdn.vsassets.io/extensions/vue/vscode-typescript-vue-plugin/1.8.27/1703585942757/Microsoft.VisualStudio.Services.Icons.Default"
    />
  </div>
</template>

<style lang="scss">
@import 'var';

.welcome-page {
  display: flex;
  gap: 10%;
  width: 100%;
  margin: auto;
  padding: 32px;
  max-width: 1080px;
  transition: opacity 0.5s ease-in-out;

  .ts-logo {
    width: 140px;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  .vue-ts-logo {
    width: 25vw;
    height: auto;
    object-fit: contain;
    aspect-ratio: 1/1;
    max-width: 360px;
  }

  button.ts-button {
    scale: 2;
    transform-origin: left;
    align-items: baseline;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>
