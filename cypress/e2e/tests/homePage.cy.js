/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";

describe("homePage", () => {

    const homePage = new HomePage()

    it("AT_02.06_005 | Homepage > Verification of the button 'Add description'", () => {
        homePage
          .clickAddDescriptionBtn()
        cy.focused()
          .should('have.attr', 'name', 'description') 
    })

    it("AT_02.06_004 | Homepage > Description input textarea does not exist", () => {
      homePage
          .getAddDescriptionField()
          .should('not.exist')
  })

})