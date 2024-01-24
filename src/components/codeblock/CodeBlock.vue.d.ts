/**
 * This TypeScript declaration file describes the props for the CodeBlock component.
 * The CodeBlock component is a Vue Single File Component (SFC) that displays code snippets.
 * It accepts a single prop, `lang`, which determines the language of the code snippet.
 * The `lang` prop can be either 'html' or 'ts'.
 */

import { DefineComponent } from 'vue';

export interface CodeBlockProps {
  /**
   * The language of the code snippet.
   * Can be either 'html' or 'ts'.
   */
  lang: 'html' | 'ts';
}

declare const CodeBlock: DefineComponent<CodeBlockProps>;

export default CodeBlock;
