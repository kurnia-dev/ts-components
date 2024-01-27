/// <reference types="cypress" />
import FilterContainer from '../FilterContainer.vue';
type FilterContainer = InstanceType<typeof FilterContainer> & {
  contentKey?: number;
};

describe('FilterContainer.vue', () => {
  beforeEach(() => {
    const childElements = Array.from({ length: 4 })
      .map(() => '<input type="text" placeholder="input" />')
      .join('');

    cy.mount(FilterContainer, {
      slots: {
        content: childElements,
      },
    });
  });

  it('renders the correct grid layout', () => {
    cy.get('.ts-filter-container > *').should('have.length', 5);
  });

  describe('Clear Field Clicked', () => {
    beforeEach(() => {
      cy.get('input').first().as('first');
      cy.get('@first').type('Test input');
      cy.get('@first').invoke('text').as('inputedText');
    });

    it('emits clear event when clear field button is clicked', () => {
      const onClear = cy.spy().as('onClear');
      cy.mount(FilterContainer, { props: { onClear } });

      cy.contains('Clear Field').click();
      cy.get('@onClear').should('have.been.called');
    });

    it('before Clicked, the input field should contains "Text input"', () => {
      cy.get('input').first().should('have.value', 'Test input');
    });

    it('should re-render components in slots "content" when clear field button clicked', () => {
      cy.get('input')
        .first()
        .then((text) => {
          const inputedText = text.val() as string;
          cy.contains('Clear Field').click();
          cy.get('input').first().should('not.have.value', inputedText);
        });
    });
  });

  it('emits apply event when apply button is clicked', () => {
    const onApplySpy = cy.spy().as('onApplySpy');
    cy.mount(FilterContainer, { props: { onApply: onApplySpy } });

    cy.get('.ts-filter-action-button > button:last-child').click();
    cy.get('@onApplySpy').should('have.been.called');
  });
});
