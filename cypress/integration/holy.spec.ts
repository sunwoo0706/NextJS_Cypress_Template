describe('designed by sunwoo in californium', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Designed by sunwoo in californium', () => {
    cy.get('#holy').should('have.text', 'Designed by sunwoo in californium');
  });
});
