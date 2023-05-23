/// <reference types="cypress"/>
import myView from "../fixtures/myView.json"

describe('myViewCreateNewBasedOnExisting', () => {

    const PORT = Cypress.env("local.port");

    function createFolder(name) {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(name);
        cy.get('span.label').contains(myView.folder).click();
        cy.get('#ok-button').click()
        cy.get('button[name=Submit]').click();
    }
    
    function createFreestyleJobsInTHeFolder(jobName, folderName) {
        cy.get(`[href="/job/${folderName}/newJob"]`).click();
        cy.get('#name').type(jobName);
        cy.get('span.label').contains(myView.freestyleProject).click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
        cy.get('a[href*="/job/"]').contains(folderName).click();    
    }

    beforeEach('Create new View with two folders and 3 freestyle jobs in one of the folders', () => {        
        createFolder(myView.FolderName1);   
        createFreestyleJobsInTHeFolder(myView.JobName1, myView.FolderName1); 
        createFreestyleJobsInTHeFolder(myView.JobName2, myView.FolderName1); 
        createFreestyleJobsInTHeFolder(myView.JobName3, myView.FolderName1);        
        cy.get('a[href="/"]').contains(myView.dashboard).click();
        createFolder(myView.FolderName2);
        cy.get('a[href="/"]').contains(myView.dashboard).click();
    })

    it('AT_09.01_004 | <My Views>Create new view with Job Filters to add jobs from an existing View', () => {
        cy.get('[href="/newView"]').click();
        cy.get('#name').type(myView.ViewName1);
        cy.get('[for="hudson.model.ListView"]').click();
        cy.get('#ok').click();
        cy.url().should('equal', `http://localhost:${PORT}/view/${myView.ViewName1}/configure`);
        
        cy.get('#recurse~.attach-previous').click();
        cy.get('#recurse').should('be.checked');

        cy.get(`span.jenkins-checkbox label[title="${myView.FolderName1}/${myView.JobName1}"]`).click();
        cy.get(`span.jenkins-checkbox label[title="${myView.FolderName1}/${myView.JobName3}"]`).click();
        cy.get(`span.jenkins-checkbox label[title="${myView.FolderName2}"]`).click();
        cy.get('#bottom-sticker button[name="Submit"]').click();
        cy.url().should('equal', `http://localhost:${PORT}/view/${myView.ViewName1}/`);
       
        cy.get('#projectstatus tbody>tr>td:nth-child(3) a').should('have.length', 3)
        .each(($el, idx) => {
            const expectedUrl = myView.jobFilter[idx].url;
            expect($el).to.have.attr('href', expectedUrl);      
        })  
        cy.get('#projectstatus tbody>tr>td:nth-child(3) span')
        .each(($el, idx) => {
            const expectedName = myView.jobFilter[idx].name;
            expect($el).to.have.text(expectedName);  
        })         
    })
})