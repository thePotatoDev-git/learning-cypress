describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples');
    });
    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
    });
});