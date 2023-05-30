/// <reference types="cypress" />
import {pageTitle} from "../fixtures/footerData.json"

describe('Footer Link Jenkins', () =>{
    it('AT_03.02_008 | <Footer> Verify the Link "Jenkins" in the footer', () => {
        cy.get('div[class$="white jenkins_ver"] a').invoke('removeAttr', 'target').click()

        cy.get('.page-title').should('contain', pageTitle)
    })

})
