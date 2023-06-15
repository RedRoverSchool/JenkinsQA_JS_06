import UserProfilePage from "../pageObjects/UserProfilePage"

class UserConfigurePage {
    getFullNameInputField = () => cy.get('input[name="_.fullName"]');
    getUserConfigSaveBtn = () => cy.get('button[name="Submit"]');
    getUserConfigDescription = () => cy.get('textarea[name="_.description"]')
    getAddNewTokenBtn = () => cy.get('#yui-gen1-button');
    getTokenNameInputField = () => cy.get('input[name="tokenName"]');
    getGenerateBtn = () => cy.get('span.token-save button');
    getNewTokenValue = () => cy.get('.new-token-value.visible');
    getDeleteTokenBtn = () => cy.get('.token-revoke');
    getNoTokensMsg = () => cy.get('.token-list-item');


    typeFullNameInputField(name) {
        this.getFullNameInputField().clear().type(name);
        return this;
    }

    clickUserConfigSaveBtn() {
        this.getUserConfigSaveBtn().click();

        return new UserProfilePage();
    }

    typeUserConfigDescription(description) {
        this.getUserConfigDescription().clear().type(description);
        return this;
    };

    clickAddNewTokenBtn() {
        this.getAddNewTokenBtn().click();
        return this;
    }

    typeTokenNameInputField(name) {
        this.getTokenNameInputField().type(name);
        return this;
    }

    clickGenerateBtn() {
        this.getGenerateBtn().click();
        return this;
    }

    getNewTokenValueText() {
        return this.getNewTokenValue().then($el => {
            $el.text();
        })
    }

    deleteUserTokens() {
        this.getDeleteTokenBtn()
            .each(($btn, index) => {
                cy.wrap($btn).click();
            });
        return this;
    }

    getNoTokensMsgText() {
        return this.getNoTokensMsg().then($el => {
            return $el.text();
        })
    }

}

export default UserConfigurePage;