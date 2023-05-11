/// <reference types="cypress"/>


describe('Learn more about distributed builds', () => {
    it('Verify "Learn more about distributed builds" is clickable ', () =>{
        cy.get('a[class="content-block__link content-block__help-link"]').invoke('removeAttr','target').click()
        cy.url().should('eq', 'https://wiki.jenkins.io/display/JENKINS/Distributed+builds')
        
    })
})