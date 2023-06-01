

class UserPage {

    getHeaderUserPage = () => cy.get('#main-panel h1');
    getBreadcrumbUserName = () => cy.get('li.jenkins-breadcrumbs__list-item a[href*="user"]')
    


    


}
export default UserPage;