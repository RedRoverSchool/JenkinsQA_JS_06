/// <reference types="cypress"/>

describe('Header | User icon', () => {
    it('The user icon and dropdown list', () => {
        cy.get('[class="login page-header__hyperlinks"] .model-link').should('exist').click()
        cy.get('.icon-lg').should('exist')
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('.yuimenuitemlabel span').contains('Builds').click()
        cy.get('[name=skip2content]').should('exist')
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('.yuimenuitemlabel span').contains('Configure').click()
        cy.url().should('includes','/user/dariamas/configure')
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('.yuimenuitemlabel span').contains('My Views').click()
        cy.url().should('includes','/user/dariamas/my-views/view/all/')
        cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true})
        cy.get('#breadcrumb-menu').should('exist')
        cy.get('.yuimenuitemlabel span').contains('Credentials').click()
        cy.get('.jenkins-app-bar__content').should('exist')
    })
})
