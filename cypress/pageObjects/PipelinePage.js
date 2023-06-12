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
    }

    clickSaveBtn() {
        this.getSaveBtn().first().click();
        return this;
    }

    typeAdditionalDescriptionOnPiplinePage(){
        this.getDescriptionTextarea().type('{moveToEnd}').type(pipelinePageData.additionalDescriptionPipeline);
        return this;
    };

} 

export default PipelinePage;