import { DefineComponent, Ref } from 'vue';
import { FieldContext } from 'vee-validate';

type FieldValue =
  | Nullable<string>
  | Nullable<number>
  | string
  | string[]
  | number
  | number[]
  | boolean
  | undefined
  | null
  | object;

export type FieldValidation =
  | { value?: FieldValue; errorMessage?: Ref<string | undefined> }
  | FieldContext;

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
}

/**
 * TSInputText component emits
 */
export interface TSInputTextEmits {
  'update:modelValue': (value?: string) => void;
}

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
