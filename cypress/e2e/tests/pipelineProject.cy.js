/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";


describe('pipelineProject',()=>{
    const homePage= new HomePage()
    const headerAndFooter = new HeaderAndFooter()

    it('AT_13.02_04|verify user can delete pipeline Project and project not displayed on homepage',()=>{
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(newItemPageData.pipelineName)
        .selectPipelineItem()
        .clickOkBtnAndGoPipelineConfig();

        headerAndFooter
        .clickJenkinsHomeLink()
        .hoverAndClickProjectDrpDwnBtn(newItemPageData.pipelineName)
        .selectDeleteDrpDwnLink()
        .getMainPanel()
        .should('not.include.text', newItemPageData.pipelineName)
        .and('include.text','Welcome to Jenkins!')                
    })
    it('AT_13.03.05 | <Pipeline>User can rename pipeline project',()=>{
        homePage
            .clickCreateJobLink()
            .typeNewItemNameInputField(newItemPageData.pipelineName)
            .selectPipelineItem()
            .clickOkBtnAndGoPipelineConfig();

        headerAndFooter
            .clickJenkinsHomeLink()
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.pipelineName)
            .selectRenamePipelineProjectDrpDwnMenuBtn()
            .typePipelineProjectNameInputField(newItemPageData.newpipelineName)
            .clickPipelineProjectRenameBtn()
            .getPipelinePageHeadline()
            .should('contain.text',newItemPageData.newpipelineName)
    })

    it('AT_13.02.003 | Pipeline Delete created project within the selected Pipeline itself', () => {
        cy.createPipeline(newItemPageData.pipelineName);

        homePage
            .clickPipelineProjectName(newItemPageData.pipelineName)
            .clickDeletePipelineBtn()
            .clickConfirmDeletePipeline();
            
        homePage
            .getMainPanel()
            .should('not.have.text', newItemPageData.pipelineName);
    });
})
