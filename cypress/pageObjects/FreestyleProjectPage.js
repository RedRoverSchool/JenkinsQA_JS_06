import FreestyleProjectRenamePage from "./FreestyleProjectRenamePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage"

class FreestyleProjectPage {
    getConfigureSideMenuLink = () => cy.get('a[href$="configure"]')
    getRenameSideMenuLink = () => cy.get('#side-panel a[href$="rename"]');
    getFreestyleProjectHeader = () => cy.get('#main-panel h1');
    getGitHubSideMenuLink = () => cy.get('[href="https://github.com/RedRoverSchool/JenkinsQA_JS_06/"]');
    getDisableProjectBtn = () => cy.get('form#disable-project').find('button[name="Submit"]');

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
}

export default FreestyleProjectPage;