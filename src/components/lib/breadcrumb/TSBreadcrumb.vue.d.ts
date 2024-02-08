import { DefineComponent } from 'vue';

export type BreadcrumbMenu = {
  name: string;
  route?: string;
};

export interface TSBreadcrumbProps {
  /**
   * The list of breadcrumb menu to display.
   */
  menus: BreadcrumbMenu[];
}

/**
 * **TSVue - Breadcrumb**
 *
 * _TSBreadcrumb is a component for displaying a breadcrumb trail to help users navigate a website or application.
 * It takes an array of menu items as a prop and displays each item as a link or label, with a separator between them._
 *
 * @group components
 */
declare const TSBreadcrumb: DefineComponent<TSBreadcrumbProps>;

export default TSBreadcrumb;
