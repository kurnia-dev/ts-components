<script setup lang="ts">
import TSButton from '../button/TSButton.vue';
</script>

<template>
  <p>
    Our TSButton Vue component is a flexible button for any use. It can be
    customized with various styles, outlines, icons, or text to suit different
    needs.
  </p>
  <div class="separator" />
  <h2>Import</h2>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    ><span class="hljs-keyword" style="color: rgb(0, 0, 136);">import</span> { TSButton } from <span class="hljs-string" style="color: rgb(0, 136, 0);">'ts-vue-components'</span>;</pre>
  </div>
  <div class="separator" />
  <h2>Basic</h2>
  <p>Use <code>label</code> property to display text on a button.</p>
  <div class="component-preview">
    <TSButton label="TSButton" />
  </div>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    ><span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> /&gt;</span></pre>
  </div>
  <InlineMessage severity="info">
    Without any defined <code>severity</code> the <b>default</b> style will be
    applied.
  </InlineMessage>
  <div class="separator" />
  <h2>Severity</h2>
  <p>
    The severity attribute sets the type or level of importance associated with
    the button.
  </p>
  <div class="component-preview">
    <TSButton label="TSButton" severity="primary" />
    <TSButton label="TSButton" severity="danger" />
    <TSButton label="TSButton" severity="success" />
  </div>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    ><span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"primary"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"danger"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;</span></pre>
  </div>
  <div class="separator" />
  <h2>Icon</h2>
  <p>
    Specify the button's icon with the <code>icon</code> property and configure
    its position using the <code>iconPos</code> attribute.
  </p>
  <div class="component-preview">
    <TSButton icon="ri-check-line" severity="success" />
    <TSButton icon="ri-check-line" label="Check" severity="success" />
    <TSButton
      icon="ri-check-line"
      icon-pos="right"
      label="Check"
      severity="success"
    />
  </div>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    ><span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">icon</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-check-line"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">icon</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-check-line"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"Check"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">icon</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-check-line"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">icon-pos</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"right"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"Check"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;</span></pre>
  </div>
  <div class="separator" />
  <h2>Outlined</h2>
  <div class="component-preview">
    <TSButton label="TSButton" outlined severity="primary" />
    <TSButton label="TSButton" outlined severity="danger" />
    <TSButton label="TSButton" outlined severity="success" />
  </div>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    ><span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">outlined</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"primary"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">outlined</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"danger"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">outlined</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;</span></pre>
  </div>
  <div class="separator" />
  <h2>Icon Only</h2>
  <p>If the label property not defined, the button will be icon only.</p>
  <div class="component-preview">
    <TSButton icon="ri-check-line" severity="success" />
    <TSButton icon="ri-close-line" severity="danger" />
  </div>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
      "
    ><span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">icon</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-check-line"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="color: rgb(0, 0, 136);">TSButton</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">icon</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-close-line"</span> <span class="hljs-attr" style="color: rgb(102, 0, 102);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"danger"</span> /&gt;</span></pre>
  </div>

  <div class="separator" />
  <h2>Example</h2>
  <div class="component-preview">
    <TSButton label="TSButton" severity="primary" />
    <TSButton label="TSButton" severity="danger" />
    <TSButton label="TSButton" severity="success" />
    <TSButton label="TSButton" outlined severity="primary" />
    <TSButton label="TSButton" outlined severity="danger" />
    <TSButton label="TSButton" outlined severity="success" />
    <TSButton label="TSButton" severity="primary" text-only />
    <TSButton label="TSButton" severity="danger" text-only />
    <TSButton label="TSButton" severity="success" text-only />
    <TSButton label="TSButton" />
    <TSButton icon="ri-check-line" />
    <TSButton icon="ri-check-line" label="Check" />
    <TSButton icon="ri-check-line" icon-pos="right" label="Check" />
    <TSButton icon="ri-file-text-line" />
    <TSButton icon="ri-download-2-line" outlined severity="secondary" />
  </div>
  <div class="code-wrapper">
    <pre
      class="hljs"
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: rgb(0, 0, 0);
      "
    >&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"primary"</span> /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"danger"</span> /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> outlined <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"primary"</span> /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> outlined <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"danger"</span> /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> outlined <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"primary"</span> text-only /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"danger"</span> text-only /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> text-only /&gt;
&lt;TSButton <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"TSButton"</span> /&gt;
&lt;TSButton icon=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-check-line"</span> /&gt;
&lt;TSButton icon=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-check-line"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">label</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"Filter"</span> <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"success"</span> /&gt;
&lt;TSButton icon=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-file-text-line"</span> /&gt;
&lt;TSButton icon=<span class="hljs-string" style="color: rgb(0, 136, 0);">"ri-download-2-line"</span> outlined <span class="hljs-keyword" style="color: rgb(0, 0, 136);">severity</span>=<span class="hljs-string" style="color: rgb(0, 136, 0);">"secondary"</span> /&gt;</pre>
  </div>
  <div class="separator" />
  <h2>Props</h2>
  <ul>
    <li>
      <strong>severity:</strong> Defines the severity of the TSButton. It can be
      'primary', 'danger', 'success', 'secondary', or 'default'.
    </li>
    <li>
      <strong>icon:</strong> If provided, the TSButton will display an icon. The
      value should be a class that applies the icon, such as classes from Font
      Awesome.
    </li>
    <li>
      <strong>label:</strong> The text to display on the TSButton. If not
      provided, the TSButton will be an icon-only TSButton.
    </li>
  </ul>
  <div class="separator" />
  <h2>Events</h2>
  <p>
    <strong>click:</strong> Emitted when the TSButton is clicked. The event
    object is a TSButtonEvent, which is a MouseEvent with the currentTarget
    typed as HTMLTSButtonElement.
  </p>
  <div class="separator" />
  <h2>Slots</h2>
  <h3>default</h3>
  <p>
    The default slot can be used to add additional content inside the TSButton.
    This content will be placed after the label (if provided).
  </p>
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
