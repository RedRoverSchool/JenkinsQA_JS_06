const USERNAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');
const LOCAL_PORT = Cypress.env('local.port')

beforeEach(() => {
    cy.cleanData();
    cy.visit(`http://localhost:${LOCAL_PORT}/login`);
      cy.get('#j_username').type(USERNAME);
      cy.get('input[name="j_password"]').type(PASSWORD);
      cy.get('button[name="Submit"]').click();
})