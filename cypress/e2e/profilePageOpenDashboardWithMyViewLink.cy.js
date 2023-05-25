/// <reference types="cypress"/>

describe('KZ-profilePageOpenDashboardMyViewLink.cy.js', () => {
    const expectedMyViewItems = [
        'Test',
    ];
    beforeEach('Create folder', function () {
        cy.get('a[href="/view/all/newJob"]')
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Test')
        cy.get('img[class="icon-folder icon-xlg"]').click()
        cy.get('#ok-button').click()
        cy.get('input[type="text"]').type('Test')
        cy.get('.setting-main  textarea  ').eq(0).type('test case')
        cy.get('button[formnovalidate="formNoValidate"]').click()
        cy.get('#jenkins-home-link').click()
    })

    it('AT_18.05_002 | Profile Page > Open dashboard with My view link', () => {

        cy.get('a[href="/me/my-views"]').should('be.visible').click()
        cy.url().should("be.eq", `http://localhost:${Cypress.env('local.port')}/me/my-views/view/all/`)
        cy.get('[id^="job"] a span').each((el, idx) => {
            expect(el.text()).to.be.equal(expectedMyViewItems[idx]);
        })
    });
});
   










