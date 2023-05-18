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
        let renameValidName = 'RenamedProject123'
        cy.get('td:nth-child(3) a[href^="job/"]').realHover()
        cy.get('.jenkins-table__link button.jenkins-menu-dropdown-chevron').click()
        cy.get('.first-of-type > li').contains('Rename').click()
        cy.get('input[name="newName"]')
            .clear()
            .type(`${renameValidName}{enter}`)
        cy.get('h1.page-headline')
            .should('include.text', 'Project')
            .and('include.text', renameValidName)
    })
})