import logInPage from "../fixtures/logInPage.json";
import login from "../fixtures/logInPage.json";

describe('verification log out button', function () {

    it('01_08_001 log out button should be clickable and open login page', function () {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.url().should('contain', 'http://localhost:8080/login')
    });

    it('Verify that the Log out button transfer the user back to the login page "Welcome to Jenkins!"', () => {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.get('#loginIntroDefault').should('have.text', logInPage.loginPageHeader)
    })

    it('AT_01.08_011 Log out button', () => {
        cy.get('[href="/logout"] > .hidden-xs').click();
        cy.get('#loginIntroDefault').should('have.text', 'Welcome to Jenkins!')
    })
    it('AT_01.08_14|Verify Log out button is working ', () => {
        cy.get('a[href="/logout"]').click()
        cy.title().should('eq', logInPage.loginMessage)
    })
    const PORT = Cypress.env("local.port");
    it('AT_01.08_031|Log out button redirects to login page', function () {
        cy.get('[href="/logout"]')
            .should('be.visible')
            .click();
        cy.get('#loginIntroDefault')
            .should('contain.text', logInPage.loginPageHeader);
        cy.url()
            .should('include', `http://localhost:${PORT}/login`);
    })

    it('AT_01.08_030|Header, Log out button is clickable and redirects to the login page', () => {
        cy.get('a[href="/logout"]').click();
        cy.get('[id=loginIntroDefault] h1').should('have.text', login.loginPageGreeting);
    });
})