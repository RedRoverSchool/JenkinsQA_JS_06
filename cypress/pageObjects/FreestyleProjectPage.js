import FreestyleProjectRenamePage from "./FreestyleProjectRenamePage";

class FreestyleProjectPage {
    getRenameProjectMenu = () => cy.get('#side-panel a[href$="rename"]');
    getProjectName = () => cy.get('.job-index-headline');
    
    selectRenameProjectMenu () {
        this.getRenameProjectMenu().click();
        return new FreestyleProjectRenamePage;
    }    
}

export default FreestyleProjectPage;



