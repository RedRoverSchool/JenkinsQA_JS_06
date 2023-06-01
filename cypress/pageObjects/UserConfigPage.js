import UserPage from "./UserPage";


class UserConfigPage {

    getFullNameInputField = () => cy.get('input[name="_.fullName"]')
    getSaveFullNameBtn = () => cy.get('button[name="Submit"]')


    

    typeFullNameInput(name) {
        this.getFullNameInputField().clear().type(name)
        return this;
    }

    clickSaveFullNameBtn() {
        this.getSaveFullNameBtn().click();
        return new UserPage();

    }
    

}
export default UserConfigPage;