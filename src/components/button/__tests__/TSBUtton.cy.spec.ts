import { mount } from '@cypress/vue';
import TSButton from '../TSButton.vue';

describe('TSButton', () => {
  it('renders a button', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
      },
    });

    cy.get('button').should('exist');
  });

  it('renders the correct label', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
      },
    });

    cy.get('button').contains('Test Button');
  });

  it('renders the correct severity class', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
      },
    });

    cy.get('button').should('have.class', 'ts-button-primary');
  });

  it('creates a ripple on click', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
      },
    });

    cy.get('button').click();
    cy.get('button').find('span.ripple').should('exist');
  });

  it('renders an icon if provided', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
        icon: 'test-icon',
      },
    });

    cy.get('button').find('i.test-icon').should('exist');
  });

  it('does not render an icon if not provided', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
      },
    });

    cy.get('button').find('i').should('not.exist');
  });

  it('renders as an icon-only button if icon is provided and label is not', () => {
    mount(TSButton, {
      propsData: {
        icon: 'test-icon',
        severity: 'primary',
      },
    });

    cy.get('button').should('have.class', 'icon-only');
  });

  it('renders as a text-only button if label is provided and icon is not', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
        textOnly: true,
      },
    });

    cy.get('button').should('have.class', 'text-only');
  });

  it('renders the icon on the right if iconPos is set to "right"', () => {
    mount(TSButton, {
      propsData: {
        label: 'Test Button',
        severity: 'primary',
        icon: 'ri-arrow-right-line',
        iconPos: 'right',
      },
    });

    cy.get('button').should('have.class', 'icon-right');
  });
});
