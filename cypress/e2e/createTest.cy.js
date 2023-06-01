/// <reference types="cypress"/>

// describe('createTest', () => {

//     it('should create a new folder in Jenkins', function () {
//         it('AT_01.01_001 |', function () {
//             cy.get().click();
//             cy.get('').should();
//         })
//     })
describe('Create a new Folder', () => {
    const folderName = 'New Folder';

    it.only('should create a new Folder', () => {
        //cy.get('a span:nth-child(2)').contains('New Item').trigger('click');
        cy.get('span.task-link-text').contains('New Item').trigger('click', { force: true });
        //cy.get('[name="name"]').should('exist').type(folderName);
        //cy.get('.label').contains('Folder').click();
        cy.get('#ok-button').click();
        cy.get("button[name='Submit']").click();
        cy.get('.jenkins-breadcrumbs__list-item').click();
        cy.get('[class="jenkins-table__link model-link inside"] span').contains(folderName).should('exist').click();
        cy.get('[class="job-index-headline page-headline"]').should('have.text', folderName);
    });

    it('should display the created Folder on the Dashboard', () => {
        cy.get('[href="/"]').click();
        cy.get('[class="jenkins-table__link model-link inside"]').contains(folderName).should('exist');
    });
});
