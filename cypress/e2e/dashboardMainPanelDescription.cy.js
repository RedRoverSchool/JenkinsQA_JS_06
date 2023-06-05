/// <reference types = 'cypress'/>

import descriptionsProject from "../fixtures/descriptionsProject.json"

describe('dashboardMainPanelDescription', () => {

    it.skip("AT_02.06_004 | Dashboard > Description input textarea is invisible", () => {
        cy.get("textarea.jenkins-input").should('not.exist')
    })

    it.skip("AT_02.06_005 | Dashboard > Verification of the button 'Add description'", () => {
        cy.get("a#description-link").click() 
        cy.focused().should('have.attr', 'name', 'description') 
    })

    it.skip("AT_02.06_006 | Dashboard > Preview text equals to input description text", () => {
        cy.get("a#description-link").click()

        cy.get(".jenkins-input").type(descriptionsProject.addDescriptionProject).invoke('val').as('descr')
        cy.get('@descr').then((descr) => {
            cy.get(".textarea-show-preview").click()
            cy.get(".textarea-preview").should('have.text', descr) 
        })
    }) 

    it("AT_02.06_008 | Dashboard > Verification of the link 'Hide preview' for description at main panel", () => {
        cy.get("a#description-link").click() 
        cy.get(".jenkins-input").type(descriptionsProject.addDescriptionProject)

        cy.get('.textarea-hide-preview').should('not.be.visible')
        cy.get(".textarea-show-preview").click()
        cy.get('.textarea-hide-preview').should('be.visible')
        cy.get('.textarea-hide-preview').click()
        cy.get('.textarea-hide-preview').should('not.be.visible')
        cy.get(".textarea-preview").should("not.be.visible")
    })
   
    it.skip("AT_02.06_010 | Dashboard > Add description for the main panel", () => {
        cy.get("a#description-link").click() 
        cy.get(".jenkins-input")
          .type(descriptionsProject.addDescriptionProject)
        cy.get("button.jenkins-button.jenkins-button--primary").click()
        cy.get("#description > div:nth-child(1)").should("have.text", descriptionsProject.addDescriptionProject)
    })

    it("AT_02.06_012 | Dashboard > Replacing the decription for the project with a new one", () => {
        cy.get("a#description-link").click()
        cy.get(".jenkins-input").type(descriptionsProject.addDescriptionProject) 
        cy.get("button.jenkins-button.jenkins-button--primary").click()

        cy.get("a#description-link").click()
        cy.get(".jenkins-input").clear().type(descriptionsProject.addNewDescriptionProject)
        cy.get("button.jenkins-button.jenkins-button--primary").click()
        cy.get("#description > div:nth-child(1)").should("have.text", descriptionsProject.addNewDescriptionProject)
    })

    it("AT_02.06.014 | Dashboard > Editing the decription for the project through adding additional info to the content", () => {
        cy.get("a#description-link").click() 
        cy.get(".jenkins-input").type(descriptionsProject.addNewDescriptionProject)
        cy.get("button.jenkins-button.jenkins-button--primary").click()

        cy.get("#description > div:nth-child(1)").invoke('text').as('descr_current')
        cy.get('@descr_current').then((descr_current) => {
            cy.get("a#description-link").click()
            cy.get(".jenkins-input").type("{end}").type(descriptionsProject.editDescriptionProject) 
            cy.get("button.jenkins-button.jenkins-button--primary").click()
            cy.get("#description > div:nth-child(1)").should('have.text', descr_current+descriptionsProject.editDescriptionProject)
        })
    })
    
})

