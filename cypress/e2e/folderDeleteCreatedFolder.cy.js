import organizationFolderNames from '../fixtures/organizationFolderNames.json'
import deleteOrgFolder from '../fixtures/deleteOrgFolder.json'
describe.skip('Folder | Delete created folder', () => {
    beforeEach('Create folder', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(organizationFolderNames.nameNewFolder)
        cy.get('span.label').contains('Folder').click()
        cy.get('#ok-button').click()
        cy.get('#bottom-sticker').contains('Save').click()
        cy.url().should('include', `/job/${organizationFolderNames.nameNewFolder}/`)
    })

    it('AT_15.04.004 | Folder | Delete created folder', () => {
        cy.get('span.task-link-text').contains(deleteOrgFolder.deleteFolder).click({ force: true })
        cy.get('#main-panel button[name="Submit"]').contains('Yes').click()
        cy.get('.empty-state-block').should('not.have.value', organizationFolderNames.nameNewFolder)
    })

    it('AT_15.04.005 | Folder | Delete created folder from dropdown menu', () => {
        cy.get('#jenkins-name-icon').click()
        cy.get('tbody tr td a.jenkins-table__link').realHover({ position: "center" })
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').should('be.visible').click()
        cy.get('.first-of-type :nth-child(3) span').should('contain', deleteOrgFolder.deleteFolder).click()
        cy.get('#main-panel button[name="Submit"]').contains('Yes').click()
        cy.get('.empty-state-block').should('not.have.text', organizationFolderNames.nameNewFolder)
    })
})
    