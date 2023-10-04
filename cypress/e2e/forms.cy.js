describe('form test', () => {
    beforeEach(() => {
        cy.visit('/forms');
    });
    it('Test subscribe forms', () => {
        // cy.contains(/testing forms/i);
        // cy.getDataTest('subscribe-form').find('input').type('aod988@hotmail.com');
        // cy.contains(/Successfully subbed: aod988@hotmail.com!/i).should('not.exist');
        // cy.getDataTest('subscribe-button').click();
        // cy.contains(/Successfully subbed: aod988@hotmail.com!/i).should('exist');

        cy.contains(/testing forms/i);
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
        cy.get('@subscribe-input').type('aod988@hotmail.com');
        cy.contains(/Successfully subbed: aod988@hotmail.com!/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/Successfully subbed: aod988@hotmail.com!/i).should('exist');
        cy.wait(3000);
        cy.contains(/Successfully subbed: aod988@hotmail.com!/i).should('not.exist');

        cy.get('@subscribe-input').type('aod988@hotmail.io');
        cy.contains(/invalid email: aod988@hotmail.io!/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/invalid email: aod988@hotmail.io!/i).should('exist');
        cy.wait(3000);
        cy.contains(/invalid email: aod988@hotmail.io!/i).should('not.exist');

        cy.contains(/fail!/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/fail!/i).should('exist');
    });
});