import RestApiDocPage from "./RestApiDocPage";
class RestAPIPage {
    getRestApiTitle =() => cy.get('#main-panel h1');
    getRestApiDocTitle =() => cy.get('[href="https://www.jenkins.io/redirect/remote-api"]');

    clickLinkTheDocumentation() {
        this.getRestApiDocTitle().click()
        return new RestApiDocPage()
    }
    










}
export default RestAPIPage;