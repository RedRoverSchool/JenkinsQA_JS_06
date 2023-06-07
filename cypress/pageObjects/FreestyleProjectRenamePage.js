import FreestyleProjectPage from "./FreestyleProjectPage";

class FreestyleProjectRenamePage {
    getNewNameInputFild = () => cy.get('input[name=newName]');
    getRenameBtn = () => cy.get('button[name=Submit]');
    getErrorTitle = () => cy.get('#main-panel h1');
    getErrorMessage = () => cy.get('#main-panel p');

    typeNewNameInputFild (name) {
        this.getNewNameInputFild().clear().type(name);
        return this;
    }

    clickRenameBtn () {
        this.getRenameBtn().click();
        return new FreestyleProjectPage();
    } 
}

export default FreestyleProjectRenamePage;