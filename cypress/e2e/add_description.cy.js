/// <reference types="cypress" />

describe('US_02.06 | Homepage Dashboard_Verify the Main panel description', ()=>{
    const text = "Jenkins project"
    const text2 = "Jenkins project in progress"

    it('AT_02.06_001 |Verify the Main panel description', ()=>{
        cy.get('#description-link').click()
        cy.get('.jenkins-input ').type('Jenkins project')
        cy.get('button[name="Submit"]').click()
    })

    it('AT_02.06_002 |Homepage Dashboard_User is able to add and edit the text in the panel description', () => {
        cy.get('#description-link').should('be.visible').click()
        cy.get('textarea[name="description"]').clear().type(text).should('have.value', text)
        cy.get('button[name="Submit"]').click()
        cy.get('a[href="editDescription"]').click()
        cy.get('textarea[name="description"]').clear().type(text2).should('have.value', text2)
        cy.get('button[name="Submit"]').click()
     })
})

