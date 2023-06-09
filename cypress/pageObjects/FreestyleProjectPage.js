import FreestyleProjectRenamePage from "./FreestyleProjectRenamePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage"
import HomePage from "./HomePage";
import GitHubPage from "./GitHubPage";

class FreestyleProjectPage {
    getConfigureSideMenuLink = () => cy.get('a[href$="configure"]')
    getRenameSideMenuLink = () => cy.get('#side-panel a[href$="rename"]');
    getFreestyleProjectHeader = () => cy.get('#main-panel h1');   
    getGitHubSideMenuLink = () =>  cy.get('[href="https://github.com/RedRoverSchool/JenkinsQA_JS_06/"]');  
    getFreestyleProjectDescription = () => cy.get('#description');
    getFreestyleProjectHeader = () => cy.get('#main-panel h1');
    getGitHubSideMenuLink = () => cy.get('[href="https://github.com/RedRoverSchool/JenkinsQA_JS_06/"]');
    getDisableProjectBtn = () => cy.get('form#disable-project').find('button[name="Submit"]');
    getHomePageLink = () => cy.get('#jenkins-home-link');
    getFullProjectName = () => cy.get('#main-panel')
    getDisabledProgectWarning = () => cy.get('.warning');
    getAddAndEditDescriptoinBtn = () => cy.get('#description-link');
    getDescriptionInputField = () => cy.get('.jenkins-input');
    getSaveDescriptionBtn = () => cy.get('.jenkins-button--primary');
    getSidePanelOptions = () => cy.get('#side-panel .task span a[href]');
    getDeleteSideMenuLink = () => cy.get('a[data-url$="/doDelete"]');

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
        return new GitHubPage();
    }

    clickHomePageLink() {
        this.getHomePageLink().click();
        return new HomePage();
    }

    clickDisableProjectBtn() {
        this.getDisableProjectBtn().click();
        return this;
    }

    clickAddAndEditDescriptoinBtn() {
        this.getAddAndEditDescriptoinBtn().click();
        return this
    }

    typeDescriptionToInputField(description) {
        this.getDescriptionInputField().type(description);
        return this
    }

    clickSaveDescriptionBtn() {
        this.getSaveDescriptionBtn().click();
        return this
    }

    clearDescriptionInputField() {
        this.getDescriptionInputField().clear();
        return this
    }

    checkLengthOfOptionsSidePanel() {
        this.getSidePanelOptions().should('have.length', 7)
        return this 
    }

    clickDeleteSideMenuLink() {
        this.getDeleteSideMenuLink().click();
        return new HomePage;
    }
    
}
export default FreestyleProjectPage;
