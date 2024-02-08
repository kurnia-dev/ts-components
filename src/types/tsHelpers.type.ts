/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AllowedComponentProps,
  ObjectEmitsOptions,
  VNode,
  VNodeProps,
} from 'vue';

declare type PublicProps = VNodeProps & AllowedComponentProps;

declare type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

declare type EmitFn<
  Options = ObjectEmitsOptions,
  Event extends keyof Options = keyof Options,
> =
  Options extends Array<infer V>
    ? (event: V, ...args: any[]) => void
    : object extends Options
      ? (event: string, ...args: any[]) => void
      : UnionToIntersection<
          {
            [key in Event]: Options[key] extends (...args: infer Args) => any
              ? (event: key, ...args: Args) => void
              : (event: key, ...args: any[]) => void;
          }[Event]
        >;

export class ClassComponent<Props, Slots, Emits> {
  $props: (Props & PublicProps) | undefined;
  $slots: Slots | undefined;
  $emit: EmitFn<Emits> | undefined;
}

export type GlobalComponentConstructor<T> = new () => T;

/**
 * Custom types
 */
export declare type Booleanish = boolean | 'true' | 'false';

export declare type Numberish = number | string;

export declare type Nullable<T = void> = T | null | undefined;

export declare type DefaultPTOptions<T = void> =
  | T
  | ((instance?: VNode) => T | undefined)
  | undefined;
