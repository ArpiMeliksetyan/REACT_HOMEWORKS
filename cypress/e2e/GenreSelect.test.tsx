describe('GenreSelect Component', () => {
    beforeEach('should run on 5174 port', () => {
        cy.visit('http://localhost:5174')
    });
    it('should check Comedy button existence', () => {
        cy.contains('Comedy').click();
    });
    it('should check Melodrama button highlight', () => {
        cy.contains('Melodrama').should('have.class', 'selected');
    });
});
