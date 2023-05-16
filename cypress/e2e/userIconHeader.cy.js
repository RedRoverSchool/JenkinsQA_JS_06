/// <reference types="cypress"/>
 describe('<Header | User icon', ()=>{
    it('Verify the "User" icon is clickable', ()=>{
        cy.get('.model-link span[class="hidden-xs hidden-sm"]').click()
        cy.get('.icon-lg').should('be.visible')
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('.yuimenuitemlabel span').contains('Builds').click({force:true})
        cy.url().should('includes','/builds')

        
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.contains('Configure').click()
        cy.url().should('includes','/configure')
        
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('.yuimenuitemlabel span').contains('My Views').click()
        cy.url().should('includes','/my-views/view/all/')

        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('.yuimenuitemlabel span').contains('Credentials').click()
        cy.url().should('includes','/credentials/')  
    })
 })
