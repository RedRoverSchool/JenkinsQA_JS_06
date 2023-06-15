import HomePage from "./HomePage";

class OrgFolderDeletePage {
    
    getDeleteButton = () => cy.get('button[name="Submit"]')

    clickDeleteButton() {
        this.getDeleteButton().click()
        return new HomePage
    }



}
export default OrgFolderDeletePage;