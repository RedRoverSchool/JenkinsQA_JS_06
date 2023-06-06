import {credentialsPageUrl}  from '../fixtures/pom_fixtures/userCredentialsPageData.json';

class UserCredentialsPage {
    getCredentialsPageUrl = () =>cy.url();
    getCredentialsHeader = () => cy.get('#main-panel h1');
   


    checkUrlCredentialsPage() {
        this.getCredentialsPageUrl()
            .should('include', credentialsPageUrl);
        return this;
    }
}
export default UserCredentialsPage;


