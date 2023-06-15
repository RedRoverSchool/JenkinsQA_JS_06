import UserProfilePage from "./UserProfilePage";
import NewItemPage from "./NewItemPage";

class PeoplePage {
    getUserNameLink = () => cy.get('#people a[href*="/user/"]').contains(Cypress.env('local.admin.username'));
    getPeoplePageHeader = () => cy.get('.jenkins-app-bar__content h1')
    getNewItemSideMenuLink = () => cy.get('a[href="/view/all/newJob"]');
    getCreatedUserLink = () => cy.get('#people a[href*="/user/"]');

    clickUserNameLink() {
        this.getUserNameLink().click();
        return new UserProfilePage();
    };

    trimPeoplePageHeader() {
        return this.getPeoplePageHeader().then(($el) => {
            return $el.text().trim();
        });
    };

    clickNewItemSideMenuLink() {
        this.getNewItemSideMenuLink().click();
        return new NewItemPage();
    };
    
    clickCreatedUserNameLink(userName) {
        this.getCreatedUserLink().contains(userName).click();
        return new UserProfilePage();
    };
}
export default PeoplePage;
