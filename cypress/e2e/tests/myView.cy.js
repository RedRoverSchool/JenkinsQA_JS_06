/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe('myView', () => {

  const homePage = new HomePage();
  const headerAndFooter = new HeaderAndFooter();
     
    it('AT_09.08.001 | <My view> Create Freestyle Project job', () => {
        homePage
            .clickMyViewSideMenuLink()
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectHeader()
            .should('have.text', freestyleProjectPageData.headerText + newItemPageData.freestyleProjectName);
    });

    it('AT_04.03_001|< My View> Verify that user can open selected Pipeline', () => {
        homePage
          .clickNewItemSideMenuLink()
          .typeNewItemNameInputField(newItemPageData.pipelineName)
          .selectPipelineItem()
          .clickOkBtnAndGoPipelineConfig();
                  
        headerAndFooter
          .clickUserDropDownBtn()
          .selectUserMyViewsMenu()
          .clickPipelineNameLink()
          .getPipelinePageHeadline()
          .should('be.visible')
          .and('include.text', newItemPageData.pipelineName);
  });

    it('AT_04.03_003 |<My View> Verify that the user can open the selected Freestyle project', () => {
    homePage
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
      .selectFreestyleProjectItem()
      .clickOkBtnAndGoPipelineConfig();
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickFreestyleProjectNameLink()
      .getFreestyleProjectHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.freestyleProjectName);
  });

  it('AT_04.03_007 |<My View> Verify that the user can open the selected Multi-configuration project', () => {
    homePage
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(newItemPageData.multiConfigurationProjectName)
      .selectMultiConfigurationProjectItem()
      .clickOkBtnAndGoMultiConfProjectConfig();
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickMultiConfigurationProjectNameLink()
      .getMultiConfigurationProjectHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.multiConfigurationProjectName);
  });
});
  