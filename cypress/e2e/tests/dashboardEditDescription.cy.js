/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage"
import dashboardEditDescription from "../../fixtures/pom_fixtures/dashboardEditDescription.json"

describe('Dashboard Edit Description', () => {
    const homePage = new HomePage()
  it('20.02 _001| Dashboard > Editing Description', () => {
    homePage
      .clickAddDescriptionLink() 
      .typeDescriptionIntoField(dashboardEditDescription.addDescriptionText)
      .clickSaveDescriptionBtn()

      .clickEditDescriptionBtn()
      .typeDescriptionIntoField(dashboardEditDescription.editDescriptionText)
      .clickSaveDescriptionBtn()
      .getDescriptionField()
      .should('have.text', dashboardEditDescription.editDescriptionText) 
  })
})