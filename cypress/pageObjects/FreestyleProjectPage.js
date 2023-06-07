import FreestyleProjectRenamePage from "./FreestyleProjectRenamePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage"

class FreestyleProjectPage {
    getConfigureSideMenuLink = () => cy.get('a[href$="configure"]')
    getRenameSideMenuLink = () => cy.get('#side-panel a[href$="rename"]');
    getFreestyleProjectHeader = () => cy.get('#main-panel h1');
    getGitHubSideMenuLink = () => cy.get('[href="https://github.com/RedRoverSchool/JenkinsQA_JS_06/"]');
    getDisableProjectBtn = () => cy.get('form#disable-project').find('button[name="Submit"]');
    getAddDescriptoinLink = () => cy.get('#description-link');
    getInputField = () => cy.get('.jenkins-input');
    getSaveDescriptionBtn = () => cy.get('.jenkins-button--primary');
    getEditDescriptionBtn = () => cy.get('a[href$="editDescription"]');

    clickConfigureSideMenuLink() {
        this.getConfigureSideMenuLink().click()
        return new FreestyleProjectConfigurePage()
    };
    clickRenameSideMenuLink() {
        this.getRenameSideMenuLink().click();
        return new FreestyleProjectRenamePage();
    }

    clickGitHubSideMenuLink() {
        this.getGitHubSideMenuLink().click();
    }
    clickgetAddDescriptoinLinkBtn() {
        this.getAddDescriptoinLink().click()
        return this
    }
    typeDescriptionToInputField(description) {
        this.getInputField().type(description)
        return this
    }
    clickSaveDescriptionBtn() {
        this.getSaveDescriptionBtn().click()
        return this
    }
    clickEditDescriptionBtn() {
        this.getEditDescriptionBtn().click()
        return this
    }
    clearInputField() {
        this.getInputField().clear()
        return this
    }
    typeEditDescriptionToInputField(editDescription) {
        this.getInputField().type(editDescription)
        return this
    }
}

export default FreestyleProjectPage;