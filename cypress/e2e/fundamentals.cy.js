describe('Fundamentals test', () => { // Describe block: First arg describes what you are testing. Second arg is a callback for your tests.
  beforeEach(() => { // Before each test, will run commands below. ie: visit /fundamentals before running each test.
    cy.visit('/fundamentals');
  });
  it('Contains correct header text', () => { // It block: First arg describes/the title of the test. Second arg is a callback that runs a test.
    // cy.visit('/fundamentals');
    // cy.get('[data-test="fundamentals-header"]').contains('Testing Fundamentals');
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i) // Regex Testing Fundamentals but case insensitive
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals'); // Uses custom getDataTest command from commands.js
  });
  it('Accordion works correctly', () => {
    // cy.visit('/fundamentals');
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
  });
});