import { ButtonHTMLAttributes, VNode } from 'vue';

/**
 * Button component props
 */
interface ButtonProps extends ButtonHTMLAttributes {
  /**
   * Text to display on the button
   */
  label?: string | ((...args: unknown[]) => string);
  /**
   * Severity level of the button
   *
   * If not specified, severity 'default' will be applied.
   */
  severity?: 'primary' | 'danger' | 'success' | 'secondary';
  /**
   * Whether the button should be outlined
   */
  outlined?: boolean;
  /**
   * Whether the button should only display text
   */
  textOnly?: boolean;
  /**
   * Name of the icon to display on the button
   */
  icon?: string;
  /**
   * Position of the icon relative to the text
   */
  iconPos?: 'left' | 'right';
}

/**
 * Button component slots
 */
interface ButtonSlots {
  /**
   * Default slot for custom content
   */
  default: () => VNode[];
}

/**
 * Button component emits
 */
interface ButtonEmits {
  /**
   * Click event for the button
   * @param event - The click event
   */
  click: (event: MouseEvent & { currentTarget: HTMLButtonElement }) => void;
}

/**
 * Button component
 */
declare const Button: import('vue').DefineComponent<
  ButtonProps,
  ButtonEmits,
  ButtonSlots
>;

export default Button;
