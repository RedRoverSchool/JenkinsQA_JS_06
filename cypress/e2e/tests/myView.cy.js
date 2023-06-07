/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { headerText } from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {freestyleProjectName, pipelineName, folderName, multibranchPipelineName, multiConfigurationProjectName} from "../../fixtures/pom_fixtures/newItemPage.json";


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
  });

  it('AT_04.03_007 |<My View> Verify that the user can open the selected Multi-configuration project', () => {
    homePage
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(multiConfigurationProjectName)
      .selectMultiConfigurationProjectItem()
      .clickOkBtnAndGoMultiConfProjectConfig();
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickMultiConfigurationProjectNameLink()
      .getMultiConfigurationProjectHeader()
      .should('be.visible')
      .and('include.text', multiConfigurationProjectName);
  });

  it('AT_04.03_002|<My View> Verify that the user can open the selected Folder', () => {
    homePage
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(folderName)
      .selectFolderItem()
      .clickOkBtnAndGoFolderConfig();
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickFolderNameLink()
      .getFolderHeader()
      .should('be.visible')
      .and('include.text', folderName);
  }); 

  it('AT_04.03_008|<My View> Verify that the user can open the selected Multibranch Pipeline', () => {
    cy.createMultiBranchPipeline(multibranchPipelineName);
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickMultiBranchPipelineNameLink()
      .getMultiBranchPipelineHeader()
      .should('be.visible')
      .and('include.text', multibranchPipelineName);
  }); 
});
  
    


