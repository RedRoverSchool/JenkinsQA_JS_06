import errorPageData from "../fixtures/pom_fixtures/errorPageData.json"

class ErrorMessagePage {
    getErrorMessageText = () => cy.get('#error-description h2');

    verifyErrorMessageText() {
        this.getErrorMessageText()
        .should('have.text', errorPageData.errorMessage)
        .and('be.visible')
    }

};
export default ErrorMessagePage;