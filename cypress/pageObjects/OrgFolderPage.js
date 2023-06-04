import HomePage from "./HomePage";

class OrgFolderPage {
    getDashboard = () => cy.get('#breadcrumbs a').contains("Dashboard");

    clickGoToDashboard() {
        this.getDashboard().click();
        return new HomePage();
     }
}

export default OrgFolderPage;