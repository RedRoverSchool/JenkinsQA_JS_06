import HomePage from "./HomePage";
import OrgFolderConfigurePage from "./OrgFolderConfigurePage";

class OrgFolderPage {
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getEnableProjectForm = () => cy.get('#enable-project');
    getDescription = () => cy.get('#view-message');
    getDisableProjectForm = () => cy.get('#disable-project');
    getDisableButton = () => cy.get('#disable-project button[name="Submit"]');
    getEnableButton = () => cy.get('#enable-project button[name="Submit"]');

    clickGoToDashboard() {
        this.getDashboard().click();
        return new HomePage();
    }

    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new OrgFolderConfigurePage();
    }

    clickDisableButton() {
        this.getDisableButton().realHover().click();
        return this;
    }

    clickEnableButton() {
        this.getEnableButton().click();
        return this;
    }
}

export default OrgFolderPage;