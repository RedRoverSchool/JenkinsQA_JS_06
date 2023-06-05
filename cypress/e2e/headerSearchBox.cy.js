/// <reference types="cypress"/>

import projects from '../fixtures/projects.json';
import headers from '../fixtures/headers.json';
import homePage from '../fixtures/homePage.json'
const userName = Cypress.env('local.admin.username').toLowerCase();

describe('Header Search Box', () => {
  it.skip('AT_01.02_003 | Verify a placeholder text “Search (CTRL+K)" in input field Search box', function () {
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

  it.skip('AT_01.02_008 | Verify text in placeholder: “Search (CTRL+K)"', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it.skip('01.02_ 006 |Verify Search Box is visible', function () {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it('AT_01.02_007 | Verify search box is visible', function () {
    cy.get('#search-box').should('be.visible');
  });

  it.skip('AT_01.02_019| No results appear after input text in the Search box', () => {
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
  it.skip('АТ_01.02.021 | searchboxPlaceholderCheck', () => {
    // code here
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)');
  });

  it('AT_01.02.022 | Header Search box is visible', function () {
    cy.get('input#search-box').should('be.visible');
  });

  it.skip('AT_01.02_017 | Verify visible Search box', function () {
    cy.get('#search-box')
    .should('be.visible')
    .and('have.attr', 'placeholder')
    .and('contain', 'Search')
    .and('contain', '+K')
  });

  it.skip('AT_01.02.18_Header_Search_box', () => {
    cy.get('#search-box').should('have.attr', 'placeholder', 'Search (CTRL+K)')
})

  it.skip('AT_01.02.022 | Search box text placeholder is visible', () =>{
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

  it.skip('AT_01.02_023 | Validation of the Search box', ()=> { 
    cy.get('#search-box').should('have.attr','placeholder','Search (CTRL+K)') 
  });

  it ('AT_01.02._027|Verify Search box is visible and accessible from twopages', function () {
    cy.get('#searchform').should('be.visible')
    cy.get('a[href="/asynchPeople/"').click()
    cy.get('#searchform').should('be.visible')
    cy.get('a[href="/view/all/builds"').click()
    cy.get('#searchform').should('be.visible')
  });
 
  it('AT_01.02_024 | Accessibility of the search field from the Manage Jenkins page',() => {
    cy.get('a[href="/manage"]').click();
    cy.get('div h1').should('include.text','Manage Jenkins')
                    .and('be.visible');
    cy.get('#search-box').should('exist')
                         .and('have.attr','placeholder','Search (CTRL+K)');
  });

  it.skip('AT_01.02.028 | Verify Search box is case insensitive by default', () => {
    headers.dataSearchBox.forEach(arr => {      
        cy.get('input#search-box').clear().type(arr + '{enter}');
        cy.get('a[href="all"]').should('have.text', headers.testdata);       
        cy.get('a[href="/"].model-link').click();      
    })
  });

  it.skip('AT_01.02_029 | Verify case sensitive option in the Search box', () => {
    cy.get(`a[href="/user/${userName}"]`).realHover();
    cy.get('div>a[href^="/user/"]>button[class="jenkins-menu-dropdown-chevron"]').click();
    cy.get('a[href$="/configure"].yuimenuitemlabel').click()
    cy.get('div.setting-main label').click();
    cy.get('button[name="Submit"]').click();    
    headers.dataCapCase.forEach(arr => {
      cy.get('input#search-box')
        .clear()
        .type(arr + '{enter}');
      cy.get('div.error').should('have.text', headers.textNothing);
    })
  });

  it.skip('AT_01.02.031 | Verify Search box after uncheck sensitivity option in users profile', () => {
    cy.get('a[href="/user/admin"]').click()
    cy.get('a[href="/user/admin/configure"]').click()
    cy.get('.setting-main input[type="checkbox"]')
      .uncheck({ force: true })
      .should('not.be.checked')
    cy.get('button[name="Submit"]').click()
    if
      (cy.get('#searchform').type(headers.inputText + '{enter}')) {
      cy.get('a[href="?q=Built-In+Node"]').should('be.visible')
    } 
    if (cy.get('#searchform').type(headers.inputTextLow + '{enter}')) {
      cy.get('div.error').should('have.text', headers.textNothing)
    }
    if (cy.get('#searchform').type(headers.inputTextUp + '{enter}')) {
      cy.get('div.error').should('have.text', headers.textNothing)
    }
  })

  it('AT_01.02_030 | Select a single result if there are multiple matches in the search dropdown', () => {
    cy.get('input#search-box').type(headers.dataLetter).realHover();
    let selectWord;
    cy.get('#search-box-completion li:not([style="display: none;"])').each(($el, index) => {
      const dropDown = $el.text().trim();
      if (index === 0) {
        selectWord = dropDown;
        cy.wrap($el).click()
      }
    }).then(() => {
      cy.get('input#search-box').should('have.value', selectWord);
    })
  });

  it('AT_01.02_032 | Verify that the search query matches the result in the search dropdown', () => {
    cy.get('input#search-box').type(headers.dataLetter);   
    cy.get('#search-box-completion li:not([style="display: none;"])').each(($el, index) => {
      const textDropdown = $el.text().trim();
      cy.wrap(textDropdown).should('satisfy', (text) => {
        return text.includes(headers.dataLetter) || text.includes(headers.dataLetterCap);
      })
    })

  it('AT_01.02_033 | Verify if the elements in the dropdown menu can be hovered over', () => {
    cy.get('input#search-box').type(headers.dataLetter).realHover();
    cy.get('#search-box-completion li:not([style="display: none;"])').each(($el, index) => {      
      if (index === 0) {
        cy.wrap($el).trigger('mouseover').should('be.visible');
      }
    })
  });
  it('AT_01.02_034 | Header check Search box', () => {
    cy.get('#search-box').should('be.visible')
    cy.get('#search-box').type('checking').clear()
    cy.get('#search-box').should('have.attr','placeholder','Search (CTRL+K)')
  })
})
it('AT_01.02_035 | Header | Search box | functionality', () => {
  projects.setNamesForNewProject.forEach((obj) => {
      cy.get('span.task-link-text').contains(homePage.dashboardDropdownItems[0]).click({ force: true })
      cy.get('#name').type(`${obj.name}`)
      cy.get('.hudson_model_FreeStyleProject').click()
      cy.get('#ok-button').click()
      cy.get('button[name="Submit"]').click()
      cy.get('#jenkins-name-icon').click()
  })
  cy.get('#searchform > input').type(projects.searchBoxInput)
  cy.get('.yui-ac-bd li').not('li[style="display: none;"]').each($el => {
    let textOfElements = $el.text()

    if (textOfElements === projects.setNamesForNewProject[0].name) {
      return cy.wrap($el).click().type('{enter}')
    }
  })
  cy.get('h1.job-index-headline').should('contain', `Project ${projects.setNamesForNewProject[0].name}`)
})
})

