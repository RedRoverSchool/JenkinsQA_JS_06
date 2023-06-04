import UserProfilePage from "../pageObjects/UserProfilePage"
import HomePage from "../pageObjects/HomePage";

class UserConfigurePage {
    getFullNameInputField = () => cy.get('input[name="_.fullName"]');
    getUserConfigSaveBtn = () => cy.get('button[name="Submit"]');
    getJenkinsHeaderIcon = () => cy.get('#jenkins-head-icon');



    typeFullNameInputField(name) {
        this.getFullNameInputField().clear().type(name);
        return this;
    }

    clickUserConfigSaveBtn() {
        this.getUserConfigSaveBtn().click();
        
        return new UserProfilePage();
    }

    clickJenkinsHeaderIcon() {
        this.getJenkinsHeaderIcon().click();
        return new HomePage();
   }
}
export default UserConfigurePage;