describe('Welcome Page', () => {
  it('clicks on the "Explore Components" button and navigates to the Button page', () => {
    cy.visit('/');
    cy.contains('Explore Components').click();
    cy.url().should('include', '/button');
  });
});
