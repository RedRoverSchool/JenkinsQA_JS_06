import HomePage from "./HomePage";

class PipelinePage {
    getPipelinePageHeadline = () => cy.get('#main-panel > h1');
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");

    clickGoToDashboard() {
        this.getDashboard().click();
        return new HomePage();
    }
} 

export default PipelinePage;