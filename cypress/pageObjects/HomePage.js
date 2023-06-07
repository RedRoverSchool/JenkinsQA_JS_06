import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";

class HomePage {
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
    getNewItemSideMenuLink = () => cy.get('a[href="newJob"]');
    getMultibranchName = () => cy.get('a[href="job/Multibranch_Pipeline_Job/"]');
    getDropdownMenuDelete = () => cy.get('.icon-edit-delete');
    
    selectDropdownMenuDelete() {
        this.getDropdownMenuDelete().click()
        return new MultibranchPipelineDeletePage();
    }
    
    clickDropDownMenu() {
        this.getMultibranchName().realHover().click();
        return this;
    }

    clickPeopleSideMenuLink() {
        this.getPeopleSideMenuLink().click();
        return new PeoplePage;
    };

    clickNewItemSideMenuLink() {
        this.getNewItemSideMenuLink().click();
        return new NewItemPage();
    };
}
export default HomePage;
