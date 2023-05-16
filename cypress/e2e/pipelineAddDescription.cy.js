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

})