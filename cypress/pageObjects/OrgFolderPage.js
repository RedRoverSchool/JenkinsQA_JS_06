import HomePage from "./HomePage";
import OrgFolderConfigurePage from "./OrgFolderConfigurePage";
import OrgFolderMoveChoicePage from "./OrgFolderMoveChoicePage";

class OrgFolderPage {
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");
    getConfigureTheProjectLink = () => cy.get('.content-block [href="./configure"]');
    getEnableProjectForm = () => cy.get('#enable-project');
    getDescription = () => cy.get('#view-message');
    getMoveInSideMenulink = () => cy.get('#side-panel a[href*="move"]')
    getDisplayName = () => cy.get('#main-panel h1')

    clickGoToDashboard() {
        this.getDashboard().click();
        return new HomePage();
    }

    clickConfigureTheProjectLink() {
        this.getConfigureTheProjectLink().click();
        return new OrgFolderConfigurePage();
    }

    clickMoveInSideMenuLink() {
        this.getMoveInSideMenulink().click()
        return new OrgFolderMoveChoicePage
    }
}

export default OrgFolderPage;