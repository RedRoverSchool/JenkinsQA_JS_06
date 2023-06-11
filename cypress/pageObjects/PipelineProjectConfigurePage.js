import HomePage from "./HomePage";

class PipelineProjectConfigurePage {
    getGitHubPipelineProjectCheckbox = () => cy.get('.jenkins-checkbox [name="githubProject"]');
    getPipelineProjectUrlInputField = () => cy.get('input[name="_.projectUrlStr"]');
    getPipelineSaveBtn = () => cy.get('button[name="Submit"]');

    checkGitHubProjectCheckbox() {
        this.getGitHubPipelineProjectCheckbox().check({force: true});
        return this;
    }

    typePipelineProjectUrl(URL) {
        this.getPipelineProjectUrlInputField().type(URL);
        return this;
    }

    clickPipelineSaveBtn(){
        this. getPipelineSaveBtn().click()
        return new HomePage;
    }
}
export default PipelineProjectConfigurePage