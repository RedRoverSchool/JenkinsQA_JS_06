import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getGitHubProjectCheckbox = () => cy.get('.jenkins-checkbox [name="githubProject"]');
    getProjectUrlInputField = () => cy.get('input[name="_.projectUrlStr"]');
    getSaveBtn = () => cy.get('button[name="Submit"]');
    
    clickSaveBtnAndGoFreestyleProject() {
        this.getProjectConfigSaveBtn().click();
        return new FreestyleProjectPage();
    };
    
    checkGitHubProjectCheckbox() {
        this.getGitHubProjectCheckbox().check({force: true});
        return this;
    }

    typeProjectUrl(URL) {
        this.getProjectUrlInputField().type(URL);
        return this;
    }

    clickSaveBntAndGoFreestyleProjectPage() {
        this.getSaveBtn().click();
        return new FreestyleProjectPage();
    }

}

export default FreestyleProjectConfigurePage;