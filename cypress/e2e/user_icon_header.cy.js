/// <reference types="cypress"/>
 describe('<Header | User icon', ()=>{
    it('Verify the "User" icon is clickable', ()=>{
        cy.get('.model-link span[class="hidden-xs hidden-sm"').click()
        cy.url('').should('includes','/user/peri/')
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('#yui-gen1 a[href="/user/peri/builds"]').click()
        cy.url().should('includes','/user/peri/builds')

        cy.get('a[href="/user/peri"]').click()
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('a[href="/user/peri/configure"].yuimenuitemlabel').click()
        //cy.contains('Configure').click()
        cy.url().should('includes','/user/peri/configure')
        
        cy.get('a[href="/user/peri"]').click()
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('a[href="/user/peri/my-views"].yuimenuitemlabel').click()
        //cy.contains('My Views').click()
        cy.url().should('includes','/user/peri/my-views/view/all/')
        
        cy.get('a[href="/user/peri"]').click()
        cy.get('.page-header .jenkins-menu-dropdown-chevron').click({force:true})
        cy.get('a[href="/user/peri/credentials"].yuimenuitemlabel').click()
        //cy.contains('Credentials').click()
        cy.url().should('includes','/user/peri/credentials/')
        
    })
 })