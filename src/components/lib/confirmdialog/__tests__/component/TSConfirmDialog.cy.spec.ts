/// <reference types="cypress" />
import TSConfirmDialog from '../../TSConfirmDialog.vue';
import { TSConfirmDialogProps } from '../../TSConfirmDialog.vue.d';

type RenderOptions = {
  props: TSConfirmDialogProps;
  slots?: TSConfirmDialogSlots;
};

const renderDialog = ({ props, slots }: RenderOptions): void => {
  cy.mount(TSConfirmDialog, {
    props: {
      'visible': true,
      'onConfirm': cy.spy().as('confirm'),
      'onUpdate:visible': cy.spy().as('updateVisible'),
      ...props,
    },
    slots,
  });
};

describe('TSConfirmDialog', () => {
  beforeEach(() => {
    cy.viewport(400, 400);
  });

  describe('should render the dialog with default props', () => {
    beforeEach(() => {
      renderDialog({
        props: {
          header: 'Confirm Dialog',
          severity: 'success',
        },
      });
    });

    it('should render the default dialog body', () => {
      cy.get('.ts-confirmdialog').should('be.visible');
      cy.get('[data-test="dialog-body"]').should(
        'contain',
        'Are you sure want to continue?',
      );
    });

    it('should render the default confirm button label', () => {
      cy.get('[data-test="confirm-button"]').should('contain', 'Yes, Continue');
    });

    it('should shown close button', () => {
      cy.get('.p-dialog-header-icon').should('exist');
    });

    it('should close after confirm', () => {
      cy.get('[data-test="confirm-button"]').click();
      cy.get('@updateVisible').should('have.been.calledWith', false);
    });
  });

  it('should not render close icon if closable false', () => {
    renderDialog({
      props: {
        header: 'Confirm Dialog',
        severity: 'success',
        closable: false,
      },
    });

    cy.get('.p-dialog-header-icon').should('not.exist');
  });

  it('can close dialog with close button', () => {
    renderDialog({
      props: {
        header: 'Confirm Dialog',
        severity: 'success',
      },
    });

    cy.get('.p-dialog-header-icon').click();
    cy.get('@updateVisible').should('have.been.calledWith', false);
  });

  it('should not close the dialog when the confirm button is clicked and closeAfterConfirm is false', () => {
    renderDialog({
      props: {
        header: 'Confirm Dialog',
        severity: 'success',
        closeAfterConfirm: false,
      },
    });

    cy.get('[data-test="confirm-button"]').click();
    cy.get('@confirm').should('have.been.called');
    cy.get('@updateVisible').should('not.have.been.called');
    cy.get('.ts-confirmdialog').should('exist');
  });

  it('should close the dialog when the cancel button is clicked', () => {
    renderDialog({
      props: {
        header: 'Confirm Dialog',
        severity: 'success',
      },
    });

    cy.get('[data-test="cancel-button"').click();
    cy.get('@updateVisible').should('have.been.calledWith', false);
  });

  it('should render the dialog with passed props', () => {
    renderDialog({
      props: {
        header: 'Confirm Dialog',
        severity: 'success',
        confirmLabel: 'Custom Confirm Label',
        body: 'Body text from prop',
        icon: 'ri-close-line',
      },
    });

    cy.get('[data-test="confirm-button"').should(
      'contain',
      'Custom Confirm Label',
    );

    cy.contains('Body text from prop');
    cy.get('.ri-close-line');
  });

  describe('rendering slots', () => {
    it('should render content for body slot', () => {
      renderDialog({
        props: {
          header: 'Confirm Dialog',
          severity: 'success',
        },
        slots: {
          body: '<p>Custom Body</p>',
        },
      });

      cy.contains('Custom Body');
      cy.get('p').should('not.contain', 'Are you sure want to continue?');
    });

    it('should render content for footer slot', () => {
      renderDialog({
        props: {
          header: 'Confirm Dialog',
          severity: 'success',
        },
        slots: {
          footer: '<p>Custom Footer</p>',
        },
      });

      cy.contains('Custom Footer');
      cy.get('[data-test="confirm-button"]').should('not.exist');
      cy.get('[data-test="cancel-button"]').should('not.exist');
    });
  });

  describe('rendering lists', () => {
    it('should render the dialog with a list of strings', () => {
      renderDialog({
        props: {
          header: 'Confirm Dialog',
          severity: 'success',
          lists: ['Item 1', 'Item 2', 'Item 3'],
        },
      });

      cy.get('.ts-confirmdialog ul li').should('have.length', 3);
      cy.get('.ts-confirmdialog ul li').eq(0).should('contain', 'Item 1');
      cy.get('.ts-confirmdialog ul li').eq(1).should('contain', 'Item 2');
      cy.get('.ts-confirmdialog ul li').eq(2).should('contain', 'Item 3');
    });

    it('should render the dialog with a list of objects', () => {
      renderDialog({
        props: {
          header: 'Confirm Dialog',
          severity: 'success',
          lists: [
            {
              name: 'Item 1',
            },
            {
              name: 'Item 2',
            },
            {
              name: 'Item 3',
            },
          ],
          listLabel: 'name',
        },
      });
      cy.get('.ts-confirmdialog ul li').should('have.length', 3);
      cy.get('.ts-confirmdialog ul li').eq(0).should('contain', 'Item 1');
      cy.get('.ts-confirmdialog ul li').eq(1).should('contain', 'Item 2');
      cy.get('.ts-confirmdialog ul li').eq(2).should('contain', 'Item 3');
    });
  });
});
