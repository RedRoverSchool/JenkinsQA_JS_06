/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { freestyleProjectName } from "../../fixtures/pom_fixtures/newItemPage.json";
import { headerText } from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import {pipelineName} from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";


describe('myView', () => {

  const homePage = new HomePage();
  const headerAndFooter = new HeaderAndFooter();
     
    it('AT_09.08.001 | <My view> Create Freestyle Project job', () => {
        homePage
            .clickMyViewSideMenuLink()
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectHeader()
            .should('have.text', headerText + freestyleProjectName);
    });

    it('AT_04.03_001|< My View> Verify that user can open selected Pipeline', () => {
        homePage
          .clickNewItemSideMenuLink()
          .typeNewItemNameInputField(pipelineName)
          .selectPipelineItem()
          .clickOkBtnAndGoPipelineConfig();
                  
        headerAndFooter
          .clickUserDropDownBtn()
          .selectUserMyViewsMenu()
          .clickPipelineNameLink()
          .getPipelinePageHeadline()
          .should('be.visible')
          .and('include.text', pipelineName);
  });

    it('AT_04.03_003 |<My View> Verify that the user can open the selected Freestyle project', () => {
      homePage
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(freestyleProjectName)
      .selectFreestyleProjectItem()
      .clickOkBtnAndGoPipelineConfig();
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickFreestyleProjectNameLink()
      .getFreestyleProjectHeader()
      .should('be.visible')
      .and('include.text', freestyleProjectName);
  })

});
