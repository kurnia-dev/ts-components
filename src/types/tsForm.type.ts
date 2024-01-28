export type FormValue =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | Record<string, unknown>
  | Record<string, unknown>[];

export type FormPayload = {
  stayAfterSubmit: boolean;
  formValues: Record<string, FormValue>;
};
