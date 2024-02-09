import { DefineComponent } from 'vue';

/**
 * TSCalendar component props
 */
export interface TSCalendarProps {
  /**
   * TSCalendar modelValue is date timestamp: 1706423635731
   */
  modelValue?: number | number[];
  /**
   * To display the initial date value, used in edit form, taht sometime need to display the already inputed date.
   */
  dateValue?: number | number[];
  /**
   * Display label on top of Date Input.
   */
  label?: string;
  /**
   * Whether single date or date range model value.
   */
  mode?: 'range' | 'single';
  /**
   * Enable Validator using vee-validate. Combine with TSForm that handle form validation.
   */
  useValidator?: boolean;
  /**
   * When used as field in From Validation using TSForm,
   * specify the unique field name, match with your needs for API request.
   */
  fieldName?: string;
  /**
   * Whether this field should be filled or not.
   */
  mandatory?: boolean;
  /**
   * Set the custom validator message.
   * By default each field has preserved with its validator message, you don't need to worrying about the message.
   */
  validatorMessage?: string;
}

/**
 * TSCalendar component emits
 */
export type TSCalendarEmits = {
  'update:modelValue': (date: number | number[]) => void;
};

/**
 * **TSVue - TSCalendar**
 *
 * _Handle input date with form validation._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group form
 */
declare const TSCalendar: DefineComponent<TSCalendarProps, TSCalendarEmits>;

export default TSCalendar;
