<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

type TOCItem = {
  id: string;
  text: string | null;
  tagName: string;
};

const toc = ref<TOCItem[]>([]);

onMounted(async () => {
  const main = document.querySelector('main') as HTMLElement;
  const headings = main?.querySelectorAll('h1, h2, h3, h4, h5, h6') ?? [];

  headings.forEach((heading) => {
    heading.setAttribute(
      'id',
      heading.textContent?.toLowerCase().replace(/ /g, '-') ?? '',
    );
  });

  toc.value = Array.from(headings).map((heading) => ({
    id: heading.id,
    text: heading.textContent,
    tagName: heading.tagName,
  }));

  await nextTick();

  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    scrollTo(id);
  }
});

const scrollTo = (id: string): void => {
  const heading = document.getElementById(id) as HTMLHeadingElement;
  if (heading) {
    const top = heading.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
    window.location.hash = id;
  }
};
</script>

<template>
  <aside class="tsvue-docs-sidebar-right">
    <div class="aside-content">
      <span class="toc-header">{{ toc[0]?.text }}</span>
      <ul class="toc-list">
        <li :key="item.id" v-for="item in toc.slice(1)" class="toc-list-item">
          <a
            :class="[item.tagName, 'toc-list-item-link']"
            @click="scrollTo(item.id)"
            aria-label="item.text"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
<style lang="scss">
@import 'var';

.tsvue-docs-sidebar-right {
  font-size: 0.925rem;
  font-weight: 400;
  color: $general-body;

  .toc-header {
    font-weight: 600;
  }

  .toc-list-item {
    padding: 0.25rem;
    cursor: pointer;
    list-style: none;

    a.toc-list-item-link {
      padding: 0.125rem 0.525rem;
      border-radius: 2px;
    }

    &:hover {
      a.toc-list-item-link {
        background-color: hsla(160, 100%, 37%, 0.2);
      }
    }
  }
}
</style>
