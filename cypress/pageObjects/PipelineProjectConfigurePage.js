import HomePage from "./HomePage";

class PipelineProjectConfigurePage {
    getGitHubPipelineProjectCheckbox = () => cy.get('.jenkins-checkbox [name="githubProject"]');
    getPipelineProjectUrlInputField = () => cy.get('input[name="_.projectUrlStr"]');
    getPipelineSaveBtn = () => cy.get('button[name="Submit"]');
    getspeedPipelineProjectCheckbox=()=> cy.get('.jenkins-checkbox #cb6')
    getspeedPipelineProjectDrpDnwMemuList=()=> cy.get('.setting-input option')

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
    clickPipelineSaveBtn(){
        this.getPipelineSaveBtn().click()
        return new HomePage;
    }
    clickspeedPipelineProjectCheckbox(){
        this.getspeedPipelineProjectCheckbox().check({force: true});
        return this;
    }
}
export default PipelineProjectConfigurePage