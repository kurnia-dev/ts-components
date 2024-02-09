import { DefineComponent } from 'vue';

/**
 * TSInputEmail component props
 */
export interface TSInputEmailProps {
  /**
   * Model value for the input field
   */
  modelValue?: string;

  /**
   * Label for the input field
   */
  label?: string;

  /**
   * Field name for the input field
   */
  fieldName?: string;

  /**
   * Determines if the field is mandatory
   */
  mandatory?: boolean;

  /**
   * Determines if the field uses a validator
   */
  useValidator?: boolean;

  /**
   * Validator message for the input field
   */
  validatorMessage?: string;

  /**
   * Placeholder for the input field
   */
  placeholder?: string;

  /**
   * Determines if the input field is disabled
   */
  disabled?: boolean;
}

/**
 * TSInputEmail component emits
 */
export type TSInputEmailEmits = {
  /**
   * Event emitted when the model value is updated
   */
  'update:modelValue': [payload?: string];
};
/**
 * **TSVue - InputEmail**
 *
 * _Handle input email with form validation._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group form
 */
declare const TSInputEmail: DefineComponent<
  TSInputEmailProps,
  TSInputEmailEmits
>;

export default TSInputEmail;
