/// <reference types="cypress" />
import TSForm from '../../TSForm.vue';
import Dialog from 'primevue/dialog';

type Options = {
  fieldSlot?: string;
  hideStayCheckbox?: boolean;
  stickyButtons?: boolean;
};

const renderForm = ({
  fieldSlot,
  stickyButtons,
  hideStayCheckbox = false,
}: Options = {}): void => {
  cy.mount(TSForm, {
    props: {
      buttonsTemplate: ['submit', 'save', 'save-outlined', 'cancel', 'clear'],
      onSubmit: cy.spy().as('submitForm'),
      onCancel: cy.spy().as('cancelForm'),
      onClear: cy.spy().as('clearForm'),
      onSave: cy.spy().as('saveForm'),
      hideStayCheckbox,
      stickyButtons,
    },
    slots: {
      fields:
        fieldSlot ??
        '<TSInputText label="Text Input" use-validator mandatory />',
    },
  });
};

const renderWithDialog = (): void => {
  cy.mount(Dialog, {
    props: {
      visible: true,
      modal: true,
      header: 'Dialog',
      style: 'width: 300px',
    },
    slots: {
      default: `
        <TSForm buttons-template="submit, cancel" sticky-buttons>
          <TSInputText label="Text Input" use-validator mandatory />
        </TSForm>
      `,
    },
    components: {
      TSForm,
    },
  });
};

const submitAndCheck = (show: boolean = true, message: string = ''): void => {
  cy.contains('Submit').click();
  cy.get('.ts-form-validator-message')
    .should(show ? 'be.visible' : 'not.be.visible')
    .as('validator');

  if (message && show) {
    cy.get('@validator').contains(message);
  }
};

describe('TSForm.vue', () => {
  it('renders the form correctly', () => {
    renderForm();
    cy.get('.ts-form').should('be.visible');
  });

  it('emits submit event when form is submitted', () => {
    renderForm();
    cy.get('input.p-inputtext').type('test');
    cy.contains('Submit').click();
    cy.get('@submitForm').should('have.been.called');
  });

  it('should show the ts form validation on submit if all required field not filled', () => {
    renderForm();
    submitAndCheck();
  });

  it('should render all available buttons', () => {
    renderForm();
    cy.get('[data-test="submit-button"');
    cy.get('[data-test="cancel-button"');
    cy.get('[data-test="save-button"');
    cy.get('[data-test="save-outlined-button"');
    cy.get('[data-test="clear-button"');
  });

  describe('Stay after submit', () => {
    beforeEach(() => {
      renderForm();
      cy.get('input.p-inputtext').type('test');
      cy.get('.ts-form-stay-checkbox-wrapper').as('stay');
    });

    it('should render checkbox stay after submit if props hideStayCheckbox not present', () => {
      cy.get('@stay').should('exist');
    });

    it('should not checkbox stay after submit if props hideStayCheckbox not present', () => {
      renderForm({ hideStayCheckbox: true });
      cy.get('@stay').should('not.exist');
    });

    it('should emit value of "stayAfterSubmit: true" as payload of emit submit and save', () => {
      cy.get('@stay').click();
      submitAndCheck(false);
      cy.get('@submitForm').should('have.been.calledWithMatch', {
        stayAfterSubmit: true,
      });
    });

    it('should emit value of "stayAfterSubmit: false" as payload of emit submit and save', () => {
      renderForm({ hideStayCheckbox: true });
      cy.get('input.p-inputtext').type('test');
      submitAndCheck(false);
      cy.get('@submitForm').should('have.been.calledWithMatch', {
        stayAfterSubmit: false,
      });
    });
  });

  describe('Save button', () => {
    beforeEach(() => {
      renderForm();
      cy.get('[data-test="save-button"').as('save');
    });

    it('should emit save event when save button is clicked', () => {
      cy.get('input.p-inputtext').type('test');
      cy.get('@save').click();
      cy.get('@saveForm').should('have.been.called');
    });
  });

  describe('Save outlined button', () => {
    beforeEach(() => {
      renderForm();
      cy.get('[data-test="save-outlined-button"').as('saveOutlined');
    });

    it('should emit save event when save button is clicked', () => {
      cy.get('input.p-inputtext').type('test');
      cy.get('@saveOutlined').click();
      cy.get('@saveForm').should('have.been.called');
    });
  });

  describe('Cancel button', () => {
    beforeEach(() => {
      renderForm();
      cy.get('[data-test="cancel-button"').as('cancel');
    });

    it('should emit cancel', () => {
      cy.get('@cancel').click();
      cy.get('@cancelForm').should('have.been.called');
    });
  });

  describe('Clear field', () => {
    beforeEach(() => {
      renderForm();
      cy.get('[data-test="clear-button"').as('clear');
      cy.get('input.p-inputtext').as('input');
      cy.get('@input').type('test');
    });

    it('should reset the input on clear', () => {
      cy.get('@clear').click();
      cy.get('@input')
        .invoke('val')
        .then((textContent) => {
          cy.wrap(textContent).should('be.empty');
        });
    });
  });

  describe('Render multiple form field', () => {
    beforeEach(() => {
      renderForm({
        fieldSlot: `
          <TSInputText label="Text Input" field-name="text-1" use-validators />
          <TSInputText label="Text Input" field-name="text-2" use-validators />
          <TSInputText label="Text Input" field-name="text-3" use-validator mandatory />
        `,
      });
    });

    it('should render correct counts of fields', () => {
      cy.get('input.p-inputtext').should('have.length', 3);
    });
  });

  describe('Sticky button', () => {
    beforeEach(() => {
      renderWithDialog();
    });

    it('should correctly set the class for sticky buttons', () => {
      cy.get('.p-dialog.form-dialog-sticky-buttons');
    });
  });
});
