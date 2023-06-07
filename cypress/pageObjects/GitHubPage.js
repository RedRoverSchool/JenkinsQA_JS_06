import gitHubPageData from "../fixtures/pom_fixtures/gitHubPage.json";

class GitHubPage {
    getGitHubHeaderAuthor = () => cy.get('.author');
    getUrl = () => cy.url();

    checkUrl() {
        this.getUrl().should('be.eq', gitHubPageData.gitHubProjectURL);
        return this;
    }
}
export default GitHubPage