/// <reference types="cypress" />

describe('Breadcrumbs | Builds for user page', () => {

    beforeEach('', () => {
        cy.get('a[href^="newJob"]').click();
        cy.get('input#name').type('Project');
        cy.get('li[class*=Project]:nth-child(1)').click();
        cy.get('#ok-button').click();
        cy.get('button[name~=Submit]').click();
    
        cy.get('.task a[onclick*=build]').click();
        cy.get('.task a[onclick*=build]').click();
    
        cy.get('a[href$=admin]').click();
        cy.get('a[href$=builds]').click();
    
        });
        
    
    it('AT_04.06 _003 | Verify builds list is sorted in ascending order by default', () => {
            
        cy.get('#projectStatus th:nth-child(2) a').click();
    
        cy.get('th:nth-child(2) .sortarrow').should('contain', '↑');
        cy.get('#projectStatus tbody>tr:nth-child(odd)').should('contain', '#2');
        cy.get('#projectStatus tbody>tr:nth-child(even)').should('contain', '#1');
    
        });    
    
    });