import userCredentialsPageData  from '../fixtures/pom_fixtures/userCredentialsPage.json';

class UserCredentialsPage {
    getCredentialsPageUrl = () =>cy.url();
    getCredentialsHeader = () => cy.get('#main-panel h1');
   


    checkUrlCredentialsPage() {
        this.getCredentialsPageUrl()
            .should('include', userCredentialsPageData.credentialsPageUrl);
        return this;
    }
}
export default UserCredentialsPage;


