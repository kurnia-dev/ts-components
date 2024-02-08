import { DefineComponent, Slot } from 'vue';

type ConfirmDialogSeverity = 'success' | 'danger';

/**
 * Props for TSConfirmDialog component
 */
export interface TSConfirmDialogProps {
  /**
   * The header of the dialog.
   */
  header: string;
  /**
   * The severity of the dialog.
   */
  severity: ConfirmDialogSeverity;
  /**
   * The label of the confirm button.
   * @default 'Yes, Continue'
   */
  confirmLabel?: string;
  /**
   * The icon of the dialog.
   */
  icon?: string;
  /**
   * The lists to be displayed in the dialog.
   */
  lists?: (string | object)[];
  /**
   * The label of the list if your list item is an object.
   * Choose a property from the item to be displayed on the list.
   */
  listLabel?: string;
  /**
   * The body of the dialog.
   * @default 'Are you sure want to continue?'
   */
  body?: string;
  /**
   * Determines if the dialog should close after confirm.
   * @default true
   */
  closeAfterConfirm?: boolean;
  /**
   * Determines if the dialog is closable. Set to false to hide the close button.
   * @default true
   */
  closable?: boolean;
}

/**
 * Slots for TSConfirmDialog component
 */
export interface TSConfirmDialogSlots {
  /**
   * The body slot for the dialog. Here is where you can put your dialog body.
   */
  body: Slot;
  /**
   * The footer slot for the dialog. Here is where you can put your dialog footer.
   * Use this slot if you need to custom the dialog buttons.
   */
  footer: Slot;
}

/**
 * Emits for TSConfirmDialog component
 */
export type TSConfirmDialogEmits = {
  /**
   * Emits when Confirm button clicked.
   */
  'confirm': [];
  /**
   * Emits when the dialog is closed. Wether from cancel button, close button, or ESC button pressed.
   */
  'update:visible': [state: boolean];
};

/**
 * **TSVue - TSConfirmDialog**
 *
 * _TSConfirmDialog is a component for creating confirmation dialogs._
 *
 * --- ---
 * ![TSVue](https://ik.imagekit.io/kurniadev/TS-HEAD-BLACK.png)
 *
 * @group components
 */
declare const TSConfirmDialog: DefineComponent<
  TSConfirmDialogProps,
  TSConfirmDialogSlots,
  TSConfirmDialogEmits
>;

export default TSConfirmDialog;
