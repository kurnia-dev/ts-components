<script setup lang="ts">
import { ref } from 'vue';

const websiteUrl = ref('www.tagsamurai.com');
</script>

<template>
  <footer class="tsvue-docs-footer">
    <div class="footer-content">
      <p>
        <span>TSVue Components</span> - Build With Vite Vue TypeScript by Tag
        Samurai
        <a :href="`http://${websiteUrl}`" class="footer-website-link">{{
          websiteUrl
        }}</a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
@import 'var';

footer.tsvue-docs-footer {
  padding: 1rem;
  border-top: 1px solid rgb(223, 231, 239);
  margin-top: auto;

  .footer-content {
    max-width: $content-max-width;
    margin: 0 auto;

    p {
      color: $general-body;
      margin: 10px 0;

      span {
        font-weight: 600;
      }

      a.footer-website-link {
        text-decoration: none;
      }

      a.footer-website-link:hover {
        background-color: none !important;
      }
    }
  }
}
</style>
