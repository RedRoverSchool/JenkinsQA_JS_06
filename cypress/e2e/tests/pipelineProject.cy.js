/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import gitHubPage from "../../fixtures/pom_fixtures/gitHubPage.json"; 


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
    it('AT_13.06.01 | <Pipeline|Configuration>verify the ability to paste link from GitHub project and user is displayed icon GitHub',()=>{
        homePage
            .clickCreateJobLink()
            .typeNewItemNameInputField(newItemPageData.pipelineName)
            .selectPipelineItem()
            .clickOkBtnAndGoPipelineConfig();

        headerAndFooter
            .clickJenkinsHomeLink()
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.pipelineName)
            .clickPipelineProjectNameDropdownConfigureLink()
            .checkGitHubProjectCheckbox()
            .typePipelineProjectUrl(gitHubPage.gitHubProjectURL)
            .clickPipelineSaveBtn()
            .getSideMenuPanel()
            .should('have.length',9)
            .and('contain','GitHub');             
    })
})
