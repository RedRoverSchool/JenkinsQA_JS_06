import HomePage from "./HomePage";
import MultiConfigurationProjectConfigurePage from "./MultiConfigurationProjectConfigurePage";

class MultiConfigurationProjectPage {
    getDeleteSideMenuLink = () => cy.get('a[data-message^="Delete"]');
    getMultiConfigurationProjectHeader = () => cy.get('#main-panel h1'); 
    getConfigureSideMenuLink = () => cy.get('[href$="configure"]');
    getDeleteMultiConfProject = () => cy.get('a[data-url$=doDelete]');
    getDescriptionField = () => cy.get('#description div:first-child');
    getDisableProjectBtn = () => cy.get('button.jenkins-button  ');
    getDisableProjectMsg = () => cy.get('.warning form');
    getEnableBtn = () => cy.get('.warning form [name ="Submit"]');

    clickDeleteSideMenuLink() {
        this.getDeleteSideMenuLink().click();
        return new HomePage();
    };

    clickConfigureSideMenuLink() {
        this.getConfigureSideMenuLink().click();
        return new MultiConfigurationProjectConfigurePage;
    };

    clickDeleteMultiConfigurationProject() {
        this.getDeleteMultiConfProject().click()
        return new HomePage
    };

    clickDisableProjectBtn() {
        this.getDisableProjectBtn().click();
        return this;
    };
}
export default MultiConfigurationProjectPage;
