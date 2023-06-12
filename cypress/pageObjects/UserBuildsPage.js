class UserBuildsPage {
    getUserBuildsTitle = () => cy.title();
    getUserBuildsTableSizeBtns = () => cy.get("div[class='jenkins-icon-size__items jenkins-buttons-row'] ol");
    getStatusIcon = () => cy.get('.jenkins-table__cell--tight.jenkins-table__icon');
    getPageHeading = () => cy.get('h1');

    clickUserBuildsTableSizeBtns(size) {
        this.getUserBuildsTableSizeBtns().contains(size).click();
        return this;
    };
}
export default UserBuildsPage;