/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import { freestyleProjectName } from "../../fixtures/pom_fixtures/newItemPage.json";
import { headerText } from "../../fixtures/pom_fixtures/freestyleProjectPage.json";
import {pipelineName} from "../../fixtures/pom_fixtures/newItemPage.json";
import DashboardBradcrumbs from "../../pageObjects/DashboardBradcrumbs";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import MyViewPage from "../../pageObjects/MyViewPage";

describe('myView', () => {

  const homePage = new HomePage();

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

   const dashboardBradcrambs = new DashboardBradcrumbs();
   const headerAndFooter = new HeaderAndFooter();

    it('AT_04.03_001|< My View> Verify that user can open selected Pipeline', () => {
      dashboardBradcrambs
          .clickNewItemBtn()
          .typeNewItemNameInputField(pipelineName)
          .selectItemOptionPipeline()
          .clickOkBtn()
          .clickSaveBtn();
      dashboardBradcrambs
          .clickDashboardBtn();
      headerAndFooter
          .clickUserDropDownBtn()
          .selectUserMyViewsMenu()
          .clickProjectNameLink()
          .getPipelinePageHeadline()
          .should('be.visible')
          .and('include.text', pipelineName)
  })

});
