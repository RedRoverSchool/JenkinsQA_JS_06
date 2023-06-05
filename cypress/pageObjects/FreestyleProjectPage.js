import FreestyleProjectRenamePage from "./FreestyleProjectRenamePage";

class FreestyleProjectPage {
    getRenameSideMenuLink = () => cy.get('#side-panel a[href$="rename"]');
    getFreestyleProjectHeader = () => cy.get('#main-panel h1');  
    
    clickRenameSideMenuLink() {
        this.getRenameSideMenuLink().click();
        return new FreestyleProjectRenamePage();
    }    
}

export default FreestyleProjectPage;