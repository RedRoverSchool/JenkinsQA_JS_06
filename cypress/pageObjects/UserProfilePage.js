class UserProfilePage {
    getUserPageHeader = () => cy.get('#main-panel h1');
    getUserDescriptionBtn = () => cy.get('#description-link');
    getUserDescriptionInputField = () => cy.get('textarea[name="description"]');
    getUserDescriptionSaveBtn = () => cy.get('button[name="Submit"]');
    getUserDescriptionText = () =>  cy.get('#description div:not(.jenkins-buttons-row)');

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

}
export default UserProfilePage;