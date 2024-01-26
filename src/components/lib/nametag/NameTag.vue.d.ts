import { DefineComponent } from 'vue';

/**
 * Props for NameTag component
 */
export interface NameTagProps {
  /**
   * The name or text to be displayed.
   */
  name: string;
  /**
   * Sets the severity level for styling purposes.
   */
  severity?: 'success' | 'danger' | 'warning' | 'dark' | 'primary';
  /**
   * Determines if the name should be truncated when it exceeds a certain length.
   */
  truncate?: boolean;
  /**
   * Specifies the type for text truncation rules based on the usage context.
   */
  type?: 'user' | 'status';
  /**
   * Whether to show the remove icon or not. Clicking the remove icon will emit 'remove' event.
   */
  removable?: boolean;
}

/**
 * Emits for NameTag component
 */
export type NameTagEmits = {
  remove: [];
};

/**
 * **TSVue - NameTag**
 *
 * _NameTag is a component for displaying a name/text with optional remove functionality._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group components
 */
declare const NameTag: DefineComponent<NameTagProps, NameTagEmits>;

export default NameTag;
