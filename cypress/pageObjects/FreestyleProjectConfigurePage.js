import FreestyleProjectPage from "./FreestyleProjectPage";
import HomePage from "./HomePage";

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
    getLeftSideMenuPostBuldActionsBtn = () => cy.get('button[data-section-id="post-build-actions"]');
    getAddPostBuildActionBtn = () => cy.get('button.hetero-list-add').contains('Add post-build action');
    getAddPostBuildActionDropDownMenuItems = () => cy.get('.config-table .jenkins-section:nth-child(11) li .yuimenuitemlabel');
    getPostBuildActionWindow = () => cy.get('[name="publisher"].repeated-chunk'); 
    getPostBuildActionWindowHeader = () => cy.get('.repeated-chunk__header');
    getHomePage = () => cy.get('#jenkins-home-link');
    
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

    clickLeftSideMenuPostBuldActionsBtn() {
        this.getLeftSideMenuPostBuldActionsBtn().click()
        return this
    };
    clickAddPostBuildActionBtn() {
        this.getAddPostBuildActionBtn().click()
        return this
    };
    selectPostBuildActionDropDownMenuItem(idx) {
        this.getAddPostBuildActionDropDownMenuItems().eq(idx).click()
        return this
    };
    checkPostBuildActionWindowHeaderName(name) {
        this.getPostBuildActionWindowHeader()
            .should('include.text', name)
        return this    
    };

    clickHomePage() {
        this.getHomePage().click()
        return new HomePage
    }
}

export default FreestyleProjectConfigurePage;