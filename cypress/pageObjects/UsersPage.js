import CreateUserPage from './CreateUserPage';

class UsersPage {
    
    getCreateUserBtn = () => cy.get(".jenkins-app-bar__controls");
  
    clickCreateUserBtn(){
        this.getCreateUserBtn().click();
        return new CreateUserPage();
    } 
}

export default UsersPage;