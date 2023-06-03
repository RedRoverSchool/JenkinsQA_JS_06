import PeoplePage from "./PeoplePage";
import NewItemPage from "./NewItemPage";
import MyViewPage from "./MyViewPage";

class HomePage {
    getPeopleSideMenuLink = () => cy.get('a[href="/asynchPeople/"]');
    getNewItemSideMenuLink = () => cy.get('a[href="newJob"]');
    getMyViewSideMenuLink = () => cy.get('a[href$="my-views"]');


    clickPeopleSideMenuLink() {
        this.getPeopleSideMenuLink().click();
        return new PeoplePage;
    };

    clickNewItemSideMenuLink() {
        this.getNewItemSideMenuLink().click();
        return new NewItemPage();
    };

    clickMyViewSideMenuLink() {
        this.getMyViewSideMenuLink().click();
        return new MyViewPage();
    }
}
export default HomePage;
