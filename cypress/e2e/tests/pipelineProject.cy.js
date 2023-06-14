/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import gitHubPage from "../../fixtures/pom_fixtures/gitHubPage.json";
import pipelineConfigurePageData from "../../fixtures/pom_fixtures/pipelineConfigurePage.json";
import pipelinePageData from "../../fixtures/pom_fixtures/pipelinePage.json";
import homePageData from "../../fixtures/pom_fixtures/homePage.json";


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

    it('AT_13.05_001 | Pipeline | Edit existing description of the pipeline by adding new text to the end',()=>{
        cy.createPipelineWithDescription(newItemPageData.pipelineName);

        homePage
            .clickPipelineProjectName(newItemPageData.pipelineName)
            .clickEditDescriptionBtn()
            .typeAdditionalDescriptionOnPiplinePage()
            .clickSaveBtn()
            .getDescription()
            .should('have.text', pipelineConfigurePageData.firstDescription + pipelinePageData.additionalDescriptionPipeline)
    });

    it.only('AT_13.02.003 | Pipeline | Delete with breadcrumb dropdown menu',()=>{
        cy.createPipeline(newItemPageData.pipelineName);

        homePage
            .clickPipelineProjectName(newItemPageData.pipelineName)
            .clickDashboardDropdownBtn()
            .clickProjectBreadcrumbsMenu()
            .clickDeletePipelineMenuFromBreadcrumbs()
            .getMainPanel()
            .should('not.have.text', newItemPageData.pipelineName)
            .and('include.text', homePageData.homePageHeader); 
    });
})
