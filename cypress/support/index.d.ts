/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to mount a Vue component in a Cypress test.
     * @example cy.mount(MyComponent)
     */
    mount(component: any, options?: any): Chainable;
  }
}
