/// <reference types="cypress"/>

import { itemsName, itemsUrl } from '../fixtures/headerUserIconMenuLinks.json'

describe('headerUserIconMenuLinks', () => {
    beforeEach(function () {
        cy.get('#page-header button.jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('li.yuimenuitem').as('IconMenuLinks')
    });

    itemsName.forEach((pageName, ind) => {
        it(`AT_01.03_029 | Header | User icon - Verify dropdown menu links redirect to the ${pageName} pages`, function () {
            cy.wrap(this.IconMenuLinks[ind]).click()

            cy.url().should('contain', itemsUrl[ind])
            cy.get('#page-body').should('be.visible')
        });
    });
});