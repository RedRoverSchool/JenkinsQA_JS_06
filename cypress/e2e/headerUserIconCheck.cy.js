///  <reference types="cypress"/>

import {userMenuItems} from '../fixtures/userIconMenuItems.json'

describe('Header User icon check', () => {

    it('AT_01.03.022| <Header>User icon check', () =>{
        cy.get('a[href="/user/admin"]').should('be.visible')
        cy.get('.page-header a .jenkins-menu-dropdown-chevron').realHover().click()
        cy.get('.bd').should('be.visible')
        cy.get('a[href="/user/admin/configure"').click()
        cy.url().should('eq', `http://localhost:${Cypress.env('local.port')}/user/admin/configure`)
       
    })

    it('AT_01.03.023| Header > Verify User Icon has dropdown menu with given links', () => {
        cy.get('.login button').realHover().click();
        cy.get('.bd li').should('have.length', userMenuItems.length)
          .then($els => Cypress._.map($els, 'innerText'))      
          .should('deep.equal', userMenuItems);       
    });
})
