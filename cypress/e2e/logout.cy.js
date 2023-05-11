describe('verification log out button', function () {

    it('AT_01_08_001 log out button should be clickable and open login page', function () {
        cy.get('a[href="/logout"]').click()
        cy.url().should('contain','http://localhost:8080/login')
    });
});