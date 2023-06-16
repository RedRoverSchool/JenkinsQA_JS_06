import UsersPage from './UsersPage';

class ManageJenkinsPage {

    getManageUsersLink = () => cy.get('.jenkins-section__item a[href="securityRealm/"]');
    
    clickManageUsersLink() {
        this.getManageUsersLink().click();
        return new UsersPage();
    }
}

export default ManageJenkinsPage;
