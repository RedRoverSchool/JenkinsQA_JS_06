/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import myViewData from "../../fixtures/pom_fixtures/myView.json";

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
      cy.createPipeline(newItemPageData.pipelineName)  
        
      headerAndFooter
        .clickUserDropDownBtn()
        .selectUserMyViewsMenu()
        .clickPipelineNameLink()
        .getPipelinePageHeadline()
        .should('be.visible')
        .and('include.text', newItemPageData.pipelineName);
  });

  it('AT_04.03_003 |<My View> Verify that the user can open the selected Freestyle project', () => {
    cy.createFreestyleProject(newItemPageData.freestyleProjectName);
                  
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickFreestyleProjectNameLink()
      .getFreestyleProjectHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.freestyleProjectName);
  });

  it('AT_04.03_007 |<My View> Verify that the user can open the selected Multi-configuration project', () => {
    cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
                
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickMultiConfigurationProjectNameLink()
      .getMultiConfigurationProjectHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.multiConfigurationProjectName);
  });

  it('AT_04.03_002|<My View> Verify that the user can open the selected Folder', () => {
    cy.createFolderProject(newItemPageData.folderName);
                
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickFolderNameLink()
      .getFolderHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.folderName);
  }); 

  it('AT_04.03_008|<My View> Verify that the user can open the selected Multibranch Pipeline', () => {
    cy.createMultiBranchPipeline(newItemPageData.multibranchPipelineName);
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickMultiBranchPipelineNameLink()
      .getMultiBranchPipelineHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.multibranchPipelineName);
  }); 

  it('AT_09.01_005 | My Views > Create new view > Verify "+" sign above jobs list is available', () => {
    homePage
      .clickMyViewSideMenuLink()
      .clickNewItemSideMenuLink()
      .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
      .selectFreestyleProjectItem()
      .clickOkBtnAndGoFreestyleProjectConfig()
      .clickSaveBtnAndGoFreestyleProject()
      .clickHomePageLink()
      .clickMyViewSideMenuLink()
      .verifyAndClickAddNewViewLink()
      .getHeaderOfNewViewNameInputField()
      .should('have.text', myViewData.headerOfNewViewNameInputField);
  });

  it('AT_04.03_009|<My View> Verify that the user can open the selected Organization Folder', () => {
    cy.createOrgFolderProject(newItemPageData.orgFolderName);
            
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickOrgFolderNameLink()
      .getOrgFolderHeader()
      .should('be.visible')
      .and('include.text', newItemPageData.orgFolderName);
  }); 

  it('AT_04.03_011|<My View>  Sort items by descending order', () => {
    cy.createPipeline(newItemPageData.pipelineName);
    cy.createMultBranchPipeline(newItemPageData.multibranchPipelineName); 
    cy.createOrganizationFolderProject(newItemPageData.orgFolderName);
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .verifyJobNameLinksAsc()
      
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .clickSortNameArrow()
      .verifyJobNameLinksDesk()
   });
   
  it('AT 09.02.005| My Views > Add description', () => {
    homePage
      .clickMyViewSideMenuLink()
      .clickAddDescriptionBtn()
      .typeDescriptionIntoInputField(myViewData.addDescription)
      .getDescriptionText()
      .should('have.text', myViewData.addDescription);
  });

  it('AT_09.03.002 | <My Views>Edit description text is saved', () => {
    homePage
      .clickMyViewSideMenuLink()
      .clickAddDescriptionBtn()
      .typeDescriptionIntoInputField(myViewData.addDescription)
      .clickEditDescriptionLink()
      .typeDescriptionIntoInputField(myViewData.editedDescription)
      .getDescriptionText()
      .should('be.visible')
      .and('have.text', myViewData.editedDescription);
  });

  it('AT_04.03_012 |<My View> Verify that user can Sсhedule a build', () => {
    cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);     
    headerAndFooter
      .clickUserDropDownBtn()
      .selectUserMyViewsMenu()
      .triggerBuildstatusIcon()
      .assertNotBuiltTooltip()
      .assertLastSuccesStatus()
      .assertLastFalureStatus()
      .assertLastDurationStatus()
      .triggerSceduleBuidBtn()
      .assertAndClickScheduleBuidTooltip();
      
    headerAndFooter
      .clickJenkinsHomeLink()
      .triggerBuildstatusIcon()
      .getSuccessBuiltTooltip().should('be.visible');
  });
});
