/// <reference types="cypress"/>

describe('<Homepage (Dashboard) > Main panel description',()=>{
    const addDescription = 'Add description'
    const messageInDescription = 'This is a description'
    const editDescription = 'Edit description'

    it('AT_02.06_11 | Homepage (Dashboard) > Adding Main panel description', () => {
        cy.get('#description-link').should('contain', addDescription).click();
        cy.get('#description-link').should('not.exist');
        cy.get('[name="description"]').type(messageInDescription);
        cy.get('.jenkins-button[formnovalidate="formNoValidate"]').should('have.text', 'Save').click();
        cy.get('#description-link').should('contain', editDescription);
        cy.get('#description').should('contain', messageInDescription);
      })
    
})

