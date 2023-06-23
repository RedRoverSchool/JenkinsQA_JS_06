import userCredentialsPageData  from '../fixtures/pom_fixtures/userCredentialsPage.json';

class UserCredentialsPage {
    getCredentialsPageUrl = () =>cy.url();
    getCredentialsHeader = () => cy.get('#main-panel h1');
    getUserCredPageIconBtns = () => cy.get("div[class='jenkins-icon-size__items jenkins-buttons-row'] ol")
    getUserCredPageTables = () => cy.get('.jenkins-table__cell--tight.jenkins-table__icon')
    


    checkUrlCredentialsPage() {
        this.getCredentialsPageUrl()
            .should('include', userCredentialsPageData.credentialsPageUrl);
        return this;
    }
    
    clickUserCredIconBtns(size) {
        this.getUserCredPageIconBtns().contains(size).click();
        return this;
    };
}
export default UserCredentialsPage;


