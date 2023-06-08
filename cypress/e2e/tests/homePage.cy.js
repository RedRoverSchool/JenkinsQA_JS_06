/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { sidePanelItems } from "../../fixtures/pom_fixtures/homePage.json"
import { descriptionText } from "../../fixtures/pom_fixtures/homePage.json"; 
import { permanentAgentRadioBtn } from "../../fixtures/pom_fixtures/newNodePageData.json"
import {endPointUrl} from "../../fixtures/pom_fixtures/homePage.json"

describe("homePage", () => {
    const homePage = new HomePage()

    sidePanelItems.forEach((item, idx) => {
      it(`AT_02.04_009 | <Homepage> Verify all ${item} of the sub-menu redirect to the proper pages`, function () {
        homePage
          .clickSideMenuPanelItem(idx)
          .should('contain', endPointUrl[idx])
      })
    })

    it("AT_02.06_005 | Homepage > Verification of the link 'Add description'", () => {
        homePage
          .clickAddDescriptionLink();
        cy.focused().should('have.attr', 'name', 'description') 
    })

    it('AT_02.04_008 | Homepage > Verify 5 items from the sub-menu', () => {
        homePage
          .createSidePanelItemsList()
          .should('deep.equal', sidePanelItems)
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
