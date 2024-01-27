<script setup lang="ts">
import FilterContainer from '../lib/filtercontainer/FilterContainer.vue';
import TSInputText from '../lib/inputtext/TSInputText.vue';
</script>
<template>
  <p>
    FilterContainer is a component for generating a dynamic grid-based layout
    for any count of filter fields. It calculates the number of children in the
    container and sets their grid area style dynamically.
  </p>
  <p>
    The grid layout is determined by the row and column position, which are
    incremented based on the child count. If the child count is odd and the
    child is the last one (which is Buttons Action), it is placed in the 4th
    column.
  </p>

  <div class="separator" />

  <h2>Import</h2>
  <CodeBlock lang="ts">
    <code> import { FilterContainer } from 'ts-vue-components' </code>
  </CodeBlock>

  <div class="separator" />

  <h2>Props</h2>
  <p>This component does not accept any props.</p>

  <div class="separator" />

  <h2>Emits</h2>
  <h3>apply</h3>
  <p>The apply event is emitted when the Apply button is clicked.</p>

  <div class="separator" />

  <h3>clear</h3>
  <p>The clear event is emitted when the Clear Field button is clicked.</p>

  <div class="separator" />

  <h2>Slots</h2>
  <h3>content</h3>
  <p>The content slot is where you can insert the filter fields.</p>

  <div class="separator" />

  <h2>Usage</h2>
  <div class="code-preview">
    <FilterContainer
      @apply="console.log('Aplly Filter')"
      @clear="console.log('Clear Filter')"
    >
      <TSInputText label="Field" placeholder="Type something" />
    </FilterContainer>
  </div>
  <CodeBlock lang="html">
    <code>
      &lt;FilterContainer @apply="applyFilters" @clear="clearFilters"&gt;
    </code>
    <code>&lt;!-- Insert filter fields here --&gt;</code>
    <code>
      &lt;TSInputText label="Field" placeholder="Type something" /&gt;
    </code>
    <code>&lt;/FilterContainer&gt;</code>
  </CodeBlock>
</template>
