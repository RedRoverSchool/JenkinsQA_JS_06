/// <reference types="cypress"/>

describe('Header | Notifications icon', () => {
    it('AT_01.10_001| <Header> Verify Notifications icon', function () {
        cy.get('a[href="/manage"]').click()
        cy.get('.jenkins-app-bar__content').should('have.text', 'Manage Jenkins')
        cy.get('.jenkins-breadcrumbs__list-item button[class="jenkins-menu-dropdown-chevron"]').realHover().realClick()
        cy.get('.jenkins_ver a')
          .should('exist')
          .and('be.visible')
          .and('have.text','Jenkins 2.387.2')
        cy.get('#visible-am-button').click()
        cy.get('#visible-am-list a[href="/manage"]').should('have.text', 'Manage Jenkins')
    })

    it.skip('AT_01.10.004 | Header | Verify That Orange Notifications icon is Visible', () => {
        cy.get('#visible-am-insertion span').realHover()
        cy.get('#visible-am-insertion span').should('have.css','background-color','rgb(255, 152, 0)')
    })
})