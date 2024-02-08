import { DefineComponent } from 'vue';

/**
 * TSInputText component props
 */
export interface TSInputTextProps {
  modelValue?: string;
  label?: string;
  fieldName?: string;
  mandatory?: boolean;
  useValidator?: boolean;
  validatorMessage?: string;
  placeholder?: string;
  type?: 'email' | 'text';
  disabled?: boolean;
}

/**
 * TSInputText component emits
 */
export type TSInputTextEmits = {
  'update:modelValue': [payload?: string];
};

/**
 * TSInputText component
 */
/**
 * **TSVue - InputText**
 *
 * _Handle input text with form validation._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group form
 */
declare const TSInputText: DefineComponent<TSInputTextProps, TSInputTextEmits>;

export default TSInputText;
