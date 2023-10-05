describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples');
    });
    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click(); // When clicking "Why Cypress?" navbar element
        cy.location('pathname').should('equal', '/'); // Pathname should be '/', or homepage
        cy.wait(1500);

        cy.getDataTest('nav-overview').click();
        cy.location('pathname').should('equal', '/overview');
        cy.wait(1500);

        cy.getDataTest('nav-fundamentals').click();
        cy.location('pathname').should('equal', '/fundamentals');
        cy.wait(1500);

        cy.getDataTest('nav-forms').click();
        cy.location('pathname').should('equal', '/forms');
        cy.wait(1500);

        cy.getDataTest('nav-examples').click();
        cy.location('pathname').should('equal', '/examples');
        cy.wait(1500);

        cy.getDataTest('nav-component').click();
        cy.location('pathname').should('equal', '/component');
        cy.wait(1500);

        cy.getDataTest('nav-best-practices').click();
        cy.location('pathname').should('equal', '/best-practices');
        cy.wait(1500);
    });
    it('intercepts', () => {
        cy.intercept('POST', 'http://localhost:3000/examples', {    // First arg is a CRUD method, 2nd arg is the URL you intercept, 3rd arg is the response.
            fixture: 'example.json', // example.json file from fixture folder
        });
        cy.getDataTest('post-button').click();
    });
    it.only('grudges', () => {
        cy.contains(/add some grudges/i);

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0);
        });

        cy.getDataTest('grudge-clear').should('not.exist');

        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges');

        cy.getDataTest('grudge-input').within(() => { // Go to 'grudge-input', and within it...
            cy.get('input').type('some grudge');    // ...go into the input and type in 'some grudge'
        });
        cy.getDataTest('add-grudge-button').click();

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1);
        });

        cy.getDataTest('grudge-list-title').should('have.text', 'Grudges');

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('another grudge');
        });
        cy.getDataTest('add-grudge-button').click();

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 2);
            cy.get('li').its(0).should('contains.text', 'some grudge'); // The 0 index li item should have text containing 'some grudge'
        });

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() => {  // Go to li[0], and within it...
                cy.get('button').click();       // Click the button in that li (delete)
            });
        });
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1);
        });

        cy.getDataTest('grudge-clear').click();
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0);
        });
    });
});