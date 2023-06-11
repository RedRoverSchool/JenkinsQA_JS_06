import FolderPage from "./FolderPage";

class FolderConfirmRenamePage{
    getFolderNewNameField = () => cy.get('.setting-main [name="newName"]')
    getFolderRenameBtn = () => cy.get('button[name="Submit"]')

    typeFolderNewNameField(folderNewName){
        this.getFolderNewNameField().clear().type(folderNewName);
        return this;
    };
    
    clickFolderRenameBtn(){
        this.getFolderRenameBtn().click()
        return new FolderPage;
    }
}
export default FolderConfirmRenamePage;