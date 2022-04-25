describe('designed by sunwoo in californium', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.task('getResqFilePath').then((resqPath: string) => {
      cy.waitForReact(1000, undefined, resqPath);
    });
  });

  it('Designed by sunwoo in californium', () => {
    cy.react('Holy').should('have.text', 'Designed by sunwoo in californium');
  });
});
