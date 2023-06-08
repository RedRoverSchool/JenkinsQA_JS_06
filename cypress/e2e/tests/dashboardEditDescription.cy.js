/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage"
import dashboardEditDescriptionData from "../../fixtures/pom_fixtures/dashboardEditDescription.json"

describe('Dashboard Edit Description', () => {
    const homePage = new HomePage()
  it('20.02 _001| Dashboard > Editing Description', () => {
    homePage
      .clickAddDescriptionLink() 
      .typeDescriptionIntoField(dashboardEditDescriptionData.addDescriptionText)
      .clickSaveDescriptionBtn()

      .clickEditDescriptionBtn()
      .typeDescriptionIntoField(dashboardEditDescriptionData.editDescriptionText)
      .clickSaveDescriptionBtn()
      .getDescriptionField()
      .should('have.text', dashboardEditDescriptionData.editDescriptionText) 
  })
})