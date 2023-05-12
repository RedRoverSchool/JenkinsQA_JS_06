describe('verification log out button', function () {

    it('01_08_001 log out button should be clickable and open login page', function () {
        cy.get('a[href="/logout"]').should('be.visible').click()
        cy.url().should('contain','http://localhost:8080/login')
    });
});