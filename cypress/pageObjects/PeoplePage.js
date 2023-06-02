import UserProfilePage from "./UserProfilePage";

class PeoplePage {
    getUserNameLink = () => cy.get('#people a[href*="/user/"]').contains(Cypress.env('local.admin.username'));


    clickUserNameLink() {
        this.getUserNameLink().click();
        return new UserProfilePage();
    };
}
export default PeoplePage;
