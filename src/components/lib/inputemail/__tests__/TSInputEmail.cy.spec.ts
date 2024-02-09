/// <reference types="cypress" />
import TSForm from '../../tsform/TSForm.vue';

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

describe('Email Validation', () => {
  beforeEach(() => {
    renderForm(
      '<TSInputEmail label="Mail Input" type="email" use-validator mandatory />',
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
