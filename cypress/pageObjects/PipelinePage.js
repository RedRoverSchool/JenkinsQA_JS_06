import HomePage from "./HomePage";
import pipelinePageData from "../fixtures/pom_fixtures/pipelinePage.json";
import newItemPageData from "../fixtures/pom_fixtures/newItemPage.json";

class PipelinePage {
    getPipelinePageHeadline = () => cy.get('#main-panel > h1');
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");
    getPipelineMenuList = () => cy.get('.task-link-wrapper');
    getDescriptionTextarea = () => cy.get('textarea[name = "description"]');
    getSaveBtn = () => cy.get('button[name="Submit"]');
    getEditDescriptionBtn = () => cy.get('#description-link').should('contain', 'Edit description');
    getDescription = () => cy.get('#description div:nth-child(1)');
    getDashboardDropdownBtn = () => cy.get('#breadcrumbs > :nth-child(3) > .model-link');
    getBreadcrumbsPipelineName = () => cy.get ('.jenkins-breadcrumbs__list-item > a[href^="/job/"]');
    getBreadcrumbsPipelineMenuListButton = () => cy.get ('.jenkins-breadcrumbs__list-item > a[href^="/job/"] button');
    getBreadcrumbsPipelineMenuListItems = () => cy.get('.yuimenuitem a[href^="#"]');

    clickGoToDashboard() {
        this.getDashboard().click();
        return new HomePage();
    }

    clickDeletePipelineBtn() {
        this.getPipelineMenuList().contains(pipelinePageData.textDeletePipeline).click();
        return this;
    };

    clickConfirmDeletePipeline() {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`${pipelinePageData.confirmationOfDeletingFromSideBar} ‘${newItemPageData.pipelineName}’?`);
        });
    };

    clickEditDescriptionBtn() {
        this.getEditDescriptionBtn().click();
        return this;
    };

    clickSaveBtn() {
        this.getSaveBtn().first().click();
        return this;
    };

    typeAdditionalDescriptionOnPiplinePage(){
        this.getDescriptionTextarea().type('{moveToEnd}').type(pipelinePageData.additionalDescriptionPipeline);
        return this;
    };

    clickDashboardDropdownBtn() {
        this.getDashboardDropdownBtn().realHover().click();
        return this;
    };
    
    clickProjectBreadcrumbsMenu() {
        this.getBreadcrumbsPipelineName().realHover();
        this.getBreadcrumbsPipelineMenuListButton().click();
        return this;
    };

    clickDeletePipelineMenuFromBreadcrumbs() {
        this.getBreadcrumbsPipelineMenuListItems().contains(pipelinePageData.textDeletePipeline).click();
        return new HomePage();
    };

    clickCancelConfirmDeletePipeline() {
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`${pipelinePageData.confirmationOfDeletingFromSideBar} ‘${newItemPageData.pipelineName}’?`);
            return false;
        });
        return this;
    };

    verifyPipelinePageUrl() {
        cy.url().should('contain', `${pipelinePageData.pipelinePageUrl}${newItemPageData.pipelineName}`);
        return this;
    };
};

export default PipelinePage;