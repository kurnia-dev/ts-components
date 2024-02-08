import { DefineComponent } from 'vue';

/**
 * Props for the DateText component.
 */
export interface DateTextProps {
  /**
   * The date to be displayed. Can be a Date object or a string in a recognized date format.
   */
  date: Date | string;
  /**
   * Whether to include the time in the formatted date string. Defaults to false.
   */
  useTime?: boolean;
}

/**
 * **TSVue - DateText**
 *
 * _A component that displays a formatted date string based on general settings._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group common
 */
declare const DateText: DefineComponent<DateTextProps>;

export default DateText;
