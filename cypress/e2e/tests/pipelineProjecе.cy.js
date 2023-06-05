/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
import newitemPage from "../../fixtures/pom_fixtures/newitemPage.json";

describe('pipelineProject',()=>{
    const homePage= new HomePage()
      
    it('AT_13.02_04|verify user can delete pipeline Project and project not displayed on homepage',()=>{
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(newitemPage.pipelineName)
        .selectPipelineItem()
        .clickOkBtnAndGoPipelineConfig()
        .clickSaveBtnAndGoPipeline()
        .clickPipelinePageLogo()
        .clickPipelineTitleLink()
        .clickPipelineTitleBtn()
        .selectPipelineTitleDeleteOption()
        .confirmPiplineDeletion()
        .getMainPanel()
        .should('not.have.text',newitemPage.pipelineName)    
                     


    })
})