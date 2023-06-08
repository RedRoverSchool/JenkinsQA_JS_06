/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { headerText } from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import {freestyleProjectName, pipelineName, folderName, multibranchPipelineName, multiConfigurationProjectName, orgFolderName} from "../../fixtures/pom_fixtures/newItemPage.json";

import myView from "../../fixtures/pom_fixtures/myView.json";

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
      cy.createPipeline(pipelineName);  
        
      headerAndFooter
        .clickUserDropDownBtn()
        .selectUserMyViewsMenu()
        .clickPipelineNameLink()
        .getPipelinePageHeadline()
        .should('be.visible')
        .and('include.text', pipelineName);
  });

  it('AT_04.03_003 |<My View> Verify that the user can open the selected Freestyle project', () => {
    cy.createFreestyleProject(freestyleProjectName);
                  
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickFreestyleProjectNameLink()
      .getFreestyleProjectHeader()
      .should('be.visible')
      .and('include.text', freestyleProjectName);
  });

  it('AT_04.03_007 |<My View> Verify that the user can open the selected Multi-configuration project', () => {
    cy.createMultiConfigurationProject(multiConfigurationProjectName);
                
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickMultiConfigurationProjectNameLink()
      .getMultiConfigurationProjectHeader()
      .should('be.visible')
      .and('include.text', multiConfigurationProjectName);
  });

  it('AT_04.03_002|<My View> Verify that the user can open the selected Folder', () => {
    cy.createFolderProject(folderName);
                
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

  it('AT_09.01_005 | My Views > Create new view > Verify "+" sign above jobs list is available', () => {
    homePage
      .clickMyViewSideMenuLink()
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(freestyleProjectName)
      .selectFreestyleProjectItem()
      .clickOkBtnAndGoFreestyleProjectConfig()
      .clickSaveBtnAndGoFreestyleProject()
      .clickHomePageLink()
      .clickMyViewSideMenuLink()
      .verifyAndClickAddNewViewLink()
      .getHeaderOfNewViewNameInputField()
      .should('have.text', myView.headerOfNewViewNameInputField)
  });

  it('AT_04.03_009|<My View> Verify that the user can open the selected Organization Folder', () => {
    cy.createOrgFolderProject(orgFolderName);
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickOrgFolderNameLink()
      .getOrgFolderHeader()
      .should('be.visible')
      .and('include.text', orgFolderName);
  }); 
});
