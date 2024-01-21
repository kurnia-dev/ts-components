<script setup lang="ts"></script>

<template>
  <h2>Usage</h2>
  <p>
    The TSButton component is a versatile button component for Vue 3
    applications. It supports different severities, can be outlined, and can
    contain an icon and/or text.
  </p>

  <h2>Code Example</h2>
  <pre>
    <code>
      &lt;TSButton severity="primary" icon="ri-check-line" label="Confirm" /&gt;
    </code>
  </pre>

  <h2>Props</h2>
  <ul>
    <li>
      <strong>severity:</strong> Defines the severity of the button. It can be
      'primary', 'danger', 'success', 'secondary', or 'default'.
    </li>
    <li>
      <strong>icon:</strong> If provided, the button will display an icon. The
      value should be a class that applies the icon, such as classes from Font
      Awesome.
    </li>
    <li>
      <strong>label:</strong> The text to display on the button. If not
      provided, the button will be an icon-only button.
    </li>
  </ul>

  <h2>Events</h2>
  <p>
    <strong>click:</strong> Emitted when the button is clicked. The event object
    is a ButtonEvent, which is a MouseEvent with the currentTarget typed as
    HTMLButtonElement.
  </p>

  <h2>Styles</h2>
  <p>
    The component's styles are defined in the TSButton.scss file, which is
    imported in the component. The styles include classes for the different
    severities, as well as classes for outlined buttons, text-only buttons,
    icon-only buttons, and buttons with the icon on the right.
  </p>

  <h2>Slots</h2>
  <p>
    <strong>default:</strong> The default slot can be used to add additional
    content inside the button. This content will be placed after the label (if
    provided).
  </p>

  <h2>Computed Properties</h2>
  <ul>
    <li>
      <strong>iconOnly:</strong> A boolean indicating whether the button is an
      icon-only button. This is true if an icon is provided and a label is not.
    </li>
    <li>
      <strong>severityClass:</strong> The class to apply based on the severity
      prop. This is computed based on the value of the severity prop.
    </li>
  </ul>

  <h2>Methods</h2>
  <p>
    <strong>createRipple:</strong> This method creates a ripple effect when the
    button is clicked. It is called when the button is clicked, and it creates a
    span element with the appropriate styles and adds it to the button.
  </p>
</template>
