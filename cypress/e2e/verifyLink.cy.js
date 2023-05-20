describe('verifyLink', () => {
    xit('AT_02.05_005 | Verify link Learn more about distributed builds redirects user to proper URL', () => { 
        cy.get('a[href="https://www.jenkins.io/redirect/distributed-builds"]').as('linkDistrBuilds').should('be.visible')
        cy.get('@linkDistrBuilds').find('span').should('have.text', 'Learn more about distributed builds')
        cy.clearAllSessionStorage()
        
        cy.get('@linkDistrBuilds').invoke('removeAttr', 'target').click()

        cy.url().should("eq", "https://wiki.jenkins.io/display/JENKINS/Distributed+builds")
    } )
})
