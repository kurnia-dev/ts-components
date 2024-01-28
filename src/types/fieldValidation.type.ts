/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldContext } from 'vee-validate';
import { Nullable } from 'vitest';
import { Ref } from 'vue';

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
