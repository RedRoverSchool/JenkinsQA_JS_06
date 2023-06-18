/// <reference types="cypress"/>

import {SidePanelTasks} from "../fixtures/userConfigure.json"

const USERNAME = Cypress.env('local.admin.username').toLowerCase();

 describe.skip('<Header | User icon', ()=>{
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
    
    it('AT_01.03_021| Verify the "Credentials" in dropdown menu is clickable',()=>{
        cy.get (`a[href="/user/${USERNAME}`).should('be.visible')
        cy.get ('.login .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get ('.login .jenkins-menu-dropdown-chevron').should('be.visible')
        cy.contains('Credentials').click({force:true})
        cy.get ('#main-panel h1').should('have.text', SidePanelTasks.Names[5])
    })
 })
 
