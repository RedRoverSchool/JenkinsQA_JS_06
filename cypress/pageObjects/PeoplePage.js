import UserProfilePage from "./UserProfilePage";

class PeoplePage {
    getUserNameLink = () => cy.get('#people a[href*="/user/"]').contains(Cypress.env('local.admin.username'));
    getPeoplePageHeader = () => cy.get('.jenkins-app-bar__content h1')

    clickUserNameLink() {
        this.getUserNameLink().click();
        return new UserProfilePage();
    };

    trimPeoplePageHeader() {
        return this.getPeoplePageHeader().then(($el) => {
            return $el.text().trim();
        });
    };
}
export default PeoplePage;
