import MultiConfProjectConfirmRenamePage from "./MultiConfProjectConfirmRenamePage";

class MultiConfProjectRenamePage {
    getMultiConfProjectNameInputField = () => cy.get('input[name="newName"]');
    getMultiConfProjectRenameBtn = () => cy.get('button[name=Submit]'); 
    
    typeMultiConfProjectNameInputField(name) {
        this.getMultiConfProjectNameInputField().clear().type(name);
        return this
    }
    clickMultiConfProjectRenameBtn() {
        this.getMultiConfProjectRenameBtn().click();
        return new MultiConfProjectConfirmRenamePage();
    }
}
export default MultiConfProjectRenamePage;