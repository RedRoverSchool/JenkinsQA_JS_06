import UserCredentialsPage from "./UserCredentialsPage";
import UserConfigurePage from "./UserConfigurePage";
const userName = Cypress.env("local.admin.username").toLowerCase();

class UserProfilePage {
    getUserPageHeader = () => cy.get('#main-panel h1');
    getUserDescriptionBtn = () => cy.get('#description-link');
    getUserDescriptionInputField = () => cy.get('textarea[name="description"]');
    getUserDescriptionSaveBtn = () => cy.get('button[name="Submit"]');
    getUserDescriptionText = () =>  cy.get('#description div:not(.jenkins-buttons-row)');
    getUserCredentialsLink = () => cy.get(`a[href="/user/${userName}/credentials"]`);
    getUserConfigureLink = () => cy.get(`a[href="/user/${userName}/configure"]`);
    getUserConfigureNameLink = () => cy.get(`a[href="/user/${userName}/configure"] .task-link-text`)
    getUserId = () => cy.get('#main-panel>div:last-child');
    getStatusBtn = () => cy.get('#tasks>:nth-child(2)')

    trimUserPageHeaderName() {
        return this.getUserPageHeader().then($el => {
            return $el.text().trim();
        });
    };

    clickUserDescriptionBtn() {
        this.getUserDescriptionBtn().click();
        return this;
    };

    typeUserDescriptionInputField(text) {
        this.getUserDescriptionInputField().clear().type(text);
        return this;  
    };

    clickUserDescriptionSaveBtn() {
        this.getUserDescriptionSaveBtn().click();
        return this;
    };

    clickUserCredentialsLink() {
        this.getUserCredentialsLink().click();
        return new UserCredentialsPage();
    }

    clickUserConfigureLink() {
        this.getUserConfigureLink.click();
        return new UserConfigurePage();
    }
    verifyUserPagesUrl(user) {
            cy.url().should('contain', user);
            return this;
        };

    verifyStatusBtn() {
        this.getStatusBtn().should('exist');
        return this;
    };

}
export default UserProfilePage;