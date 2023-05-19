import rightSideMenu from '../fixtures/multiConfigurationProjectSideMenu.json'
import projects from '../fixtures/projects.json'

describe('multiConfigurationProjectDelete', () => {

    beforeEach(() => {
        cy.get('a[href="newJob"]').click();
        cy.get('input#name').type(projects.multiConfigurationProject.name);
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        cy.get("button[name='Submit']").click();
        cy.get("ol#breadcrumbs > li:nth-of-type(1)").click();
    })

    it('AT_14.07_001 | Multi Configuration Project Delete | Delete Multi-configuration project within itself', () => {
        cy.get(`a[href='job/${projects.multiConfigurationProject.name}/']`).click();
        cy.get(".confirmation-link").contains(`${rightSideMenu.MCPSideMenuItems[5]}`).click();
        cy.get("#page-body").should("not.have.text", `${projects.multiConfigurationProject.name}`)
    });
});
