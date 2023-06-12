class JenkinsPage {
    getPageTitle = () => cy.get('.page-title');
    getJenkinsPageUrl = () => cy.url();
}

export default JenkinsPage;
