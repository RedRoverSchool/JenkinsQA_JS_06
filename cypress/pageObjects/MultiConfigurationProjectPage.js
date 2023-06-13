import HomePage from "./HomePage";
import MultiConfigurationProjectConfigurePage from "./MultiConfigurationProjectConfigurePage";

class MultiConfigurationProjectPage {
    getDeleteSideMenuLink = () => cy.get('a[data-message^="Delete"]');
    getMultiConfigurationProjectHeader = () => cy.get('#main-panel h1'); 
    getConfigureSideMenuLink = () => cy.get('[href$="configure"]');
    getDeleteMultiConfProject = () => cy.get('a[data-url$=doDelete]');
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

}
export default MultiConfigurationProjectPage;
