/// <reference types="cypress" />
import TSForm from '../../tsform/TSForm.vue';
import TSInputText from '../TSInputText.vue';
import { TSInputTextProps } from '../TSInputText.vue';

const render = (props?: TSInputTextProps): void => {
  cy.mount(TSInputText, {
    props: {
      'label': 'Test Label',
      ...props,
      'onUpdate:modelValue': cy.spy().as('updateModelValue'),
    },
  });
};

const renderForm = (fieldSlot?: string): void => {
  cy.mount(TSForm, {
    props: {
      buttonsTemplate: ['submit'],
      onSubmit: cy.spy().as('submitForm'),
    },
    slots: {
      fields:
        fieldSlot ??
        '<TSInputText label="Text Input" use-validator mandatory />',
    },
  });
};

const submitAndCheck = (show: boolean = true, message: string = ''): void => {
  cy.contains('Submit').click();
  cy.get('[data-test="inputtext-validator-msg"]')
    .should(show ? 'be.visible' : 'not.be.visible')
    .as('validator');

  if (message && show) {
    cy.get('@validator').contains(message);
  }
};

describe('TSInputText.vue', () => {
  it('renders props.label when passed', () => {
    render();
    cy.get('label').should('contain', 'Test Label');
  });

  it('disabled input text', () => {
    render({ disabled: true, placeholder: '' });
    cy.get('input.p-inputtext').should('have.prop', 'disabled');
  });

  it('emits update:modelValue event when input changes', () => {
    render();
    cy.get('input.p-inputtext').type('new value');
    cy.get('@updateModelValue').should('have.been.calledWith', 'new value');
  });

  describe('Text Validation', () => {
    beforeEach(() => {
      renderForm();
    });

    it('should never shows the validator message if the field is not mandatory', () => {
      renderForm(
        '<TSInputText label="Mail Input" type="email" use-validator />',
      );

      submitAndCheck(false);
    });

    it('should display input text validation message when text input is empty and form is submitted', () => {
      submitAndCheck();
    });

    it('should not display input text validation message when text input is not empty and form is submitted', () => {
      cy.get('input.p-inputtext').type('text value');
      submitAndCheck(false);
    });

    it('should re-show validator message after user delete all inputed text', () => {
      cy.contains('Submit').click();

      cy.get('[data-test="inputtext-validator-msg"]').as('validator');
      cy.get('input.p-inputtext').as('textInput');

      cy.get('@textInput').type('text inputted');
      cy.get('@validator').should('not.be.visible');

      cy.get('@textInput').type('{backspace}'.repeat(13));
      cy.get('@validator').should('be.visible');
    });

    it('should use the default field name "input-text" if field-name not set', () => {
      cy.get('input.p-inputtext').type('text');
      cy.contains('Submit').click();
      cy.get('@submitForm').should('have.been.calledWith', {
        stayAfterSubmit: false,
        formValues: {
          textInput: 'text',
        },
      });
    });

    it('should validate the text length and show validation error if length is greater than 30 char', () => {
      cy.get('input.p-inputtext').type('a'.repeat(30));
      submitAndCheck(false);

      cy.get('input.p-inputtext').type('a'.repeat(31));
      submitAndCheck(true, 'Max. 30 characters!');
    });
  });

  describe('Email Validation', () => {
    beforeEach(() => {
      renderForm(
        '<TSInputText label="Mail Input" type="email" use-validator mandatory />',
      );
    });

    it('input malformat email should show validation error', () => {
      cy.get('input.p-inputtext').type('wrong email format');
      submitAndCheck();
    });

    it('input email without domain extension should show validation error', () => {
      cy.get('input.p-inputtext').type('test@email');
      submitAndCheck();
    });

    it('input email with single character domain extension should show validation error', () => {
      cy.get('input.p-inputtext').type('test@email.c');
      submitAndCheck();
    });

    it('input email with atleast two character domain extension should not show validation error', () => {
      cy.get('input.p-inputtext').type('test@email.co');
      submitAndCheck(false);
    });
  });
});
