/// <reference types="cypress"/>

import projects from "../fixtures/projects.json"
import headers from "../fixtures/headers.json"
import { forEach } from "cypress/types/lodash";

describe('Header Search Box', () => {
    
    xit('AT_01.02_003 | Verify a placeholder text “Search (CTRL+K)" in input field Search box', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
    });

    xit('AT_01.02_001 | Verify that user navigate to Search Box documentation page', function () {
        cy.get('.main-search__icon-trailing').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/doc/book/using/searchbox/')
        cy.get('h1#search-box').should('contain.text', '\nSearch Box\n')
    });

    it('AT_01.02_004 | User is able to get Search Box by a keyboard shortcut (Ctrl+K)', function () {
        cy.get('#jenkins').trigger('keydown', { ctrlKey: true, keyCode: 75})
        cy.get('#search-box').type(projects.multibranchPipeline.name + '{enter}')
        cy.get("#main-panel h1").should('have.text', headers.searchPage).and('be.visible')
    })

    it('AT_01.02_008 | Verify text in placeholder: “Search (CTRL+K)"', function () {
        cy.get('#search-box')
          .should('have.attr', 'placeholder', 'Search (CTRL+K)')
    });
    
    it('01.02_ 006 |Verify Search Box is visible',function(){
        cy.get('#search-box').should('have.attr','placeholder','Search (CTRL+K)')
    });


    it('AT_01.02_007 | Verify search box is visible', function () {
        cy.get('#search-box')
          .should('be.visible')
    });

    it('AT_01.02_023 | Validation of the Search box', ()=> {
        cy.get('#search-box').should('have.attr','placeholder','Search (CTRL+K)')
    });
    
})
