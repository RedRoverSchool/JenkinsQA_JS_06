import HomePage from "./HomePage";

class MultiConfigurationProjectPage {
    getDeleteSideMenuLink = () => cy.get('a[data-message^="Delete"]');

    clickDeleteSideMenuLink() {
        this.getDeleteSideMenuLink().click();
        return new HomePage();
    }
}
export default MultiConfigurationProjectPage;
