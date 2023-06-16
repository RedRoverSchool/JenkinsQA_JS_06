import UsersPage from './UsersPage';

class CreateUserPage {
    getUserNameInputField = () => cy.get("input#username");
    getPasswordInputField= () => cy.get('input[name="password1"]');
    getConfirmPasswordInputField = () => cy.get('input[name="password2"]');
    getEmailAddressInputField = () => cy.get('input[name="email"]');
    getCreateUserBtn = () => cy.get('button[name="Submit"]');

    typeUserNameInputField(userName) {
        this.getUserNameInputField().type(userName);
        return this;
    }
    
    typePasswordInputField(password) {
        this.getPasswordInputField().type(password);
        return this;
    }
    
    typeConfirmPasswordInputField(confirmPassword) {
        this.getConfirmPasswordInputField().type(confirmPassword);
        return this;
    }
    
    typeEmailAddressInputField(emailAddress) {
        this.getEmailAddressInputField().type(emailAddress);
        return this;
    }
    
    clickCreateUserBtn(){
        this.getCreateUserBtn().click();
        return new UsersPage();
    }
}

export default CreateUserPage;