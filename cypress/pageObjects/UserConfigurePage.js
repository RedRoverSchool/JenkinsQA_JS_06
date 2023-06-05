import UserProfilePage from "../pageObjects/UserProfilePage"
import HomePage from "../pageObjects/HomePage";

class UserConfigurePage {
    getFullNameInputField = () => cy.get('input[name="_.fullName"]');
    getUserConfigSaveBtn = () => cy.get('button[name="Submit"]');
    

    typeFullNameInputField(name) {
        this.getFullNameInputField().clear().type(name);
        return this;
    }

    clickUserConfigSaveBtn() {
        this.getUserConfigSaveBtn().click();
        
        return new UserProfilePage();
    }
}
export default UserConfigurePage;