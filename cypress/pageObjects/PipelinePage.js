import HomePage from "./HomePage";
import pipelinePageData from "../fixtures/pom_fixtures/pipelinePage.json";
import newItemPageData from "../fixtures/pom_fixtures/newItemPage.json";

class PipelinePage {
    getPipelinePageHeadline = () => cy.get('#main-panel > h1');
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");
    getPipelineMenuList = () => cy.get('.task-link-wrapper');

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

} 

export default PipelinePage;