/// <reference types="cypress" />
import TSInputText from './TSInputText.vue';

describe('TSInputText.vue', () => {
  beforeEach(() => {
    cy.mount(TSInputText, {
      props: {
        disabled: true,
        placeholder: '',
      },
    });
  });

  it('renders props.label when passed', () => {
    cy.get('label').should('contain', 'Test Label');
  });

  it('disabled input text', () => {
    cy.get('input.p-inputtext').should('have.property', 'disabled');
  });

  // it('emits update:modelValue event when input changes', () => {
  //   cy.get('input').type('new value');
  //   cy.window().its('emitted').should('have.property', 'update:modelValue');
  // });

  // it('shows error message when input is invalid', () => {
  //   cy.get('input').type('{backspace}');
  //   cy.get('.validator-message').should('exist');
  // });

  // it('validates email correctly', () => {
  //   mount(app, {
  //     propsData: {
  //       label: 'Test Label',
  //       fieldName: 'test',
  //       mandatory: true,
  //       useValidator: true,
  //       validatorMessage: 'Field is required',
  //       placeholder: 'Test Placeholder',
  //       type: 'email',
  //     },
  //   });
  //   cy.get('input').type('not an email');
  //   cy.get('.validator-message').should('exist');
  //   cy.get('.validator-message').should(
  //     'contain',
  //     'Email format is incorrect!',
  //   );
  // });
});
