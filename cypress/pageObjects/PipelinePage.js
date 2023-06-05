import HomePage from "./HomePage";

class PipelinePage {
    getPipelinePageHeadline = () => cy.get('#main-panel > h1');
    getPipelinePageLogo = () => cy.get('.logo')

    clickPipelinePageLogo(){
        this.getPipelinePageLogo().click();
        return new HomePage();
    }
} 

export default PipelinePage;