import HomePage from "./HomePage";
import OrgFolderConfigurePage from "./OrgFolderConfigurePage";

class OrgFolderPage {
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getEnableProjectForm = () => cy.get('#enable-project');
    getDescription = () => cy.get('#view-message');
    getDisplayName = () => cy.get('#main-panel h1')

    clickGoToDashboard() {
        this.getDashboard().click();
        return new HomePage();
    }

    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new OrgFolderConfigurePage();
    }
}

export default OrgFolderPage;