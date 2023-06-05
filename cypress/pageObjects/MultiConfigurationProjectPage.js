import HomePage from "./HomePage";

class MultiConfigurationProjectPage {
    getDeleteSideMenuLink = () => cy.get('a[data-message^="Delete"]');
    getMultiConfigurationProjectHeader = () => cy.get('#main-panel h1'); 
    
    clickDeleteSideMenuLink() {
        this.getDeleteSideMenuLink().click();
        return new HomePage();
    }
}
export default MultiConfigurationProjectPage;
