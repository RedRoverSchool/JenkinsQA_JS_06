import HomePage from "./HomePage";

class PipelinePage {
    getPipelinePageHeadline = () => cy.get('#main-panel > h1');
    getPipelinePageLogo = () => cy.get('.jenkins-breadcrumbs__list-item')

    clickPipelinePageLogo(){
        this.getPipelinePageLogo().click();
        return new HomePage();
    }
} 

export default PipelinePage;