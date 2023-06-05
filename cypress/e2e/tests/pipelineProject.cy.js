/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
import newitemPage from "../../fixtures/pom_fixtures/newitemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe('pipelineProject',()=>{
    const homePage= new HomePage()
    const headerAndFooter = new HeaderAndFooter()

    it('AT_13.02_04|verify user can delete pipeline Project and project not displayed on homepage',()=>{
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(newitemPage.pipelineName)
        .selectPipelineItem()
        .clickOkBtnAndGoPipelineConfig();

        headerAndFooter
        .clickJenkinsHomeLink()
        .clickProjectDrpDwnBtn(newitemPage.pipelineName)
        .selectDeleteDrpDwnLink()
        .confirmPiplineDeletion()
        .getMainPanel()
        .should('not.have.text',newitemPage.pipelineName)                
    })
})
