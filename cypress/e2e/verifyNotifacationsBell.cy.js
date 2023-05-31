/// <reference types="cypress"/>
import dashboardItems from '../fixtures/dashboardItems.json';

describe('Header | Notifications icon', () => {
    it('AT_01.10_001| <Header> Verify Notifications icon', function () {
        cy.get('a[href="/manage"]').click()
        cy.get('.jenkins-app-bar__content').should('have.text', (dashboardItems.manageJenkins))
        cy.get('.jenkins-breadcrumbs__list-item button[class="jenkins-menu-dropdown-chevron"]').realHover().realClick()
        cy.get('.jenkins_ver a')
          .should('exist')
          .and('be.visible')
          .and('have.text',(dashboardItems.versionJenkins))
        cy.get('#visible-am-button').click()
        cy.get('#visible-am-list a[href="/manage"]').should('have.text', (dashboardItems.manageJenkins))
    })

    it.skip('AT_01.10.004 | Header | Verify That Orange Notifications icon is Visible', () => {
        cy.get('#visible-am-insertion span').realHover()
        cy.get('#visible-am-insertion span').should('have.css','background-color','rgb(255, 152, 0)')
    })

    xit('AT_01.10_005 | Header Notifications icon', () => {
    cy.get('#visible-am-button').click();
    cy.get('.alert.alert-info strong').should('have.text',(dashboardItems.newVersion));
    })
})