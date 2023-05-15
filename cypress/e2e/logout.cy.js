describe('verification log out button', function () {

    it('01_08_001 log out button should be clickable and open login page', function () {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.url().should('contain','http://localhost:8080/login')
    });

    it('Verify that the Log out button transfer the user back to the login page "Welcome to Jenkins!"', () => {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.get('#loginIntroDefault').should('have.text', 'Welcome to Jenkins!')
    })
});