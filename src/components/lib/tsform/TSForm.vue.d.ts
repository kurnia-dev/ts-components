import { DefineComponent, Slot } from 'vue';

/**
 * Props for TSForm component
 */
export interface TSFormProps {
  /**
   * The number of columns per row.
   */
  columnPerRow?: number;
  /**
   * The template for form buttons.
   */
  buttonsTemplate?: (
    | 'clear'
    | 'submit'
    | 'save'
    | 'save-outlined'
    | 'cancel'
  )[];
  /**
   * Determines if the stay checkbox should be hidden.
   */
  hideStayCheckbox?: boolean;
  /**
   * Determines if the buttons should be sticky.
   */
  stickyButtons?: boolean;
}

/**
 * Slots for TSForm component
 */
export interface TSFormSlots {
  /**
   * The fields slot for the form. Here is where you can put your form fields.
   */
  fields: Slot;
}

/**
 * Emits for TSForm component
 */
export type TSFormEmits = {
  submit: [values: FormPayload];
  save: [values: FormPayload];
  clear: [];
  cancel: [];
};

/**
 * **TSVue - TSForm**
 *
 * _TSForm is a component for creating forms with validation on submit using vee-validate.
 * You need to install vee-validate while using this component._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group components
 */
declare const TSForm: DefineComponent<TSFormProps, TSFormSlots, TSFormEmits>;

export default TSForm;
