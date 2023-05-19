/// <reference types='cypress'/>
describe('Add description to the pipeline', () =>{

    beforeEach ('Create pipeline', function () {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('TestPipeline')
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get(':nth-child(1) > .model-link').click()
        
    });

    it('verify the description can be added',()=>{
        cy.get('a[href="job/TestPipeline/"] span').click()
        cy.get('#description-link').click()
        cy.get('textarea.jenkins-input')
            .should('have.text', '')
            .type('This is test description')
        cy.get('button[name="Submit"]').first().click()

    })

    it.only('Verify User is able to go to tab “Edit description”', () => {
        cy.get('#description-link').click()
        cy.get('.jenkins-input   ').type('First Description')
        cy.get('.jenkins-button--primary ').click();
        cy.get('#description-link').should('contain','Edit description').click()
        cy.get('textarea[name="description"]').should('have.value', 'First Description');
        //cy.get('#description-link').contains('Edit description')
        //cy.contains('#description-link', 'Edit Description').should('exist')
        // cy.get('#description-link').then($element => {
        //     const text = Cypress.$($element).css('content');
        //     const extractedText = text.replace(/["']/g, ''); // Remove the quotes surrounding the text
        //     expect(extractedText).to.equal('Edit Description');
        // });
    });

})