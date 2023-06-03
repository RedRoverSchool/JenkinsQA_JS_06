import HomePage from "./HomePage";

class MultiConfigurationProjectConfigurePage {
  getDeleteSideMenuLink = () => cy.get('a[data-message^="Delete"]');

  clickDeleteSideMenuLink() {
    this.getDeleteSideMenuLink().click();
    return new HomePage();
  }
}
export default MultiConfigurationProjectConfigurePage;
