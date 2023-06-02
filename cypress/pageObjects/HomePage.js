import NewItemPage from "./NewItemPage";

class HomePage {
    getNewItemSideMenuLink = () => cy.get('a[href="newJob"]');


    clickNewItemSideMenuLink() {
        this.getNewItemSideMenuLink().click();
        return new NewItemPage();
    };

}

export default HomePage;
