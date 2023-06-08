import UserProfilePage from "../pageObjects/UserProfilePage"
import HomePage from "../pageObjects/HomePage";

class UserConfigurePage {
    getFullNameInputField = () => cy.get('input[name="_.fullName"]');
    getUserConfigSaveBtn = () => cy.get('button[name="Submit"]');
    getUserConfigDescription = () => cy.get('textarea[name="_.description"]')

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
}
export default UserConfigurePage;