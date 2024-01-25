import { CSSProperties } from 'vue';
import { TreeNode } from 'primevue/tree';

/**
 * SelectGroup component props
 */
export interface SelectGroupProps {
  /**
   * Array of group keys
   */
  groupKeys?: number[];
  /**
   * Single selected tree node
   */
  singleValue?: TreeNode;
  /**
   * The Tree selection mode, can be 'checkbox' or 'single'
   */
  selectionMode: 'checkbox' | 'single';
  /**
   * Custom label for the Apply button in the dialog footer.
   * The `dialogFooterButtonLabel` prop allows you to set a custom label for the Apply button in the dialog footer.
   *
   * @default 'Apply'
   *
   * @example
   * // To set a custom label for the Apply button
   * <SelectGroup dialog-footer-button-label="Select" />
   */
  dialogFooterButtonLabel?: string;
  /**
   * Stylesheet for the default SelectGroup Button.
   *
   * @example
   * // When a string is passed, it should be a valid CSS style declaration.
   * <SelectGroup buttonStyle="color: red">Button</SelectGroup>
   *
   * @example
   * // When a CSSProperties object is passed, it should be a valid JavaScript object with key-value pairs representing CSS properties and their values.
   * <SelectGroup :buttonStyle="{ color: red }">Button</SelectGroup>
   */
  buttonStyle?: string | CSSProperties;
  /**
   * Set the custom dialog header.
   */
  dialogHeader?: string;
  /**
   * Class for the button, can be a string, array of strings, or an object.
   *
   * @description
   * Defines the type for `buttonClass` which can be used with the `:class` directive in Vue.js.
   *
   * This type allows for the following usage:
   *
   * - String: `buttonClass="my-button"`
   * - Array: `buttonClass="['my-button', 'another-button']"`
   * - Object: `buttonClass="{ 'my-button': true, 'another-button': false }"`
   * - Object in Array: `buttonClass="['my-button', { 'another-button': isTrue }]"`
   *
   */
  buttonClass?: string | Array<string> | Record<string, boolean>;
  /**
   * Parameters to determine the data shown based on user roles
   */
  params?: object;
  /**
   * Boolean to hide the default button 'Select Group'
   */
  hideButton?: boolean;
  /**
   * Boolean to control the show dialog without clicking the button
   */
  showDialog?: boolean;
  /**
   * Boolean to set the tree selection as readonly
   */
  readonly?: boolean;
  /**
   * Boolean to disable the button SelectGroup
   */
  disabled?: boolean;
  /**
   * When used in form, set the prop `label` the define field label.
   */
  label?: string;
  /**
   * Wether the field group should be filled or not.
   */
  mandatory?: string;
}

/**
 * SelectGroup component emits
 */
export type SelectGroupEmits = {
  /**
   * Event emitted when group keys are updated
   */
  'update:groupKeys': [keys: number | number[]];
  /**
   * Event emitted when a single value is updated
   */
  'update:singleValue': [node?: TreeNode];
  /**
   * Event emitted when the dialog show state is updated
   */
  'update:showDialog': [state: boolean];
  /**
   * Event emitted when the apply button is clicked
   */
  'apply': [];
};

/**
 * **TSVue - SelectGroup**
 *
 * _SelectGroup is a component that allows the user to select a group from a tree structure._
 *
 * --- ---
 * ![Company Logo](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group components
 */
declare const SelectGroup: import('vue').DefineComponent<
  SelectGroupProps,
  SelectGroupEmits
>;

export default SelectGroup;
