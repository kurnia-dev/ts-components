describe('Welcome Page', () => {
  it('clicks on the "Explore Components" button and navigates to the Button page', () => {
    cy.visit('/');
    cy.get('[data-test="explore-button"]').click();
  });
});
