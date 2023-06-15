
import OrgFolderPage from "./OrgFolderPage";

class OrgFolderMoveChoicePage {
    
    getDrpDwnMenuMoveDestination = () => cy.get('select[name="destination"]');
    getMoveButton = () => cy.get('button[name="Submit"]')

    selectDestinationMoveJob(name) {
        this.getDrpDwnMenuMoveDestination(`/${name}`)
        .select(`Jenkins » ${name}`)
        .should('have.value', `/${name}`)
        return this
    }

    clickMoveButton() {
        this.getMoveButton().click()
        return new OrgFolderPage
    }



}
export default OrgFolderMoveChoicePage;