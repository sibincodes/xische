describe('NY Times Most Popular Articles', () => {
  it('should display list of articles', () => {
    cy.visit('/');
    cy.contains('Most Popular Articles');
  });

  it('should navigate to article detail', () => {
    cy.visit('/');
    cy.contains('‘Good Days and Bad Days’: Princess of Wales Gives Update on Cancer').click();
    cy.url().should('include', '/article/1');
    cy.contains('Good Days and Bad Days’: Princess of Wales Gives Update on Cancer');
  });
});