/// <reference types="cypress"/>

import projects from '../fixtures/projects.json';
import headers from '../fixtures/headers.json';

describe('Header Search Box', () => {
  it('AT_01.02_003 | Verify a placeholder text “Search (CTRL+K)" in input field Search box', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it.skip('AT_01.02_001 | Verify that user navigate to Search Box documentation page', function () {
    cy.get('.main-search__icon-trailing')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', '/doc/book/using/searchbox/');
    cy.get('h1#search-box').should('contain.text', '\nSearch Box\n');
  });

  it('AT_01.02_004 | User is able to get Search Box by a keyboard shortcut (Ctrl+K)', function () {
    cy.get('#jenkins').trigger('keydown', { ctrlKey: true, keyCode: 75 });
    cy.get('#search-box').type(projects.multibranchPipeline.name + '{enter}');
    cy.get('#main-panel h1')
      .should('have.text', headers.searchPage)
      .and('be.visible');
  });

  it('AT_01.02_008 | Verify text in placeholder: “Search (CTRL+K)"', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it('01.02_ 006 |Verify Search Box is visible', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it('AT_01.02_007 | Verify search box is visible', function () {
    cy.get('#search-box').should('be.visible');
  });

  it('AT_01.02_019| No results appear after input text in the Search box', () => {
    cy.get('input.main-search__input').type('text' + '{enter}');
    cy.get('div.error').should('have.text', 'Nothing seems to match.');
  });

  it('Verify user is able to get to the Search Box by a keyboard shortcut (Ctrl+K)', () => {
    cy.get('#jenkins').trigger('keydown', { ctrlKey: true, keyCode: 75 });
    cy.get('#search-box').type(headers.searchText + '{enter}');

    cy.get('#main-panel h1').then(el => {
      assert.include(el.text(), headers.searchText);
    });
  });
  it('АТ_01.02.021 | searchboxPlaceholderCheck', () => {
    // code here
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it('AT_01.02.022 | Header Search box is visible', function () {
    cy.get('input#search-box').should('be.visible');
  });

  it('AT_01.02_017 | Verify visible Search box', function () {
    cy.get('#search-box')
    .should('be.visible')
    .and('have.attr', 'placeholder')
    .and('contain', 'Search')
    .and('contain', '+K')
  });

  it('AT_01.02.18_Header_Search_box', () => {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
})

  it('AT_01.02.022 | Search box text placeholder is visible', () =>{
    cy.get('#search-box')
    .should('be.visible')
    .and('have.attr','placeholder','Search (CTRL+K)')
  })

  it('AT_01.02_025 | Accessibility of the search field from the every page', () => {
    cy.get('#searchform').should('be.visible')
    cy.get('a[href="/view/all/newJob"]').click()
    cy.get('#searchform').should('be.visible')

    cy.get('#breadcrumbs a[href="/"]').realHover()
    cy.get('#breadcrumbBar .jenkins-menu-dropdown-chevron').click()
    cy.get('#breadcrumb-menu a[href="/asynchPeople/"]').click()
    cy.get('#searchform').should('be.visible')

    cy.get('#breadcrumbs a[href="/"]').realHover()
    cy.get('#breadcrumbBar .jenkins-menu-dropdown-chevron').click()
    cy.get('#breadcrumb-menu a[href="/view/all/builds"]').click()
    cy.get('#searchform').should('be.visible')

    cy.get('#breadcrumbs a[href="/"]').realHover()
    cy.get('#breadcrumbBar .jenkins-menu-dropdown-chevron').click()
    cy.get('#breadcrumb-menu a[href="/manage"]').click()
    cy.get('#searchform').should('be.visible')

    cy.get('#breadcrumbs a[href="/"]').realHover() 
    cy.get('#breadcrumbBar .jenkins-menu-dropdown-chevron').first().click()
    cy.get('#breadcrumb-menu a[href="/me/my-views"]').click()
    cy.get('#searchform').should('be.visible')
  });
  
  it('AT_01.02.026 | Search box is not available for not logged in users ', () =>{
    cy.get('a[href="/logout"]').click();
    cy.get('#searchform').should('not.exist'); 
  });

  it('AT_01.02_023 | Validation of the Search box', ()=> { 
    cy.get('#search-box').should('have.attr','placeholder','Search (CTRL+K)') 
  });

  it('AT_01.02.028 | Verify Search box is case insensitive by default', () => {
    headers.dataSearchBox.forEach(arr => {      
        cy.get('input#search-box').clear().type(arr + '{enter}');
        cy.get('a[href="all"]').should('have.text', 'All Jenkins Logs');       
        cy.get('a[href="/"].model-link').click();      
    })
  });
});
