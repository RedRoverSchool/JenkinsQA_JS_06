import projects from '../fixtures/projects.json'
import messages from '../fixtures/messages.json'


describe('multiConfigurationProjectRename', () => {

    beforeEach(() => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projects.multiConfigurationProject.name)
        cy.get('#j-add-item-type-standalone-projects ul>li:last-child').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item').contains('Dashboard').click()
    })

    it('AT_14.06_001 | Rename Multi-configuration project_User enters invalid symbols', () => {     
        projects.invalidSymbols.forEach(el => {
        cy.get('td:nth-child(3) a[href^="job/"]').realHover()
        cy.get('.jenkins-table__link button.jenkins-menu-dropdown-chevron').click()
        cy.get('.first-of-type > li').contains('Rename').click()
        cy.get('input[name="newName"]')
            .clear()
            .type(`${el}{enter}`)
        cy.get('#main-panel h1').should('have.text', messages.renameErrorMessage.error)    
        cy.get('#main-panel p').should('contain', `${el}`).and('contain', messages.renameErrorMessage.specialCharactersMsg)
        cy.get('.jenkins-breadcrumbs__list-item').contains('Dashboard').click()
        })
    })

    it('AT_14.06._002 | Rename Multi-configuration project_Positive', () => {
        cy.get('td:nth-child(3) a[href^="job/"]').realHover()
        cy.get('.jenkins-table__link button.jenkins-menu-dropdown-chevron').click()
        cy.get('.first-of-type > li').contains('Rename').click()
        cy.get('input[name="newName"]')
            .clear()
            .type(`${projects.multiConfigurationProject.renameWithValidName}{enter}`)
        cy.get('h1.page-headline').should('include.text', `Project ${projects.multiConfigurationProject.renameWithValidName}`)
    })

    it.skip('AT_14.06._003 | Rename Multi-configuration project with the current name', () => {
        cy.get('td:nth-child(3) a[href^="job/"]').realHover()
        cy.get('.jenkins-table__link button.jenkins-menu-dropdown-chevron').click()
        cy.get('.first-of-type > li').contains('Rename').click()
        cy.get('input[name="newName"]')
            .clear()
            .type(`${projects.multiConfigurationProject.name}{enter}`)
        cy.get('#main-panel h1').should('have.text', messages.renameErrorMessage.error)    
        cy.get('#main-panel p').should('contain', messages.renameErrorMessage.currentNameMsg)
        cy.get('.jenkins-breadcrumbs__list-item').contains('Dashboard').click()
    })    
})

describe('RenameMultiConfigurationProject', () => {

    it.skip('AT_14.06.004|Rename Multi-configuration project', () => {
        Cypress.Commands.add('creadedNewMultiConfigurationProject', () => {
            cy.get('a[href="newJob"]').click()
            cy.get('.add-item-name>input').type(projects.multiConfigurationProject.name)
            cy.get('.hudson_matrix_MatrixProject').click()
            cy.get('#ok-button').click()
            cy.get('#jenkins-home-link').click()
        })
        cy.creadedNewMultiConfigurationProject()
        cy.get(`a[href="job/${projects.multiConfigurationProject.name}/"]>button`).realHover().click()
        cy.get(`[href="/job/${projects.multiConfigurationProject.name}/confirm-rename"]`).click()
        cy.get('.setting-main>input').click().clear().type(projects.multiConfigurationProject.renameWithValidName)
        cy.get('.jenkins-button').click()
        cy.get('#jenkins-home-link').click()
        cy.get('.jenkins-table__link').should('have.text',projects.multiConfigurationProject.renameWithValidName)
    })
}) 