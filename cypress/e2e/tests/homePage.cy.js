/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
//import { sidePanelItemsData } from "../../fixtures/pom_fixtures/sidePanelItemsData.json";
import { descriptionText } from "../../fixtures/pom_fixtures/homePage.json"; 
import homePageData from "../../fixtures/pom_fixtures/homePage.json";
import { permanentAgentRadioBtn } from "../../fixtures/pom_fixtures/newNodePageData.json"

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
          .should('deep.equal', homePageData.sidePanelItems)
    });

    it("AT_02.06_004 | Homepage > Description input textarea does not exist", () => {
        homePage
          .getAddDescriptionField()
          .should("not.exist")
    });

    it("AT_02.06_006 | Homepage > Preview text equals to input description text", () => {
        homePage
          .clickAddDescriptionLink()
          .typeDescriptionIntoField(descriptionText)
          .clickDescriptionPreviewLink()
          .getDescriptionPreview()
          .should('have.text', descriptionText) 
    });
    
    it("AT_02.07.009 | Homepage Verify the 'Set up an agent' link on the main page when no jobs have been created", () => {
      homePage
        .clickSetUpAgentLink()
        .getPermanentAgentBtn()
        .should("have.text", permanentAgentRadioBtn);
    });
})
