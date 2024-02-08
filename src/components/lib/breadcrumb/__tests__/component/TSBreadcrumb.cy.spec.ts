/// <reference types="cypress" />
import TSBreadcrumb from '../../TSBreadcrumb.vue';

describe('TSBreadcrumb', () => {
  beforeEach(() => {
    cy.viewport(760, 480);
  });

  it('renders correctly with no menus', () => {
    cy.mount(TSBreadcrumb, {
      props: {
        menus: [],
      },
    });

    cy.get('.breadcrumb').should('exist');
    cy.get('.breadcrumb-label').should('not.exist');
    cy.get('.breadcrumb-separator').should('not.exist');
  });

  it('renders correctly with one menu', () => {
    cy.mount(TSBreadcrumb, {
      props: {
        menus: [
          {
            name: 'Home',
            route: '/',
          },
        ],
      },
    });

    cy.get('.breadcrumb').should('exist');
    cy.get('.breadcrumb-label').should('have.length', 1);
    cy.get('.breadcrumb-separator').should('not.exist');
    cy.contains('.breadcrumb-label', 'Home');
  });

  it('renders correctly with multiple menus', () => {
    cy.mount(TSBreadcrumb, {
      props: {
        menus: [
          {
            name: 'Home',
            route: '/',
          },
          {
            name: 'Products',
            route: '/products',
          },
          {
            name: 'Product 1',
          },
        ],
      },
    });

    cy.get('.breadcrumb').should('exist');
    cy.get('.breadcrumb-label').should('have.length', 3);
    cy.get('.breadcrumb-separator').should('have.length', 2);
    cy.contains('.breadcrumb-label', 'Home');
    cy.contains('.breadcrumb-label', 'Products');
    cy.contains('.breadcrumb-label', 'Product 1');
  });
});
