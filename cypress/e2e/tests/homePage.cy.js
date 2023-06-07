/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { sidePanelItemsData } from "../../fixtures/pom_fixtures/sidePanelItemsData.json";

describe("homePage", () => {
    const homePage = new HomePage()

    it("AT_02.06_005 | Homepage > Verification of the link 'Add description'", () => {
        homePage
          .clickAddDescriptionLink();
        cy.focused().should('have.attr', 'name', 'description') 
    })

    it.skip('AT_02.04_008 | Homepage > Verify 5 items from the sub-menu', () => {
        homePage
          .createSidePanelItemsList()
          .should('deep.equal', sidePanelItemsData)
    });

})