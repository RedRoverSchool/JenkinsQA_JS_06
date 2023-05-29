/// <reference types="cypress"/>

import descriptionOnUserPage from '../fixtures/descriptionOnUserPage.json'

describe('navigationWithBreadcrumbs', () => {
    beforeEach(() => {
        cy.get('#side-panel div#tasks div:nth-child(5) a').click()
    })
    it('AT_04.01_01 | Verify clickability of user name link in Breadcrumbs', () => {
        cy.get('#breadcrumbBar li:nth-child(3)>a').click()
        cy.get('#main-panel > div:nth-child(4)').contains(descriptionOnUserPage.JenkinsUserId)
    })
 })