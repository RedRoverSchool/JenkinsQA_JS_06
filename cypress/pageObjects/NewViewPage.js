class NewViewPage {
    getNewViewPageURL = () => cy.url();
    getBreadcrumbsLastPoint = () => cy.get('#breadcrumbs li:last-child');
}
export default NewViewPage;