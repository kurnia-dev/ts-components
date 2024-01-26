<script setup lang="ts">
import CodeBlock from '@/components/codeblock/CodeBlock.vue';
import NameTag from '../lib/nametag/NameTag.vue';
const alertRemove = (): void => alert('Remove clicked!');
</script>

<template>
  <p>
    The NameTag component is a versatile component for displaying a name or text
    with optional remove functionality.
  </p>
  <p>
    It can be customized with various severity levels for styling purposes, and
    the text can be truncated based on the usage context.
  </p>
  <div class="separator" />
  <h2>Import</h2>
  <CodeBlock lang="ts">
    <code>import { NameTag } from 'ts-vue-components'</code>
  </CodeBlock>

  <div class="separator" />
  <h2>Props</h2>

  <h3>Name</h3>
  <p>The name attribute sets the name or text to be displayed.</p>
  <div class="component-preview">
    <NameTag name="John Doe" />
  </div>
  <CodeBlock lang="html">
    <code>&lt;NameTag name="John Doe" /&gt;</code>
  </CodeBlock>

  <div class="separator" />
  <h3>Severity</h3>
  <p>
    The severity attribute sets the severity level for styling purposes. Options
    include <code>success</code>, <code>danger</code>, <code>warning</code>,
    <code>dark</code>, and <code>primary</code>.
  </p>
  <div class="component-preview">
    <NameTag name="Success" severity="success" />
    <NameTag name="Danger" severity="danger" />
    <NameTag name="Warning" severity="warning" />
    <NameTag name="Dark" severity="dark" />
    <NameTag name="Primary" severity="primary" />
  </div>
  <CodeBlock lang="html">
    <code>&lt;NameTag name="John Doe" severity="danger" /&gt;</code>
    <code>&lt;NameTag name="Success" severity="success" /&gt;</code>
    <code>&lt;NameTag name="Danger" severity="danger" /&gt;</code>
    <code>&lt;NameTag name="Warning" severity="warning" /&gt;</code>
    <code>&lt;NameTag name="Dark" severity="dark" /&gt;</code>
    <code>&lt;NameTag name="Primary" severity="primary" /&gt;</code>
  </CodeBlock>

  <div class="separator" />
  <h3>Truncate</h3>
  <p>
    The truncate attribute determines if the name should be truncated when it
    exceeds a certain length.
  </p>
  <div class="component-preview">
    <NameTag name="Johnathan Edward" truncate />
  </div>
  <CodeBlock lang="html">
    <code>&lt;NameTag name="Johnathan Edward" truncate /&gt;</code>
  </CodeBlock>

  <div class="separator" />
  <h3>Type</h3>
  <p>
    The type attribute specifies the type for text truncation rules based on the
    usage context. Options include `user` and `status`. The default severity is
    `primary`.
  </p>
  <div class="component-preview">
    <NameTag name="Johnathan Edward" type="user" />
    <NameTag name="Johnathanedward" type="user" />
    <NameTag name="Under Maintenance" type="status" />
  </div>
  <CodeBlock lang="html">
    <code>&lt;NameTag name="Johnathan Edward" type="user" /&gt;</code>
    <code>&lt;NameTag name="Johnathanedward" type="user" /&gt;</code>
    <code>&lt;NameTag name="Under Maintenance" type="status"/&gt; </code>
  </CodeBlock>

  <div class="separator" />
  <h3>Removable</h3>
  <p>
    The removable attribute determines whether to show the remove icon or not.
    Clicking the remove icon will emit 'remove' event.
  </p>
  <div class="component-preview">
    <NameTag @remove="alertRemove" name="John Doe" removable />
  </div>
  <CodeBlock lang="html">
    <code>
      &lt;NameTag @remove="alertRemove" name="John Doe" removable /&gt;
    </code>
  </CodeBlock>

  <div class="separator" />
  <h2>Emits</h2>

  <h3>Remove</h3>
  <p>The remove event is emitted when the remove icon is clicked.</p>
  <div class="component-preview">
    <NameTag @remove="alertRemove" name="John Doe" removable />
  </div>
  <CodeBlock lang="html">
    <code>
      &lt;NameTag @remove="alertRemove" name="John Doe" removable /&gt;
    </code>
  </CodeBlock>
</template>

<style lang="scss">
.component-preview {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  background: white;
  border: 1px solid rgb(223, 231, 239);
  border-radius: 4px;
  padding: 1rem;
}
</style>
