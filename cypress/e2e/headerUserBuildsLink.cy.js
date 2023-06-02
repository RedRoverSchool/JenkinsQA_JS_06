/// <reference types="cypress"/>

import {title} from '../fixtures/buildLinkPage.json'
import {SidePanelTasks} from '../fixtures/userConfigure.json'
import {projects} from '../fixtures/projects.json'

function createAndBuildProject(projectName){
  cy.get('#tasks div:nth-child(1)').click()
  cy.get('#name').type(projectName)
  cy.get('.hudson_model_FreeStyleProject').click()
  cy.get('#ok-button').click()
  cy.get('button.jenkins-button.jenkins-button--primary ').click()
  cy.get('#tasks div:nth-child(4)').click()
}

describe('Header - User Builds Link', () => {
  it('Verify menu item “Builds“ in “User” dropdown-menu displayed and clickable', () => {
    cy.get('div.login.page-header__hyperlinks button.jenkins-menu-dropdown-chevron').click({force:true})
    cy.get('li.yuimenuitem a span').contains('Builds').should('be.visible').and('include.text', 'Builds').click()
  });
    
  it('Verify redirected to the “Builds for User" page', () => {
    cy.get('div.login.page-header__hyperlinks button.jenkins-menu-dropdown-chevron').click({force:true})
    cy.get('li.yuimenuitem a span').contains('Builds').click()
    
    cy.get('a.model-link span.hidden-xs.hidden-sm').then(($span) => {
        const userName = $span.text()
        cy.url().should("contain", "/user/" + userName + "/builds")
        cy.get('h1').should('have.text', 'Builds for ' + userName)
    });
  }); 

  it('AT_01.04_006|<Header> User builds link| Verify the side panel', () =>{
       
      cy.get('#page-header .jenkins-menu-dropdown-chevron').click({force: true} );
      cy.get('.yuimenuitemlabel').contains('Builds').click();
      cy.get('#side-panel').should('be.visible')
   });
  it('AT_01.04.05|Header User Builds link',()=>{
    cy.get('.login.page-header__hyperlinks .jenkins-menu-dropdown-chevron').click({force: true})
    cy.get('.yuimenuitem.first-of-type .yuimenuitemlabel').click() 
    cy.get('#tasks').should('be.visible')
   })

  it('AT_01.04.03 | Header > User Builds link > Verify list with all users builds', () => {

    createAndBuildProject(projects[2]);

    cy.get('#jenkins-name-icon').click()

    createAndBuildProject(projects[1]);

    cy.get('#jenkins-name-icon').click()

    createAndBuildProject(projects[0]);

    cy.get('.login.page-header__hyperlinks .jenkins-menu-dropdown-chevron').click({force: true})
    cy.get('li.yuimenuitem a span').contains('Builds').should('be.visible').and('include.text', 'Builds').click()

    cy.get('a.jenkins-table__link.model-link span')
    .should('have.length', projects.length)
    .then(($els) => {
        return Cypress._.map($els, 'innerText')
    })
    .should('deep.equal', projects)
  })
  
  it('AT_01.04.009 |<Header>User Builds link is visible/clicable/redirected',() => {
    const login = Cypress.env('local.admin.username').toLowerCase();
    
    cy.get('#page-header .jenkins-menu-dropdown-chevron').realHover().click()
    cy.get('#breadcrumb-menu-target a[href*="builds"]').should('be.visible').click()
    cy.location('pathname').should('eq', `/user/${login}/builds`)
    cy.get('#main-panel h1').should('include.text', title + `${login}`)
  })

  it('AT_01.04.04 | Header > User Builds link > Verify access to the side panel', () => {
    cy.get('.login.page-header__hyperlinks .jenkins-menu-dropdown-chevron').click({force: true})
    cy.get('li.yuimenuitem a span').contains('Builds').should('be.visible').and('include.text', 'Builds').click()

    cy.get('#tasks span.task-link-wrapper a')
      .each(($el, index) => {
        cy.wrap($el).should('be.visible')
        cy.wrap($el).should('have.attr', 'href')        
      })
      .then(($els) => {
        return Cypress._.map($els, 'innerText')
      })
      .should('deep.equal', SidePanelTasks.Names)
  });
});
