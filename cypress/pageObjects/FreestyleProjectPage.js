import FreestyleProjectRenamePage from "./FreestyleProjectRenamePage";
import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage"

class FreestyleProjectPage {
    getConfigureSideMenuLink = () => cy.get('a[href$="configure"]')
    getRenameSideMenuLink = () => cy.get('#side-panel a[href$="rename"]');
    getFreestyleProjectHeader = () => cy.get('#main-panel h1');  
    
    clickConfigureSideMenuLink() {
        this.getConfigureSideMenuLink().click()
        return new FreestyleProjectConfigurePage()
    };
    clickRenameSideMenuLink() {
        this.getRenameSideMenuLink().click();
        return new FreestyleProjectRenamePage();
    }    
}

export default FreestyleProjectPage;