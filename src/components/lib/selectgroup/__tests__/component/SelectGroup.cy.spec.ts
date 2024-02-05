/// <reference types="cypress" />
import SelectGroup from '../../SelectGroup.vue';

describe('Select Group', () => {
  beforeEach(() => {
    cy.mount(SelectGroup);
  });

  it('should render the button', () => {
    cy.contains('Select Group').click();

    cy.contains('Select Group');
  });
});
