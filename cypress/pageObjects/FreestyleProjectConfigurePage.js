import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getLeftSidePanelBuildStepsBtn = () => cy.get('button[data-section-id="build-steps"]')
    getBuildStepSectionName = () => cy.get('#build-steps.jenkins-section__title')
    getAddBuildStepBtn = () => cy.get('button.hetero-list-add').contains('Add build step')
    getAddBuildStepMenuList = () => cy.get('.config-table .jenkins-section:nth-child(10) li [href]')
    getBuilderWindow = () => cy.get('.repeated-chunk[name="builder"]')
    getBuilderWindowHeader = () => cy.get('.repeated-chunk__header')
    getGitHubProjectCheckbox = () => cy.get('.jenkins-checkbox [name="githubProject"]');
    getProjectUrlInputField = () => cy.get('input[name="_.projectUrlStr"]');
    getSaveBtn = () => cy.get('button[name="Submit"]');
    getDescriptionInputField = () => cy.get('textarea[name="description"]');
    
    clickSaveBtnAndGoFreestyleProject() {
        this.getProjectConfigSaveBtn().click();
        return new FreestyleProjectPage();
    }; 
    clickLeftSidePanelBuildStepsBtn() {
        this.getLeftSidePanelBuildStepsBtn().click()
        return this
    };
    clickAddBuildStepBtn() {
        this.getAddBuildStepBtn().click()
        return this
    };
    selectBuildStepFromMenuListItem(idx) {
        this.getAddBuildStepMenuList().eq(idx).click()
        return this
    };
    
    checkBuilderWindowHeaderName(name) {
        this.getBuilderWindowHeader()
            .should('include.text', name)
        return this
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

    typeDescriptionInputField(name) {
        this.getDescriptionInputField().clear().type(name);
        return this;
    };

}

export default FreestyleProjectConfigurePage;