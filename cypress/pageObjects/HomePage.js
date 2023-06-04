import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";

class HomePage {
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
    getNewItemSideMenuLink = () => cy.get('a[href="newJob"]');
    getHomepageHeader = () => cy.get('.empty-state-block h1'); 


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
