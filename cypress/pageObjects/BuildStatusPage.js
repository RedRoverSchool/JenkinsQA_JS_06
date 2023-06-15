class BuildStatusPage {
    getBuildName = () => cy.get('.jenkins-icon-adjacent');
    getBuildStartedBy = () => cy.get('table tr td p span');

    getBuildStartedByText() {
        return this.getBuildStartedBy()
            .should("be.visible")
            .then(($el) => {
                return $el.text();
            })
    }
}
export default BuildStatusPage;